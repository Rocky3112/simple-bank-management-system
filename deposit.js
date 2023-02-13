document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field')
    const newDepositAmmountString =depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);

    depositField.value = '';
    //if anyone not enter the number value 
    
    if(isNaN(newDepositAmmount)){
        alert('Please Enter a Number');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmmount;

    depositTotalElement.innerText = currentDepositTotal;


    // Balance Total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;

    balanceTotalElement.innerText = currentBalanceTotal;

})