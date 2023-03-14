// step 1 : add event listener in withdraw button 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // step 2 : get the new withdraw amount 
    const withdrawAmountField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawAmountField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawAmountField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('provide a valid number');
        return;
    }


    //step: 4 calculate balance after withdraw 
    const balanceTotalElement = document.getElementById('previous-balance');
    const prevBalanceString = balanceTotalElement.innerText;
    const prevBalance = parseFloat(prevBalanceString);


    if (newWithdrawAmount > prevBalance) {
        alert('baper bank e eto taka nai');
        return;
    }

    const totalBalance = prevBalance - newWithdrawAmount;
    balanceTotalElement.innerText = totalBalance;


    // step : 3 get the previous withdraw amount 
    const withdrawTotalElement = document.getElementById('withdraw-amount');
    const prevWithdrawAmountString = withdrawTotalElement.innerText;
    const prevWithdrawAmount = parseFloat(prevWithdrawAmountString);
    const totalWithdraw = newWithdrawAmount + prevWithdrawAmount;
    withdrawTotalElement.innerText = totalWithdraw;

})