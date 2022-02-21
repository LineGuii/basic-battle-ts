import BattleCharacter from "../BattleCharacter";

export default interface IItem {
    id: number,
    name: string,
    type: ItemTypeEnum,
    area: number,
    
    use: (user: BattleCharacter, target: BattleCharacter) => ItemOutput,
}

export enum ItemTypeEnum {
    BUFF = "BUFF",
    HURT = "HURT"
}

export type ItemOutput = {
    success: boolean,
    effect: number
}