

function DiceRoll(){
    let input = document.getElementById("numberOfdices").value;
    input = Number(input);

    const div = document.getElementById("result");
    div.innerHTML="";
    //clears the previous roll
    
    for(let i=1 ; input >= i ; i++ ){
        let randNum =  Math.floor(Math.random()*(6-1+1)) + 1;
        console.log(randNum);

        const div = document.getElementById("result");
        switch(randNum){
            case 1:
                const img1 = document.createElement("img");
                img1.src ="dices/one.png";
                div.appendChild(img1);
                break;
            case 2:
                const img2 = document.createElement("img");
                img2.src ="dices/two.png";
                div.appendChild(img2);
                break;
            case 3:
                const img3 = document.createElement("img");
                img3.src ="dices/three.png";
                div.appendChild(img3);
                break;
            case 4:
                const img4 = document.createElement("img");
                img4.src ="dices/four.png";
                div.appendChild(img4);
                break;
            case 5:
                const img5 = document.createElement("img");
                img5.src ="dices/five.png";
                div.appendChild(img5);
                break;
            case 6:
                const img6 = document.createElement("img");
                img6.src ="dices/six.png";
                div.appendChild(img6);
                break;
        }
    }

}
