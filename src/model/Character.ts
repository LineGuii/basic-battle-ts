import CharacterAttributes, { BaseAttributes } from "./CharacterAttributes";
import IJob from "./interface/IJob";
import ISkill from "./interface/ISkill";

type CharacterProps = {
    name: string,
    level: number,
    job: IJob,
    skillList: ISkill[]
}

class Character {
    name: string;
    level: number;
    job: IJob;
    characterAttributes: CharacterAttributes;
    skillList: ISkill[];

    constructor(props: CharacterProps) {
        this.name = props.name;
        this.level = props.level;
        this.job = props.job;
        this.skillList = props.skillList;
        this.characterAttributes = new CharacterAttributes(this._setAttributes(props.job, props.level));
    }

    private _setAttributes(job: IJob, level: number): BaseAttributes {
        return {
            strength: job.baseStrength + (job.multStength * level),
            endurance: job.baseEndurance + (job.multEndurance * level),
            agility: job.baseAgility + (job.multAgility * level),
            inteligence: job.baseInteligence + (job.multInteligence * level),
            wisdom: job.baseWisdom + (job.multWisdom * level),
            dexterity: job.baseDexterity + (job.multDexterity * level),
        }
    }
}

export default Character;