import BattleCharacter from "../model/BattleCharacter";
import { SkillEffectTypeEnum, SkillOutput, SkillTargetEnum, SkillTypeEnum } from "../enum/SkillEnum"
import ISkill from "../model/interface/ISkill";

export default class DamageStep {
    attacker: BattleCharacter;
    target: BattleCharacter;

    skill: ISkill;

    hitChance: number;
    effect: number;
    criticalChance: number;

    turn: number;

    constructor(attacker: BattleCharacter, target: BattleCharacter, skill: ISkill, turn: number) {
        this.attacker = attacker;
        this.target = target;
        this.skill = skill;

        this.hitChance = this.skill.skillHitChance(attacker, target);
        this.effect = this.skill.skillEffectNumber(attacker, target);
        this.criticalChance = this.skill.skillCriticalChance(attacker);
        this.turn = turn;
    }

    visualize(): void {
        console.log();
        console.log("\t" + this.skill.name);
        if (this.skill.type === SkillTypeEnum.DAMAGE) {
            console.log("\tDamage:", this.target.calculateDamage(this.effect, this.skill.effectType));
            console.log("\tHit Chance:", this.hitChance + "%");
            console.log("\tCritical Chance:", this.criticalChance + "%");
        } else if (this.skill.type === SkillTypeEnum.BUFF) {
            console.log("\tBuff");
        }
    }

    execute(): void {
        console.log("\t" + this.attacker.character.name + " está usando " + this.skill.name + " em", this.target.character.name);
        console.log();

        const skillOutput = this.skill.execute(this.attacker, this.target, this.hitChance, this.effect, this.criticalChance, this.turn);
        console.log("\tskillOutput:",skillOutput)

        if (skillOutput.success) {
            console.log("\tACERTOU");
            console.log();
            
            this.executeSkillEffects(skillOutput);
        } else {
            console.log("\tERROU");
        }
    }

    executeSkillEffects(skillOutput: SkillOutput): void {
        
        if (skillOutput.expiringEffect != null) {
            console.log(this.attacker.character.name, "aplicou o efeito", skillOutput.expiringEffect.name, "em", this.target.character.name);
            this.target.receiveExpiringEffect(skillOutput.expiringEffect);
        }

        if (skillOutput.healing) {
            this.target.recoverLife(skillOutput.effect);
            console.log(this.attacker.character.name, "curou", skillOutput.effect, "HP de", this.target.character.name, "com", this.skill.name);
            console.log(this.target.character.name + " HP: " + this.target.currentLife + "/" + this.target.maximumLife);
            return;
        }

        if (this.skill.type === SkillTypeEnum.DAMAGE) {
            // TARGET RECEIVES THE DAMAGE
            const dano = this.target.takeDamage(skillOutput.effect, SkillEffectTypeEnum.PHYSICAL);

            console.log(this.target.character.name + " recebeu " + dano + " de dano");
            console.log(this.target.character.name + " HP: " + this.target.currentLife + "/" + this.target.maximumLife);
        } else {
            if (this.skill.target === SkillTargetEnum.SELF) {
                console.log(this.attacker.character.name, "se buffou com", this.skill.name);
            } else {
                console.log(this.attacker.character.name, "buffed", this.target.character.name, "com", this.skill.name);
            }
        }
    }
    
}