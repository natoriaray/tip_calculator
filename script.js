// CALCULATE CONTROLLER
var calculateController = (function() {

})();

// UI CONTROLLER
var UIController = (function() {

  var DOMstrings = {
    inputBillAmount: '.bill_input',
    inputExperience: '.experience_input',
    inputNumberOfPeople: '.num_people',
    button: '.cal_btn'
  };


  return {
    getInput: function() {
      return {
        billAmount: document.querySelector(DOMstrings.inputBillAmount).value,
        experience: document.querySelector(DOMstrings.inputExperience).value,
        numberOfPeople: document.querySelector(DOMstrings.inputNumberOfPeople).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    },

    testing: function() {
      return this.getInput();
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(calcCtrl, UICtrl) {

  var setupEventListeners = function() {

    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.button).addEventListener('click', calculateTip);

    document.addEventListener('keypress', function(event) {
      if (event.keycode === 13 || event.which === 13) {
        calculateTip();
      }
    });
  };

  var calculateTip = function() {
    var input;

    // 1. Get input from fields
    input = UICtrl.getInput();
    
    // 2. Calculate tip for each person

    // 3. Display the tip on UI

  };

  return {
    init: function() {
      setupEventListeners();
    }
  }

})(calculateController, UIController);

controller.init();
