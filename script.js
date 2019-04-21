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

    clearFields: function() {
      var fields, fieldsArray;

      fields = document.querySelectorAll(DOMstrings.inputBillAmount + ', ' + DOMstrings.inputExperience + ', ' + DOMstrings.inputNumberOfPeople);

      fieldsArray = Array.prototype.slice.call(fields);

      fieldsArray.forEach(function(current, index, array) {
        current.value = "";
      });
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(calcCtrl, UICtrl) {

  var setupEventListeners = function() {

    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.button).addEventListener('click', calculateTip);

    $(document).unbind('keypress').bind('keypress', function (e) {
      if (e.keycode === 13 || e.which === 13) {
        calculateTip();
  }
});
  };


  var calculateTip = function() {
    console.log('clicked');
    var input, tip;
    // 1. Get input from fields
    input = UICtrl.getInput();

    // 2. Calculate tip for each person
    percent = UICtrl.calcPercentage();
    tip = calcCtrl.calcTip(input.billAmount, percent, input.numberOfPeople).toFixed(2);
    // 3. Clear input fields
    UICtrl.clearFields();

    // 4. Display the tip on UI
    UICtrl.displayTip(tip);

  };

  return {
    init: function() {
      setupEventListeners();
    }
  }

})(calculateController, UIController);

controller.init();
