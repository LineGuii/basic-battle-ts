import { convertToObject } from "typescript";
import BattleScene from "./core/BattleScene";
import BattleCharacter from "./model/BattleCharacter";
import Character from "./model/Character";
import Tunic from "./model/equipment/chest/light-armor/Tunic";
import Shortsword from "./model/equipment/main-hand/sword/Shortsword";
import Acolyte from "./model/job/Acolyte";
import Merchant from "./model/job/Merchant";
import Scientist from "./model/job/Scientist";
import Scout from "./model/job/Scout";
import Heal from "./model/skill/acolyte/Heal";
import OfferHammer from "./model/skill/merchant/OfferHammer";
import NormalAttack from "./model/skill/NormalAttack";
import LovePotion from "./model/skill/scientist/LovePotion";
import ParalyzeDart from "./model/skill/scout/ParalyzeDart";
import PoisonDart from "./model/skill/scout/PoisonDart";
import Sewer from "./model/terrain/Sewer";

const merchant: Character  = new Character(
    {
        name: "Jones Biggs",
        job: Merchant,
        level: 20,
        skillList: [NormalAttack, OfferHammer]
    }
);

const scientist: Character  = new Character(
    {
        name: "Nikola Tesla",
        job: Scientist,
        level: 20,
        skillList: [NormalAttack, LovePotion]
    }
);

const acolyte: Character  = new Character(
    {
        name: "João Divino",
        job: Acolyte,
        level: 20,
        skillList: [NormalAttack, Heal]
    }
);

const scout: Character  = new Character(
    {
        name: "Teemo da Silva",
        job: Scout,
        level: 20,
        skillList: [NormalAttack, ParalyzeDart, PoisonDart]
    }
);

scout.setEquipment(Shortsword);
scientist.setEquipment(Tunic);
scientist.setEquipment(Shortsword);

console.log(merchant.equipments);

const battleMerchant = new BattleCharacter(merchant);
const battleScientist = new BattleCharacter(scientist);
const battleAcolyte = new BattleCharacter(acolyte);
const battleScout = new BattleCharacter(scout);

const battleScene = new BattleScene([battleScientist, battleScout], Sewer);

async function battleStart() {
    await battleScene.startBattle();
}

battleStart();

