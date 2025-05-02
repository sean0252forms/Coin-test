//Classes
class TitleCurrency{
    constructor(type,amt){
      this.type=type
      this.amt=amt
    }
  }
  //Variables
  var oneDollar=new TitleCurrency("one Dollar",1.00)
  var nickleCoin=new TitleCurrency("nickel",0.05)
  var dimeCoin=new TitleCurrency("dime",0.10)
  var pennyCoin=new TitleCurrency("penny",0.01)
  var quarterCoin=new TitleCurrency("quarter",0.25)
  var currencyList
//Scripts
  currencyList=[oneDollar,quarterCoin,dimeCoin,nickleCoin,pennyCoin]
  console.log(currencyList)