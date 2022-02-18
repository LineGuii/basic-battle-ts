import BattleCharacter from "../model/BattleCharacter";
import ISkill, { SkillDamageTypeEnum, SkillTargetEnum, SkillTypeEnum } from "../model/ISkill";

export default class DamageStep {
    attacker: BattleCharacter;
    target: BattleCharacter;

    skill: ISkill;

    hitChance: number;
    damage: number;
    criticalChance: number;

    constructor(attacker: BattleCharacter, target: BattleCharacter, skill: ISkill) {
        this.attacker = attacker;
        this.target = target;
        this.skill = skill;

        this.hitChance = this.skill.skillHitChance(attacker, target);
        this.damage = this.skill.skillDamage(attacker, target);
        this.criticalChance = this.skill.skillCriticalChance(attacker);
    }

    visualize(): void {
        console.log();
        console.log(this.skill.name);
        console.log("Damage:", this.target.calculateDamage(this.damage, SkillDamageTypeEnum.PHYSICAL));
        console.log("Hit Chance:", this.hitChance + "%");
        console.log("Critical Chance:", this.criticalChance + "%");
    }

    execute(): void {
        console.log(this.attacker.character.name + " está atacando " + this.target.character.name + " com", this.skill.name);
        console.log();

        const skillOutput = this.skill.use(this.attacker, this.target, this.hitChance, this.damage, this.criticalChance);
        console.log("skillOutput:",skillOutput)

        if (skillOutput.success) {
            console.log("ACERTOU");
            console.log();

            if (this.skill.type === SkillTypeEnum.DAMAGE) {
                // TARGET RECEIVES THE DAMAGE
                const dano = this.target.takeDamage(skillOutput.damage, SkillDamageTypeEnum.PHYSICAL);

                console.log(this.target.character.name + " recebeu " + dano + " de dano");
                console.log(this.target.character.name + " HP: " + this.target.currentLife + "/" + this.target.maximumLife);
            } else {
                if (this.skill.target === SkillTargetEnum.SELF) {
                    console.log(this.attacker.character.name, "se buffou com", this.skill.name);
                } else {
                    console.log(this.attacker.character.name, "buffed", this.target.character.name, "com", this.skill.name);
                }
            }
        } else {
            console.log("ERROU");
        }
    }
    
}