
const template = `
<div class="">
    <div class="">
        <input id="diceRollNumber" class="textEntry" maxlength="1000" type="text" placeholder="1"/>
    </div>
    <div class="">
        <input id="diceType" class="textEntry" maxlength="1000" type="text" placeholder="Dice"/>
    </div>
    <div class="">
        <input id="innerAdd" class="textEntry" maxlength="1000" type="text" placeholder="0"/>
    </div>
    <div class="">
        <button id="rollButton" class="ui red button">Roll</button>
    </div>
</div>
`;

const AdvancedDice = { template };

export default AdvancedDice;
