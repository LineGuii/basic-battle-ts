import BattleCharacter from "../BattleCharacter";
import ITerrain from "../interface/ITerrain";
import Paralyze from "../status-effect/Paralyze";
import Poison from "../status-effect/Poison";''

const Sewer: ITerrain = {
    name: "Sewer",

    effect: (turnNumber: number, currentBattleCharacter: BattleCharacter, battleCharacters: BattleCharacter[]): void => {
        if (turnNumber % 5 === 0) {
            const r = Math.random();

            switch (Number((r * 1).toFixed())) {
                case 0:
                    console.log("\nTODO MUNDO ENVENENADO\n");
                    battleCharacters.forEach(character => character.receiveExpiringEffect(new Poison(3, turnNumber, (character.maximumLife * 0.01) + 1, "Poison")));
                    break;
                case 1:
                    console.log("\nTODO MUNDO PARALIZADO\n");
                    battleCharacters.forEach(character => character.receiveExpiringEffect(new Paralyze(1, turnNumber, "Paralyze")));
                    break;
                default:
                    console.log("Não era pra isso acontecer");
            }
        }
    }
}

export default Sewer;