//var array = ["a", "b", "c", "d"];
//var arrTemp = array.slice(0,2);
//console.log(array.length);
//console.log(arrTemp);

/*
var arrHold =[];
for (var i=0; i < 2; i++)
{
  for (var j=0; j < 2; j++)
  {
    arrHold.push(array);
  }
}
console.log(arrHold);
*/

/*
function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

var newArray = Create2DArray(3);


var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
for (var i=0; i < 2; i++)
{
    newArray.push(fruits[i]);

}
console.log(newArray);
*/

var arr = [1,2,3,4,5,6,7,8,9];

var newArr = [];
while(arr.length) newArr.push(arr.splice(0,3));

console.log(newArr);
