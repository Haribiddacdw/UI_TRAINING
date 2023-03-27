/** This function is used to store the account details
 */
(function () {
  const accountData = [
    {
      accountNumber: 1,
      cardNumber: 1,
      pin: 1,
      accountBalance: 1000,
    },
    {
      accountNumber: 2,
      cardNumber: 2,
      pin: 2,
      accountBalance: 1000,
    },
    {
      accountNumber: 3,
      cardNumber: "3",
      pin: 3,
      accountBalance: 1000,
    },
    {
      accountNumber: 4,
      cardNumber: 4,
      pin: 4,
      accountBalance: 1000,
    },
    {
      accountNumber: 5,
      cardNumber: 5,
      pin: 5,
      accountBalance: 1000,
    },
  ];
  /* The user is asked to enter the account number , pin and card number */

  let accountNumber = parseInt(window.prompt("Enter The Account number"));

  let currentUser = accountData.filter(
    (user) => accountNumber == user.accountNumber
  );
  if (currentUser.length == 0) {
    window.alert("The account number is invalid");
  } else {
    let cardNumber = window.prompt("Enter the Card Number");
    let accountPIN;
    if (cardNumber == currentUser[0]["cardNumber"]) {
      accountPIN = window.prompt("Enter the PIN");
      if (accountPIN == currentUser[0]["pin"]) {
        let choice = window.prompt(
          "Choose the Options \n 1 to withdraw \n 2 to deposit the money \n 3 to checkBalance"
        );
        if (choice == 1) {
          amountWithDraw();
        } else if (choice == 2) {
          amountDeposit();
        } else if(choice==3){
          window.alert("Available Balance " + currentUser[0]["accountBalance"]);
        }else {
          console.log("Invalid Choice");
        }
      } else {
        window.alert("Invalid PIN number");
      }
    } else {
      window.alert("Invalid Card Number");
    }
  }

  /**
   * The withdraw function to withdraw the amount;
   */
  function amountWithDraw() {
    let requestedAmount = window.prompt("Enter the amount to be withdrawn");
    if (requestedAmount > currentUser[0]["accountBalance"]) {
      window.alert("Insufficient Balance");
    } else {
      currentUser[0]["accountBalance"] =
        currentUser[0]["accountBalance"] - requestedAmount;
      window.alert("Amount Withdrawn" + requestedAmount);
      window.alert("Available Balance " + currentUser[0]["accountBalance"]);
    }
  }
  /**
   * The deposit function to deposit the amount and to update balance.
   */
  function amountDeposit() {
    let depositAmount = window.prompt("Enter the amount to be deposited");
    if (depositAmount < 0) {
      window.alert("Invalid Amount");
    } else {
      currentUser[0]["accountBalance"] =
        Number(currentUser[0]["accountBalance"]) + Number(depositAmount);

      window.alert("Balance " + currentUser[0]["accountBalance"]);
    }
  }
})();
