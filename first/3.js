/*Написать метод, который получает строку вида 
"name-contains-fd&price-=2&quantity->5&description-ends-abc"
"name-starts-fd&quantity-=5"
На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)*/

//ПОЧТИ РАБОТАЕТ БРАТАНЧИК ОСТАЛОСЬ НЕМНОГО ДОДЕЛАТЬ (я себе)

let toObj = function (str) {
 let splits = str.split("&");
 console.log(splits);
 let splitsS = [];
 for (let i = 0; i<splits.length; i++){
  splitsS.push(splits[i].split('-')); 
 }
  console.log(splitsS);
  let obj = Object.fromEntries(splitsS);
  console.log(obj);
}

let a = 'name-starts-fd&quantity-=5'
let b = 'name-contains-fd&price-=2&quantity->5&description-ends-abc'
console.log(toObj(a));
console.log(toObj(b));