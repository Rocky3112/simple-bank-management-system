document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field')
    const newDepositAmmountString =depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);

    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmmount;

    depositTotalElement.innerText = currentDepositTotal;

})