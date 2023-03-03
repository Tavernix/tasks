//я не понимаю что такое fd и abc, что значат эти букавки
//поэтому не знаю что с ними делать. тот код их игнорировал
//а этот добавит их в значения

class Product {
  constructor(str) {

     let splits = str.split("&");
     let arr = [];
     for (let i = 0; i<splits.length; i++){
      arr.push(splits[i].split('-')); 
     }
     //console.log(arr);   
     
     for(let i = 0; i<arr.length; i++){
      if(arr[i][0] == 'name'){
        this.name = arr[i].slice(1).join('-');
      }   //из нужного массива убрал первый элемент. остаток обьеденил в строку с сепаратором '-' (типо вернул как было)
      if(arr[i][0] == 'price'){
        this.price = arr[i].slice(1).join('-');
      }
      if(arr[i][0] == 'quantity'){
        this.quantity = arr[i].slice(1).join('-');
      }
      if(arr[i][0] == 'description'){
        this.description = arr[i].slice(1).join('-');
      }
    }
  }
}
let a = 'name-starts-fd&quantity-=5'
let b = 'name-contains-fd&price-=2&quantity->5&description-ends-abc'
console.log(new Product(a));
console.log(new Product(b));