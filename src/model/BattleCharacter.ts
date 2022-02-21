import { SkillEffectTypeEnum } from "../enum/SkillEnum";
import Character from "./Character";
import CharacterAttributes from "./CharacterAttributes";
import ExpiringEffect from "./ExpiringEffect";

export default class BattleCharacter {
    character: Character;
    maximumLife: number;
    currentLife: number;
    battleAttributes: CharacterAttributes;
    statusList: [] = [];
    expiringEffects: ExpiringEffect[] = [];

    constructor(character: Character) {
        this.character = character;
        this.battleAttributes = new CharacterAttributes(character.characterAttributes);
        this.maximumLife = this.battleAttributes.getLife();
        this.currentLife = this.battleAttributes.getLife();
    }

    takeDamage(damage: number, type: SkillEffectTypeEnum): number {
        const value = Math.round(this.calculateDamage(damage, type));
        this.currentLife -= value;

        if (this.currentLife > this.maximumLife) {
            this.currentLife = this.maximumLife;
        }

        if (this.currentLife < 0) {
            this.currentLife = 0;
        }

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

    calculateDamage(damage: number, type: SkillEffectTypeEnum): number {
        if (type === SkillEffectTypeEnum.PHYSICAL) {
            return Math.round(damage * (damage + 100) / 100 * 8 / (this.battleAttributes.defense + 8));
        } else if (type === SkillEffectTypeEnum.MAGICAL) {
            return Math.round(damage * (damage + 100) / 100 * 8 / (this.battleAttributes.magicalDefense + 8));
        } else if(type === SkillEffectTypeEnum.TRUE) {
            return Math.round(damage);
        }
        return Math.round(damage);
    }

    calculateHitChance(attackerAccuracy: number) {
        return attackerAccuracy * (attackerAccuracy + 100) / 100 * 24 / (this.battleAttributes.flee + 12);
    }

    receiveExpiringEffect(expiringEffect: ExpiringEffect) {
        expiringEffect.useEffect(this);
        this.expiringEffects = [...this.expiringEffects, expiringEffect];
    }

    turnStarted(turn: number): void {
        // Reset attributes
        this.battleAttributes = new CharacterAttributes(this.character.characterAttributes);

        // Apply effects
        this.expiringEffects = this.expiringEffects.filter((effect: ExpiringEffect) => {
            if (turn > effect.turnsToExpire + (effect.startedTurn ? effect.startedTurn : 0 )) {
                return false;
            } else {
                effect.useEffect(this);
                console.log("Efeito:", effect.name);
                return true;
            }
        });
    }  
}