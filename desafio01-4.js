const user = {
  name: "Debora",
  transactions: [],
  balance: 0
};

const transition = {
    type: '',
    value: 0
}
function createTransaction(transaction){
    user.transactions.push(transaction)

    if(transaction.type == 'credit'){
        user.balance += transaction.value
    }else{
        user.balance -= transaction.value
    }

}

function getHigherTransactionByType(type){
    let value = 0;

    for(let i = 0;i < user.transactions.length; i++){
        if(user.transactions[i].type == type){
            if(value <= user.transactions[i].value){
                value = user.transactions[i].value
            }
        }
    }

    return { type, value }
}

function getAverageTransactionValue(value){
    sum = 0

    for(let i = 0;i < user.transactions.length; i++){
       sum += user.transactions[i].value
    }
    return sum / user.transactions.length
}

function getTransactionsCount(){
    sumCredit = 0
    sumdebit = 0

    for(let i = 0;i < user.transactions.length; i++){
       if(user.transactions[i].type == 'credit'){
           sumCredit ++
       }else {
           sumdebit++
       }
    }
    return { credit: sumCredit, debit: sumdebit }
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

console.log(getHigherTransactionByType("credit"));

console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());
