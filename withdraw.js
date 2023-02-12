document.getElementById('btn-Withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmmountString =withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentTotalWithdraw =previousWithdrawTotal +newWithdrawAmmount;

    withdrawTotalElement.innerText = currentTotalWithdraw;


    //after withdraw balance part

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;


})