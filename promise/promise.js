//link: https://www.w3schools.com/js/js_promise.asp
function myDisplayer(some) {

  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 2;
  let y = 3;
  let z = 5;

// The producing code (this may take some time)

let a = x+y;
let b = x+z;
let c = y+z;

/*  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
  */
  
  myResolve("I'm Sorry");
  
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);









console.log("ABC");
