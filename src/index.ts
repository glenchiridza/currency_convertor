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

btn_convert?.addEventListener('click',values);


function values(){
    console.log(input_amount)
    console.log(resultTo)
    console.log(resultFrom)
    var add_to_api_url:string = base_url+`convert?amount=${input_amount}&from=${resultFrom}&to=${resultTo}`;
    console.log(add_to_api_url);
}




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





//currency codes array
["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD",
"BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLF","CLP","CNH","CNY","COP","CRC","CUC","CUP","CVE",
"CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD",
"GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD",
"JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD",
"MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO",
"NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR",
"SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STD","STN","SVC","SYP","SZL","THB","TJS",
"TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VES","VND","VUV","WST","XAF",
"XAG","XAU","XCD","XDR","XOF","XPD","XPF","XPT","YER","ZAR","ZMW","ZWL"]