// step-1: add even listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    // step-2 : get the deposit amount form the deposit input field 
    // For input field use  .value to the value inside the input field
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);



    //step-3: get the current deposit total 
    // for non-input (element other than input, textarea  ) use innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    // step-4: add number to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;


    // depositTotalElement.innerText = newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step-5: get the    ballance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotoalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotoalString);

    //step-6: calculate current total balance 
    const currntTotalBalance = previousBalanceTotal + newDepositAmount;
    //set the balance total 
    balanceTotalElement.innerText = currntTotalBalance;



    //step-7 : clear the deposite field 
    depositField.value = '';

})

