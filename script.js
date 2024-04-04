var form = document.getElementById("form");
var userName = document.getElementById("user");
var anumber = document.getElementById("anumber");
var pnumber = document.getElementById("pnumber");

form.addEventListener("submit",function(event){
    event.preventDefault();
    validateInputs();
});
function validateInputs(){
    const usernameVal = userName.value.trim();
    const anumberVal = anumber.value.trim();
    const pnumberVal = pnumber.value.trim();

    if(usernameVal===''){
        setError(userName);
    }
    else{
        removeError(userName);
    }
    if(anumberVal===''){
        setError(anumber);
    }
    else{
        removeError(anumber);
    }
    if(pnumberVal===''){
        setError(pnumber);
    }
    else if(pnumberVal.length > 10){
        setError(pnumber);
    }
    else{
        removeError(pnumber);
    }
}
function setError(element){
    const inputField = element.parentElement;
    inputField.classList.add('error');
} 
function removeError(element){
    const inputField = element.parentElement;
    inputField.classList.remove('error');
} 