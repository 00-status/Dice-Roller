
const template = `
<!--A text field that the results of the dice rolls go-->
<div class="ui form" id="rollerForm">
    <div class="field">
        <textarea class="textEntry" rows="14" id="history" readonly></textarea>
    </div>
    <!--An advanced dice roller for special rolls-->
    <div class="ui centered grid">
        <div class="two wide computer three wide tablet four wide mobile column">
            <input class="textEntry" maxlength="1000" id="diceRollNumber" type="text" placeholder="1"/>
        </div>
        <div class="one wide computer one wide tablet two wide mobile column"><h2>d</h2></div>
        <div class="two wide computer three wide tablet four wide mobile column">
            <input class="textEntry" maxlength="1000" id="diceType" type="text" placeholder="Dice"/>
        </div>
        <div class="one wide computer one wide tablet two wide mobile column"><h1>+</h1></div>
        <div class="two wide computer three wide tablet four wide mobile column">
            <input class="textEntry" maxlength="1000"id="innerAdd" type="text" placeholder="0"/>
        </div>
        <div class="two wide computer three wide tablet four wide mobile column">
            <button id="rollButton" class="ui red button">Roll</button>
        </div>
    </div>
</div>
`;

const DiceText = {template};

export default DiceText;
