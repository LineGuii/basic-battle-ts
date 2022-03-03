import CharacterAttributes from "../../../CharacterAttributes";
import IEquipment, { EquipmentCategoryEnum } from "../../../interface/IEquipment"

const Shortsword: IEquipment= {
    id: 0,
    name: "Shortsword",
    category: EquipmentCategoryEnum.MAIN_HAND,

    getAttributes: function (): any {
        return {
            attack: 10
        };
    }
}

export default Shortsword;