document.getElementById('calbtn').addEventListener('click', function() {

  var calcInfo = {
      billAmount: document.getElementById('bill_amount').value,
      numOfPeople: document.getElementById('num_people').value
    }
  

  console.log(calcInfo);
})
