import Character from "../../../Character";
import IEquipment, { EquipmentCategoryEnum } from "../../../interface/IEquipment"

const Tunic: IEquipment= {
    id: 0,
    name: "Tunic",
    category: EquipmentCategoryEnum.CHEST,

    getAttributes: function (): any {
        return {
            defense: 10,
            magicalDefense: 4
        };
    }
}

export default Tunic;