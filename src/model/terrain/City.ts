import BattleCharacter from "../BattleCharacter";
import ITerrain from "../interface/ITerrain";

const City: ITerrain = {
    name: "City",

    effect: (turnNumber: number, currentBattleCharacter: BattleCharacter, battleCharacters: BattleCharacter[]): void => {
        // DO NOTHING
        return;
    }
}