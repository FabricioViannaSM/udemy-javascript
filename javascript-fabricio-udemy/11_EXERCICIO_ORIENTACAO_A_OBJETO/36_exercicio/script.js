class Bank {
    constructor(){
        this.balance = 0} 

    withdrawl(num){
        return this.balance -= num
    }
    deposit(num){
        return this.balance +=  num
    }
}

let myAccount = new Bank()
console.log(myAccount.balance)
myAccount.withdrawl(1000)
console.log(myAccount.balance)
myAccount.deposit(1500)
console.log(myAccount.balance)