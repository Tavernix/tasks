/*Написать метод, который получает строку вида 
"name-contains-fd&price-=2&quantity->5&description-ends-abc"
"name-starts-fd&quantity-=5"
На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)*/
class Product {
  constructor(str) {
     //сначала разбил троку на двумерный массив:
     let splits = str.split("&");
     let arr = [];
     for (let i = 0; i<splits.length; i++){
      arr.push(splits[i].split('-')); 
     }
     //console.log(arr);   
     
     //далее сбор обьекта:
     for(let i = 0; i<arr.length; i++){
      if(arr[i][0] == 'name'){
        this.name = arr[i][1];
      }
      if(arr[i][0] == 'price'){
        this.price = arr[i][1];
      }
      if(arr[i][0] == 'quantity'){
        this.quantity = arr[i][1];
      }
      if(arr[i][0] == 'description'){
        this.description = arr[i][1];
      }
    }
  }
}
let a = 'name-starts-fd&quantity-=5'
let b = 'name-contains-fd&price-=2&quantity->5&description-ends-abc'
console.log(new Product(a));
console.log(new Product(b));