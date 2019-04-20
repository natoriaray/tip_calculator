// CALCULATE CONTROLLER
var calculateController = (function(UICtrl) {

  return {
    calcTip: function(bill, expPercentage, numPeople) {
      var totalTip;

      totalTip = parseInt(bill) * expPercentage;
      return totalTip / parseInt(numPeople);
    }
  };

})(UIController);

// UI CONTROLLER
var UIController = (function() {

  var DOMstrings = {
    inputBillAmount: '.bill_input',
    inputExperience: '.experience_input',
    inputNumberOfPeople: '.num_people',
    button: '.cal_btn',
    tipDisplay: '.tip_display'
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

    calcPercentage: function() {

      var DOMexperience = document.querySelector(DOMstrings.inputExperience).value;
      var percentage;

      if (DOMexperience === 'awesome') {
        percentage = .30;
      } else if (DOMexperience === 'good') {
        percentage = .25;
      } else if (DOMexperience === 'ok') {
        percentage = .15;
      } else if (DOMexperience === 'beBetter') {
        percentage = .10;
      } else if (DOMexperience === 'bad') {
        percentage = .05;
      } else {
        percentage = 0;
      }

      return percentage;
    },

    displayTip: function(tipAmount) {
      var element;

      element = DOMstrings.tipDisplay;

      document.querySelector(element).innerHTML = '$' + tipAmount;
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
    var input, tip;

    // 1. Get input from fields
    input = UICtrl.getInput();
    console.log(input);

    // 2. Calculate tip for each person
    percent = UICtrl.calcPercentage();
    console.log(percent);
    tip = calculateController.calcTip(input.billAmount, percent, input.numberOfPeople).toFixed(2);

    console.log(tip);
    // 3. Display the tip on UI
    UICtrl.displayTip(tip);
  };

  return {
    init: function() {
      setupEventListeners();
    }
  }

})(calculateController, UIController);

controller.init();
