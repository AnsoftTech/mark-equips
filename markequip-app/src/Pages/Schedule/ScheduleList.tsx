import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import IsLoading from "../../Components/Loading";
import { ISchedule } from "./types";

type Props = {
  morning: ISchedule[];
  afternoon: ISchedule[];
  night: ISchedule[];
  onClickInfo: any;
  onClickOpenModal: any;
  loading: Boolean;
};

export default function ScheduleList({
  morning,
  afternoon,
  night,
  onClickInfo,
  onClickOpenModal,
  loading,
}: Props) {
  return (
    <div className="content-schedule">
      <div className="table-content">
        <h3>
          Horários: Manha
          <button
            className="btn-schedule btn-insert-schedule"
            onClick={() => onClickOpenModal(true)}
          >
            <BiAddToQueue className="icon" />
          </button>
        </h3>
        <table className="table-schedule table-schedule-responsive">
          <thead>
            <tr>
              <th>Inicio</th>
              <th>Final</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              morning.map((schedule) => (
                <tr key={schedule.id}>
                  <td>{schedule.hourInitial}</td>
                  <td>{schedule.hourFinal}</td>
                  <td>
                    <button
                      className="btn-schedule btn-edit"
                      onClick={() => onClickInfo(schedule.id)}
                    >
                      <AiFillEdit className="icon" />
                    </button>
                    <button className="btn-schedule btn-delete">
                      <AiFillDelete className="icon" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <IsLoading />
            )}
          </tbody>
        </table>
      </div>

      <div className="table-content">
        <h3>
          Horários: Tarde
          <button
            className="btn-schedule btn-insert-schedule"
            onClick={() => onClickOpenModal(true)}
          >
            <BiAddToQueue className="icon" />
          </button>
        </h3>
        <table className="table-schedule table-schedule-responsive">
          <thead>
            <tr>
              <th>Inicial</th>
              <th>Final</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              afternoon.map((schedule) => (
                <tr key={schedule.id}>
                  <td>{schedule.hourInitial}</td>
                  <td>{schedule.hourFinal}</td>
                  <td>
                    <button
                      className="btn-schedule btn-edit"
                      onClick={() => onClickInfo(schedule.id)}
                    >
                      <AiFillEdit className="icon" />
                    </button>
                    <button className="btn-schedule btn-delete">
                      <AiFillDelete className="icon" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <IsLoading />
            )}
          </tbody>
        </table>
      </div>
      <div className="table-content">
        <h3>
          Horário: Noite
          <button
            className="btn-schedule btn-insert-schedule"
            onClick={() => onClickOpenModal(true)}
          >
            <BiAddToQueue className="icon" />
          </button>
        </h3>
        <table className="table-schedule table-schedule-responsive">
          <thead>
            <tr>
              <th>Inicial</th>
              <th>Final</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              night.map((schedule) => (
                <tr key={schedule.id}>
                  <td>{schedule.hourInitial}</td>
                  <td>{schedule.hourFinal}</td>
                  <td>
                    <button
                      className="btn-schedule btn-edit"
                      onClick={() => onClickInfo(schedule.id)}
                    >
                      <AiFillEdit className="icon" />
                    </button>
                    <button className="btn-schedule btn-delete">
                      <AiFillDelete className="icon" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <IsLoading />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
