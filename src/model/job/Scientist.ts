import { JobId } from "../../enum/JobEnum";
import IJob from "../interface/IJob";

const Scientist: IJob = {
        id: JobId.Scientist,
        name: "Scientist",
        preJobId: null,

        baseStrength: 3,
        baseEndurance: 6,
        baseAgility: 6,
        baseInteligence: 15,
        baseWisdom: 8,
        baseDexterity: 12,

        multStength: 0.38,
        multEndurance: 0.42,
        multAgility: 0.24,
        multInteligence: 0.27,
        multWisdom: 0.85,
        multDexterity: 0.34
}

export default Scientist;