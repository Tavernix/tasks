//1.1
let toLow = function(sTr) {
  str = sTr.toLowerCase();
  Str = str[0].toUpperCase() + str.slice(1);
  return Str //в названии переменных отличается регистр
}

//1.2
let toCombText = function(str){
  let strComb = '';
 for(let i = 0; i<str.length; i++){
  if (str[i] == ' ' && str[i+1] == ' '){ //это пробел перед пробелом
   strComb += ''; 
  }
  else if ((str[i+1] == '.' || str[i+1] == ',' || str[i+1] == ':' || str[i+1] == ';' || str[i+1] == '-') && str[i] == ' '){ //это пробел перед знаком
    strComb += '';
  }
  else if ((str[i] == '.' || str[i] == ',' || str[i] == ':' || str[i] == ';' || str[i] == '-') && str[i+1] != ' '){//это знак и потом нет пробела
    strComb += str[i] + ' ';
  }
  else{
    strComb += str[i];
  }
 }
 return strComb;
}

//1.3. 
let wordCount = function (str){
  let count = 0;
  let words = str.split(' ');//это массив
  for (let i in words) {
    if(words[i] != ''){
      count++;
    }
}
console.log(words)
return count;
}


//1.4
let repetitions = function(str){
   str = str.toLowerCase();//убрать регистр
   str = str.replace(/[^a-zа-яё\s]/gi, '');//убрать знаки
   let words = str.split(' ');//это массив слов
   let obj = {};
   for (let i = 0; i<words.length; i++){
    if(obj[words[i]]){
    obj[words[i]] += 1;
    } else {
    obj[words[i]] = 1;
    }
   }
   return obj
}


