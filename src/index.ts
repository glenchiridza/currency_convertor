import { Language } from './public/language.js';
import {FetchService} from './services/fetch.service.js'

//language changer
const lang = new Language();
lang.changeLang();

//service to fetch exchange-rate from api
const fetchService = new FetchService();


//dom elements to output data to
var input_amt = document.querySelector(".input-amt");
var btn_convert = document.querySelector(".btn-convert");
var from_currency = document.querySelector('.choice-from');
var to_currency = document.querySelector('.choice-to');

var final_val = document.querySelector('.final-value');
var final_amt = document.getElementById('final-amt');

//shown when conversion is done
var final_input_amt:any = document.getElementById('final-input-amt');
var final_choice_from = document.getElementById('final-choice-from');
var final_choice_to = document.getElementById('final-choice-to');

var loaderImg = document.getElementById("loader");

//holder variables, 
//start currency codes, before change
var choiceFrom: string = "USD";
var choiceTo: string ="ZWL";

var input_amount:string


from_currency?.addEventListener('change',(event:any)=>{
    choiceFrom = `${event.target.value}`;
});

to_currency?.addEventListener('change',(event:any)=>{
    choiceTo = `${event.target.value}`;
});

input_amt?.addEventListener('input',updateValue);



function updateValue(event:any){
    input_amount = event.target.value;
}

//when button convert is clicked, search for result, this is the trigger to search
btn_convert?.addEventListener('click',convertNow);


function convertNow(){
//fectch from api

fetchService.fetchResult(input_amount!,choiceFrom,choiceTo,display);

}

//display the data to user
function display(currency:any){
    
    //final_val = currency.info.rate; ==> the dict fields are as per the api by openexchange

    
    //output user selection change
    final_input_amt.innerHTML = input_amount;
    final_choice_from!.textContent = choiceFrom;
    final_choice_to!.textContent = choiceTo;
    loaderImg!.style.visibility="hidden";

    //result from api
    //final_val!.textContent = currency.info.rate;
    final_val!.textContent = currency.result;
}
        
