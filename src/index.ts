
function Sum(){
    return 5 + 6;
}

console.log(Sum());


const base_url:string = 'https://api.exchangerate.host/';

var input_amt = document.querySelector(".input-amt");
var btn_convert = document.querySelector(".btn-convert");
var from_currency = document.querySelector('.choice-from');
var to_currency = document.querySelector('.choice-from');
var final_val = document.querySelector('.final-value');
var final_amt = document.getElementById('final-amt');
var resultFrom: string;
var resultTo: string;
var input_amount: { value: any; };


from_currency?.addEventListener('change',(event:any)=>{
    resultFrom = `${event.target.value}`;
});

to_currency?.addEventListener('change',(event:any)=>{
    resultTo = `${event.target.value}`;
});

input_amt?.addEventListener('input',updateValue);



function updateValue(event:any){
    input_amount = event.target.value;
}

btn_convert?.addEventListener('click',fetchResult);


function fetchResult(){
    console.log(input_amount)
    console.log(resultTo)
    console.log(resultFrom)
    if(input_amount){
        var add_to_api_url:string = base_url+`convert?amount=${input_amount}&from=${resultFrom}&to=${resultTo}`;
        console.log(add_to_api_url);
    }else{

        console.log("amount is required");
    }
}

function displayResult(currency:any){
    final_val = currency.info.rate;
}

// console.log(CODES.CURRENCY_CODES[0]);


// function getResults(){
//     fetch(api_url)
//         .then(currency =>{
//             return currency.json();
//         }).then(display);
// }

// function display(currency:any){
//     console.log(currency)
// }
        

// getResults();





