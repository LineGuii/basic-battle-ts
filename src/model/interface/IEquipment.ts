import BattleCharacter from "../BattleCharacter";
import Character from "../Character";

export default interface IArmor {
    id: number,
    name: string,
    category: EquipmentCategoryEnum,

    getAttributes: () => any;
}

export enum EquipmentCategoryEnum {
    CHEST,
    HEAD,
    MAIN_HAND,
    OFF_HAND,
    FEET,
    ACCESSORY
}
