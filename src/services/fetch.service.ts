
//service to fetch data from api
export class FetchService {
//base url

readonly base_url:string = 'https://api.exchangerate.host/';

constructor(){}

//function to fetch result from api
fetchResult(input_amount:any,choiceFrom:string,choiceTo:string,display:any){

    if(input_amount){
        //show loader gif
        loaderImg!.style.visibility="visible";

        //concatenate the base url and the input data by user
        var add_to_api_url:string = this.base_url+`convert?amount=${input_amount}&from=${choiceFrom}&to=${choiceTo}`;
        console.log(add_to_api_url);
        //all function to to the actual fetch of result
        this.getResults(add_to_api_url,display)

    }else{

        console.log("amount required");
        // lang.conversion_text!.textContent = "Amount is Required";
        // lang.conversion_text!.style.color="red;";

        return "amount required";

    }
}


//now fetch the result from query url
getResults(query_url:string,display:any){
     fetch(query_url)
        .then(currency =>{
            return currency.json();
        },
        (error:any)=>{
            final_amt!.innerHTML =`<p>failure, please check 
        your connection and try again</p>`}
        
        ).then(display);
}

}


var final_amt = document.getElementById('final-amt');

var loaderImg = document.getElementById("loader");
