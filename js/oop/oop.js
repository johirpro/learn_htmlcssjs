<script>
//Object literal [this option is most faster, readable and simple]
const test = {q:"John", x: function() {return "abc";}}; 
console.log(test.x);

//Object literal empty
const test = {};
test.q:"John"; 
test.x: function() {return "abc"}; 
console.log(test.x);

//using keyword NEW
const test = new Object();
test.q:"John"; 
test.x: function() {return "abc"}; 
console.log(test.x);

//Define an object constructor, and then create objects of the constructed type.
//Create an object using Object.create().
</script>
