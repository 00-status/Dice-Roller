
import DiceButtons from './components/DiceButtons.js';
import DiceText from './components/DiceText.js';
import AdvancedDice from './components/AdvancedDice.js';

var app = new Vue({
    el: '#contents',
    components: {
        'dice-buttons': DiceButtons,
        'dice-text': DiceText,
        'advanced-dice': AdvancedDice
    }
});
