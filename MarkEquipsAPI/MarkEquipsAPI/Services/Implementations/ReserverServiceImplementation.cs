﻿using AutoMapper;
using MarkEquipsAPI.Data.DTOs;
using MarkEquipsAPI.Models;
using MarkEquipsAPI.Models.Enums;
using MarkEquipsAPI.Repository;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace MarkEquipsAPI.Services.Implementations
{
    public class ReserverServiceImplementation : IReserverService
    {
        private readonly ReserverRepository _repository;
        private readonly IMapper _mapper;

        public ReserverServiceImplementation(ReserverRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<ReserverDto>> FindAllAsync()
        {
            var result = await _repository.FindAllAsync();
            return _mapper.Map<List<ReserverDto>>(result);
        }

        public async Task<ReserverDto> FindByIdAsync(int id)
        {
            var reservationsDto = await _repository.FindByIdAsync(id);
            return _mapper.Map<ReserverDto>(reservationsDto); 
        }

        public async Task AddReserverAsync(ReserverDto reserver)
        {

            var result = _mapper.Map<Reserver>(reserver);
            Console.WriteLine(result.EquipmentId+ " " + result.ScheduleId + " " + result.Date);
            bool isValidate = await _repository.IsValidationAsync(result.EquipmentId, result.ScheduleId, result.Date, ReserveStatus.RESERVED);
            if (isValidate)
            {
                throw new Exception("Equipment already registered with that same time and date, please choose another time or equipment \n");
            }
            await _repository.AddReserverAsync(result);
        }

        public async Task RevokeAsync(int id)
        {
            try
            {
                var statusUpdate = new Reserver() { Id = id, Status = ReserveStatus.CANCELED };
                await _repository.RevokeReserverAsync(statusUpdate);
            }
            catch (Exception e)
            {
                throw new Exception("Error in Update Reserver" + e.Message);
            }
        }

        public async Task DeleteAsync(int id)
        {
            try
            {
                var result = await _repository.FindByIdAsync(id);
                if (result != null)
                {
                    await _repository.DeleteAsync(result);
                }
            }
            catch (Exception e)
            {
                throw new Exception("Error: " + e.Message);
            }
        }


    }
}


