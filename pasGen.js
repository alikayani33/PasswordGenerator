const passBox = document.querySelector("#password");
const generate = document.querySelector("#pass")
const copy = document.querySelector("#copy")
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=-?><";
const allChars = upperCase+lowerCase+number+symbol;
function createPass(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random() *symbol.length)];
    while(password.length < length){
        password += allChars[Math.floor(Math.random() *allChars.length)];

    }
    passBox.value = password;


}

generate.addEventListener("click",createPass);
copy.addEventListener("click",function copyPass(){
    passBox.select();
    navigator.clipboard.writeText(passBox.value);
})

