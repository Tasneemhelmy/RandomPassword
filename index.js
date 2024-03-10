let passPtn=document.getElementById('inppass');
let rangInput=document.getElementById('ranginp');
let sliderNumber=document.getElementById('slider-number');
let generatePass =document.getElementById('Genretepass');

console.log(generatePass);
rangInput.addEventListener("input",()=>{
sliderNumber.innerText=" "+rangInput.value;
let pass=""
passPtn.value=pass;
 });

 generatePass.onclick=function(){
    let pass="";
    let ranpass="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#-_($!&*=+-~/>?";
    let randomLenght=rangInput.value;
    for(let i=0;i<randomLenght;i++){
        let Index=Math.floor(Math.random()*ranpass.length);
        pass+=ranpass[Index];
    }
    passPtn.value=pass;
 }