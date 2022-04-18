function compute()
{
    console.log("In compute");
    let p = document.getElementById("principal").value;
    if(p === "") {
        alert("Enter the amount");
        return;
    }
    else if (p <= 0)
    {
        alert("Enter a positive number");
        return;

    }
    let rate = document.getElementById("rate").value;
    let numberOfyears = document.getElementById("years").value;
    let endYear = new Date().getFullYear()+parseInt(numberOfyears);

    let gain = (p*rate *numberOfyears)/100;

    let interest = principal * numberOfyears * rate /100;
    document.getElementById("amount_value").textContent = p;
    document.getElementById("interest_value").textContent = rate;
    document.getElementById("received_amount").textContent = gain;
    document.getElementById("year_value").textContent = endYear;
    document.getElementById("result_div").classList.remove("invisible");

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_value").innerText=rateval +"%";
}

function checkPrincipalInput(value) {
    if(value <= 0 || value === "" ) {
        alert("Enter a positive number");
    }
}