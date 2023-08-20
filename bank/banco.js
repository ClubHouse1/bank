var bankAccounts = [
    { accountNumber: "1212", pin: "4323", balance: 1000, accountHolder: "Diego", creditCardNumber: "1111222233334444" },
    { accountNumber: "1313", pin: "3453", balance: 2000, accountHolder: "Santiago", creditCardNumber: "4444333322221111" },
    { accountNumber: "1414", pin: "4564", balance: 2000, accountHolder: "Carlos", creditCardNumber: "5555666677778888" },
    { accountNumber: "1515", pin: "5675", balance: 2000, accountHolder: "Marcelo Rabelo", creditCardNumber: "8888777766665555" },
    { accountNumber: "1616", pin: "1789", balance: 2000, accountHolder: "leandro", creditCardNumber: "8888777766665555" },
    { accountNumber: "1717", pin: "1432", balance: 2000, accountHolder: "luizinho", creditCardNumber: "8888777766665555" },
    { accountNumber: "1818", pin: "4634", balance: 2000, accountHolder: "tiago", creditCardNumber: "8888777766665555" },
    { accountNumber: "1921", pin: "7644", balance: 2000, accountHolder: "felipe", creditCardNumber: "8888777766665555" },
    { accountNumber: "2654", pin: "1765", balance: 2000, accountHolder: "renato", creditCardNumber: "8888777766665555" },
    { accountNumber: "6562", pin: "1345", balance: 2000, accountHolder: "rehan", creditCardNumber: "8888777766665555" },
    { accountNumber: "5324", pin: "1655", balance: 2000, accountHolder: "Mark and Enrique", creditCardNumber: "8888777766665555" }
];

var currentAccount = null;

function authenticate() {
    var accountNumberInput = document.getElementById("accountNumber");
    var pinInput = document.getElementById("pin");

    var account = bankAccounts.find(acc => acc.accountNumber === accountNumberInput.value && acc.pin === pinInput.value);

    if (account) {
        currentAccount = account;
        showTransactionSection();
    } else {
        alert("Número de conta ou PIN inválido.");
    }
    // Clear input fields
    accountNumberInput.value = "";
    pinInput.value = "";
}

function showTransactionSection() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("transactionSection").style.display = "block";
    document.getElementById("accountHolder").textContent = currentAccount.accountHolder;
    document.getElementById("loggedInAccountNumber").textContent = currentAccount.accountNumber;
    document.getElementById("creditCardNumber").textContent = currentAccount.creditCardNumber;
    showMarketingSection();
}

function showMarketingSection() {
    document.getElementById("marketingSection").style.display = "block";
}

function logOut() {
    currentAccount = null;
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("transactionSection").style.display = "none";
    document.getElementById("marketingSection").style.display = "none";
    document.getElementById("creditCardApplicationForm").style.display = "none";
    document.getElementById("formSubmittedMessage").style.display = "none";
}

function checkBalance() {
    alert("Your balance is $" + currentAccount.balance);
}

function withdraw() {
    var amount = parseInt(prompt("Enter withdrawal amount:"));

    if (amount <= 0 || amount > currentAccount.balance) {
        alert("Invalid amount.");
    } else {
        currentAccount.balance -= amount;
        alert("Withdrawal successful. New balance: $" + currentAccount.balance);
    }
}

function moveToSavings() {
    var amount = parseInt(prompt("Enter amount to move to savings:"));

    if (amount <= 0 || amount > currentAccount.balance) {
        alert("Invalid amount.");
    } else {
        currentAccount.balance -= amount;
        alert("Moved to savings. New balance: $" + currentAccount.balance);
    }
}

function payCards() {
    var amount = parseInt(prompt("Enter amount to pay cards:"));

    if (amount <= 0 || amount > currentAccount.balance) {
        alert("Invalid amount.");
    } else {
        currentAccount.balance -= amount;
        alert("Payment successful. New balance: $" + currentAccount.balance);
    }
}

function applyForCreditCard() {
    document.getElementById("transactionSection").style.display = "none";
    document.getElementById("creditCardApplicationForm").style.display = "block";
}

function submitCreditCardApplication() {
    // You can implement more sophisticated form submission logic here
    alert("Credit card application submitted!");
    document.getElementById("creditCardApplicationForm").style.display = "none";
    document.getElementById("formSubmittedMessage").style.display = "block";
}

function submitCreditCardApplication() {
    // You can implement more sophisticated form submission logic here
    alert("Credit card application submitted!");

    // Clear the form and reset the account information
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    currentAccount = null;

    // Show the transaction section to log in again
    showTransactionSection();
}

function payCards() {
    var amount = parseInt(prompt("Enter amount to pay cards:"));

    if (amount <= 0 || amount > currentAccount.balance) {
        alert("Invalid amount.");
    } else {
        currentAccount.balance -= amount;
        alert("Payment successful. New balance: $" + currentAccount.balance);
    }
}

function applyForCreditCard() {
    document.getElementById("transactionSection").style.display = "none";
    document.getElementById("creditCardApplicationForm").style.display = "block";
}

function submitCreditCardApplication() {
    // You can implement more sophisticated form submission logic here
    alert("Credit card application submitted!");

    // Clear the form and reset the account information
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    currentAccount = null;

    // Show the transaction section to log in again
    showTransactionSection();
}

function deposit() {
    var amount = parseInt(prompt("Enter deposit amount:"));

    if (amount <= 0) {
        alert("Invalid amount.");
    } else {
        currentAccount.balance += amount;
        alert("Deposit successful. New balance: $" + currentAccount.balance);
    }
}
function transferMoney() {
    var recipientAccountNumber = prompt("insira numero da conta do recipiente:");
    var recipientAccount = bankAccounts.find(acc => acc.accountNumber === recipientAccountNumber);

    if (!recipientAccount) {
        alert("conta do");
        return; // Exit the function if recipient account not found
    }

    var confirmedRecipientName = prompt("Digite o nome do usuario recipiente: " + recipientAccount.accountHolder);

    if (confirmedRecipientName !== recipientAccount.accountHolder) {
        alert("Recipient's name doesn't match.");
        return; // Exit the function if recipient name doesn't match
    }

    var amount = parseInt(prompt("Enter the amount to transfer:"));

    if (amount <= 0 || amount > currentAccount.balance) {
        alert("Invalid amount.");
    } else {
        currentAccount.balance -= amount;
        recipientAccount.balance += amount;

        alert("Transfer successful. New balance: $" + currentAccount.balance);
        updateBalanceDisplay(); // Update sender's balance display
    }
}


// Add event listener for the "Transfer Money" button
document.getElementById("transferMoneyButton").addEventListener("click", transferMoney);

function showTransactionSection() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("transactionSection").style.display = "block";
    document.getElementById("accountHolder").textContent = currentAccount.accountHolder;
    document.getElementById("loggedInAccountNumber").textContent = currentAccount.accountNumber;
    document.getElementById("creditCardNumber").textContent = currentAccount.creditCardNumber;

    // Display the current date
    var currentDate = new Date().toLocaleDateString();
    document.getElementById("currentDate").textContent = currentDate;

    showMarketingSection();
}
