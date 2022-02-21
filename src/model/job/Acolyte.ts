import { JobId } from "../../enum/JobEnum";
import IJob from "../interface/IJob";

const Acolyte: IJob = {
        id: JobId.Acolyte,
        name: "Acolyte",
        preJobId: null,

        baseStrength: 5,
        baseEndurance: 9,
        baseAgility: 4,
        baseInteligence: 10,
        baseWisdom: 14,
        baseDexterity: 8,

        multStength: 0.4,
        multEndurance: 0.38,
        multAgility: 0.29,
        multInteligence: 0.55,
        multWisdom: 0.48,
        multDexterity: 0.4
}

export default Acolyte;