// step 1: add event lisenter in deposit button 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // console.log('button clicked');
    // get  new deposit amount 
    const depositAmountField = document.getElementById('deposit-amount-field');
    // console.log(depositAmountField);
    const newDepositAmountString = depositAmountField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(typeof (newDepositAmount));

    // get previous deposit amount 
    // console.log(depositAmountValue);
    const depositTotalElement = document.getElementById('deposit-total');
    // console.log(depositTotalElement.innerText);
    const previousDepositAmountString = depositTotalElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    // console.log(previousDepositAmount);
    //  total deposit 
    const totalDeposit = previousDepositAmount + newDepositAmount;
    depositTotalElement.innerText = totalDeposit;
    // total balance 
    const balanceAmount = document.getElementById('previous-balance');
    const prevBalanceAmountString = balanceAmount.innerText;
    const prevBalanceAmount = parseFloat(prevBalanceAmountString);
    const totalBalance = prevBalanceAmount + newDepositAmount;
    balanceAmount.innerText = totalBalance

    depositAmountField.value = '';
})