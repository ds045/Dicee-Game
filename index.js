var randomNumberOne = Math.floor((Math.random() * 6))+1;
console.log(randomNumberOne);
if(randomNumberOne == 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if(randomNumberOne == 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} 