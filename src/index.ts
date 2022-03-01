import BattleScene from "./core/BattleScene";
import DamageStep from "./core/DamageStep";
import BattleCharacter from "./model/BattleCharacter";
import Character from "./model/Character";
import Acolyte from "./model/job/Acolyte";
import Assassin from "./model/job/Assassin";
import Merchant from "./model/job/Merchant";
import Scientist from "./model/job/Scientist";
import Scout from "./model/job/Scout";
import Heal from "./model/skill/acolyte/Heal";
import OfferHammer from "./model/skill/merchant/OfferHammer";
import NormalAttack from "./model/skill/NormalAttack";
import LovePotion from "./model/skill/scientist/LovePotion";
import ParalyzeDart from "./model/skill/scout/ParalyzeDart";
import PoisonDart from "./model/skill/scout/PoisonDart";

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

const battleMerchant = new BattleCharacter(merchant);
const battleScientist = new BattleCharacter(scientist);
const battleAcolyte = new BattleCharacter(acolyte);
const battleScout = new BattleCharacter(scout);
battleScout.battleAttributes.attack += 40;

const battleScene = new BattleScene([battleScientist, battleScout]);

async function battleStart() {
    await battleScene.startBattle();
}

battleStart();
//
// const dp1 = new DamageStep(battleMerchant, battleScientist, OfferHammer, battleScene.currentTurn);
// dp1.visualize();
// dp1.execute();
//
// battleScene.passTurn();
// let dp2 = new DamageStep(battleMerchant, battleScientist, NormalAttack, battleScene.currentTurn);
// dp2.visualize();
// dp2.execute();
//
// battleScene.passTurn();
// dp2 = new DamageStep(battleMerchant, battleScientist, NormalAttack, battleScene.currentTurn);
// dp2.visualize();
// dp2.execute();
//
// battleScene.passTurn();
// const dp4 = new DamageStep(battleScientist, battleMerchant, LovePotion, battleScene.currentTurn);
// dp4.visualize();
// dp4.execute();
//
// battleScene.passTurn();
// dp2 = new DamageStep(battleMerchant, battleScientist, NormalAttack, battleScene.currentTurn);
// dp2.visualize();
// dp2.execute();
//
// battleScene.passTurn();
// dp2 = new DamageStep(battleMerchant, battleScientist, NormalAttack, battleScene.currentTurn);
// dp2.visualize();
// dp2.execute();
//
// battleScene.passTurn();
// dp2 = new DamageStep(battleMerchant, battleScientist, NormalAttack, battleScene.currentTurn);
// dp2.visualize();
// dp2.execute();
//
// battleScene.passTurn();
// dp2 = new DamageStep(battleMerchant, battleScientist, NormalAttack, battleScene.currentTurn);
// dp2.visualize();
// dp2.execute();
//
// battleScene.passTurn();
// const dp3 = new DamageStep(battleAcolyte, battleScientist, Heal, battleScene.currentTurn);
// dp3.visualize();
// dp3.execute();

// console.log(Math.round(22.5 * (22.5 + 100) / 100 * 8 / (15.5 + 8)));