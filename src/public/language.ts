export class Language {

    //DOM selectors
    label_amount = document.getElementById("label_amt");
    conversion_text = document.getElementById("conversion_text");
    
    button_text = document.getElementById("button_text");
    label_to = document.getElementById("label_to");
    label_from = document.getElementById("label_from");

    
    //bottom cards
    cardHeader = document.getElementById("ct");

    card1 = document.getElementById("c1");
    
    card2 = document.getElementById("c2");
    
    card3 = document.getElementById("c3");

    //variables to hold the new language
    choice_lang:any;
    language!: string;
    
    constructor(){
        this.choice_lang = document.querySelector('.choice-lang');
    }
  
    //function to change language
    changeLang(){
        //listen for language changes
            this.choice_lang.addEventListener('change',(event:any)=>{
                this.language = `${event.target.value}`;

                //if language changed
            if(this.language.toLowerCase() == "shona"){
                this.shonaText();
                console.log("tri kushona");
            }else{
                this.engishText()
                console.log("english man ");
            }

        })
    }

    //text in shona
    
shonaText(){
    this.label_amount!.textContent = "Imarii";
    this.label_from!.textContent = "Kubva Ku";
    this.label_to!.textContent ="Kuendesa Ku";
    this.conversion_text!.textContent ="Mari irikuchinjwa ne";
    this.button_text!.textContent = "Chinja";

    this.cardHeader!.textContent ="Chinja nama Bhanka emuZimbabwe";
    this.card1!.textContent ="Zvokurumidza";
    this.card2!.textContent ="Hazvinetsi";
    this.card3!.textContent ="Anovimbika nawo";
}
//text in english

 engishText(){

    window.location.reload();

}

}
