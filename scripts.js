const hi = document.getElementById("hello");

console.log("Hello");
console.log(hi);
console.log(hi.innerHTML);

hi.addEventListener("click", greeting);

function greeting(){
  hi.innerHTML = "Bye";
}
