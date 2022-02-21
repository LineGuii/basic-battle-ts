import { JobId } from "../../enum/JobEnum";
import IJob from "../interface/IJob";

const Merchant: IJob = {
        id: JobId.Merchant,
        name: "Merchant",
        preJobId: null,

        baseStrength: 7,
        baseEndurance: 16,
        baseAgility: 3,
        baseInteligence: 7,
        baseWisdom: 9,
        baseDexterity: 8,

        multStength: 0.38,
        multEndurance: 0.42,
        multAgility: 0.24,
        multInteligence: 0.27,
        multWisdom: 0.85,
        multDexterity: 0.34
}

export default Merchant;