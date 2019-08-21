/**
 * 自販機的なやつを作成
 */

// 使用できる硬貨
type Coin = 10 | 50 | 100 | 500;
// 使用できる紙幣
type Bill = 1000;
// 使用できるお金はCoinとBill
// type Money = Coin | Bill;

const Coin = [
  10, 50, 100, 500
];

interface Money {
  coin: Number,
  bill: Number,
}


export default class Vending implements Money {
  private input;
  private sum = 0;
  public coin;
  public bill;

  constructor () {
    this.input = document.querySelectorAll('.input');
    for(let element of this.input) {
      element.addEventListener('click', (): void => {
        let eleValue: Number = Number(element.dataset.value);
      })
    }
  }

  public vending () {
    let value: number;
    this.input[0].addEventListener('click', () => {
      value = Number(this.input.value);
      this.insertMoney(value);
    })
  }

  public insertMoney (money): void {
    if(money) {
      console.log(money);
    }
  }

  public coinCheck () {
    console.log('hogehogehoge')
  }
}

class MoneyCheck {
  check (props: number) {
    if (props === 10) {
      return false
    }
  }
}
