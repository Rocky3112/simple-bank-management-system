document.getElementById('btn-Withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmmountString =withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    withdrawField.value = '';
    //if anyone not enter the number value 
    if(isNaN(newWithdrawAmmount)){
        alert('Please Enter a Number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    //after withdraw balance part

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //condition 
    if(newWithdrawAmmount > previousBalanceTotal){
        alert('You dont have enough balance in your account')
        return;
    }

    const currentTotalWithdraw =previousWithdrawTotal +newWithdrawAmmount;

    withdrawTotalElement.innerText = currentTotalWithdraw;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;


})