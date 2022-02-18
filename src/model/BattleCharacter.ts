import Character from "./Character";
import CharacterAttributes from "./CharacterAttributes";
import { SkillDamageTypeEnum } from "./ISkill";

export default class BattleCharacter {
    character: Character;
    maximumLife: number;
    currentLife: number;
    battleAttributes: CharacterAttributes;
    statusList: [] = [];

    constructor(character: Character) {
        this.character = character;
        this.battleAttributes = new CharacterAttributes(character.characterAttributes);
        this.maximumLife = this.battleAttributes.getLife();
        this.currentLife = this.battleAttributes.getLife();
    }

    takeDamage(damage: number, type: SkillDamageTypeEnum): number {
        const value = Math.round(this.calculateDamage(damage, type));
        this.currentLife -= value;
        return value;
    }

    recoverLife(amount: number) {
        this.currentLife += amount;
        if (this.currentLife > this.maximumLife) {
            this.currentLife = this.maximumLife;
        }
    }

    changeAttributes(attributeName: string, value: number, type: "SUM" | "MULTIPLY" | "DIVIDE") {
        if (type === "SUM") {
            // this.battleAttributes[attributeName] += value;
        } else if (type === "MULTIPLY") {
            // this.battleAttributes[attributeName] *= value;
        } else if (type === "DIVIDE") {
            // this.battleAttributes[attributeName] = this.battleAttributes[attributeName] / value;
        }
    }

    calculateDamage(damage: number, type: SkillDamageTypeEnum): number {
        if (type === SkillDamageTypeEnum.PHYSICAL) {
            return Math.round(damage * (damage + 100) / 100 * 8 / (this.battleAttributes.defense + 8));
        }
        return Math.round(damage * (damage + 100) / 100 * 8 / (this.battleAttributes.magicalDefense + 8));
    }

    calculateHitChance(attackerAccuracy: number) {
        return attackerAccuracy * (attackerAccuracy + 100) / 100 * 24 / (this.battleAttributes.flee + 12);
    }
}