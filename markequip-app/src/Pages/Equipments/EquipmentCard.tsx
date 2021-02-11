import { IEquipment } from "./types";
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

type Props = {
  equipment: IEquipment;
  onClickInfo: (equipmentId: number) => void;
  deleteEquipment: (equipmentId: number) => void;
  onClickReserver: (equipmentId: number) => void;
}

export default function EquipmentCard({
  equipment,
  onClickInfo,
  deleteEquipment,
  onClickReserver
}: Props) {
  return (
    <>
      <div className="equipment">
        <div className="equipment-title">
          <h4 className="equipment-name">{equipment.name}</h4>
          <h5 className="equipment-tombo">Nº {equipment.number}</h5>
        </div>
        <div className="equipment-description">
          <p>{`${equipment.description.substring(0, 69)}...`}</p>
        </div>
        <div className="equipment-btn-action">
          <div className="equipment-btn-reserver" >
          <button onClick={() => onClickReserver(equipment.id)}>Reservar</button>
          </div>
          <div className="equipment-btn-edit-delete">
          <button
            className="equipment-btn-edit"
            onClick={() => onClickInfo(equipment.id)}>
            <BiEdit title="Editar"/>
          </button>
          <button
            className="equipment-btn-delete"
            onClick={() => {
              if (window.confirm(`Você tem certeza que deseja remover o(a): ${equipment.name}`)) { 
                deleteEquipment(equipment.id); 
              }
            }}>
            <AiFillDelete title="Deletar"/>
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
