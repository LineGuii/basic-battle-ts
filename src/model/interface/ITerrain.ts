import BattleCharacter from "../BattleCharacter";

export default interface ITerrain {
    name: string,
    effect: (turnNumber: number, currentBattleCharacter: BattleCharacter, battleCharacters: BattleCharacter[]) => void
}