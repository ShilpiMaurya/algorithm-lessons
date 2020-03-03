//sorting
//JS Build-in Method

function numberCampare(num1, num2) {
    return num2 - num1;
  }
  
  function stringCampare(str1, str2) {
    return str1.length - str2.length;
  }
  
  const nums = [23, 21, 55, 67, 8, 24, 98, 100].sort(numberCampare);
  console.log(nums);
  
  const cities = [
    "Tokyo",
    "New Delhi",
    "San Francisco",
    "New York",
    "Benguluru",
    "Bankock"
  ].sort(stringCampare);
  console.log(cities);
  