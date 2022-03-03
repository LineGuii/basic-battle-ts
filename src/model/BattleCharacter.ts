import BattleScene from "../core/BattleScene";
import { SkillEffectTypeEnum } from "../enum/SkillEnum";
import Character from "./Character";
import CharacterAttributes from "./CharacterAttributes";
import ExpiringEffect from "./ExpiringEffect";
import IEquipment from "./interface/IEquipment";

export default class BattleCharacter {
    character: Character;
    maximumLife: number;
    currentLife: number;
    private baseAttributes: CharacterAttributes;
    battleAttributes: CharacterAttributes;
    expiringEffects: ExpiringEffect[] = [];

    constructor(character: Character) {
        this.character = character;
        this.baseAttributes = this.calculateAttributesWithEquipmentsStats(character);
        this.battleAttributes = this.baseAttributes;
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
        if (expiringEffect.useOnApply) {
            expiringEffect.useEffect(this);
        }
        this.expiringEffects = [...this.expiringEffects, expiringEffect];
    }

    turnStarted(turn: number): void {
        // Reset attributes
        this.battleAttributes = this.baseAttributes;

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

    private calculateAttributesWithEquipmentsStats(character: Character): CharacterAttributes {
        let baseAttributes: CharacterAttributes = new CharacterAttributes(character.characterAttributes);
        character.equipments.forEach((e: IEquipment) => {
            const eAttributes = Object.entries(e.getAttributes());
            eAttributes.forEach((attr) => {
                // @ts-ignore
                baseAttributes[attr[0] as keyof CharacterAttributes] += attr[1];
            });
        });

        return baseAttributes;
    }
}