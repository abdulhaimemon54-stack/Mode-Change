// 1. button ko pakro (#theme-btn)
// 2. button click par body se "dark" class toggle karo
// 3. button ka text badlo: dark ho to "Light Mode", warna "Dark Mode"

let btn = document.querySelector("#theme-btn")

btn.addEventListener("click", function(){

document.body.classList.contains("dark");
document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")){
    btn.innerText = "Light Mode"
}
else {
    btn.innerText = "Dark Mode"
}
})
