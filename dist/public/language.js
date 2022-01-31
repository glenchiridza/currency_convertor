export class Language {
    constructor() {
        //DOM selectors
        this.label_amount = document.getElementById("label_amt");
        this.conversion_text = document.getElementById("conversion_text");
        this.button_text = document.getElementById("button_text");
        this.label_to = document.getElementById("label_to");
        this.label_from = document.getElementById("label_from");
        //bottom cards
        this.cardHeader = document.getElementById("ct");
        this.card1 = document.getElementById("c1");
        this.card2 = document.getElementById("c2");
        this.card3 = document.getElementById("c3");
        this.choice_lang = document.querySelector('.choice-lang');
    }
    //function to change language
    changeLang() {
        //listen for language changes
        this.choice_lang.addEventListener('change', (event) => {
            this.language = `${event.target.value}`;
            //if language changed
            if (this.language.toLowerCase() == "shona") {
                this.shonaText();
                console.log("tri kushona");
            }
            else {
                this.engishText();
                console.log("english man ");
            }
        });
    }
    //text in shona
    shonaText() {
        this.label_amount.textContent = "Imarii";
        this.label_from.textContent = "Kubva Ku";
        this.label_to.textContent = "Kuendesa Ku";
        this.conversion_text.textContent = "Mari irikuchinjwa ne";
        this.button_text.textContent = "Chinja";
        this.cardHeader.textContent = "Chinja nama Bhanka emuZimbabwe";
        this.card1.textContent = "Zvokurumidza";
        this.card2.textContent = "Hazvinetsi";
        this.card3.textContent = "Anovimbika nawo";
    }
    //text in english
    engishText() {
        window.location.reload();
    }
}
//# sourceMappingURL=language.js.map