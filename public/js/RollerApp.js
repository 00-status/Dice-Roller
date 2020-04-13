
import DiceButtons from './components/DiceButtons.js';
import DiceText from './components/DiceText.js';
import AdvancedDice from './components/AdvancedDice.js';

import rollDice from './roller.js';

var app = new Vue({
    el: '#contents',
    data: { diceHistory:'' },
    components: {
        'dice-buttons': DiceButtons,
        'dice-text': DiceText,
        'advanced-dice': AdvancedDice
    },
    methods: {
        handleDiceRoll: function (diceType, numberOfDice, add) {
            // some super basic validation
            diceType = diceType ? diceType : 6;
            numberOfDice = numberOfDice ? numberOfDice : 1;
            add = add ? add : 0;

            this.diceHistory = rollDice(diceType, numberOfDice, add) + this.diceHistory;
        },
    }
});
