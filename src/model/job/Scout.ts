import { JobId } from "../../enum/JobEnum";
import IJob from "../interface/IJob";

const Scout: IJob = {
        id: JobId.Scout,
        name: "Acolyte",
        preJobId: null,

        baseStrength: 5,
        baseEndurance: 7,
        baseAgility: 15,
        baseInteligence: 5,
        baseWisdom: 7,
        baseDexterity: 11,

        multStength: 0.27,
        multEndurance: 0.43,
        multAgility: 0.7,
        multInteligence: 0.15,
        multWisdom: 0.42,
        multDexterity: 0.53
}

export default Scout;