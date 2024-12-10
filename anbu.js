
var arr1=[2,1,4,3];
var arr2=['a','b','c','d'];
var result = arr1.flatMap((arr1, index) => [arr1, arr2[index]]);
console.log(result);

var arr=[2,4,6,8];
console.log(arr.flatMap(x=>[[x/2]]));


var arr=['ANBU','AJITH','VIJAY','PRADHAP'];
var result=arr.fill("ALL",0,2);
console.log(arr);


var arr=Array.from("You are the hiring");
console.log("The Result is:" +arr);

var marks=[40,50,55,71,20];
function check (value){
  console.log(x>30);
}

var arr=['A','A++','Python'];
arr.forEach(function(fetch)
{
  console.log(fetch);
});


var arr=['anbu','Ajith','Apple'];
//var result=arr.join("-");
//console.log(result);

let itr=arr.keys();
console.log();