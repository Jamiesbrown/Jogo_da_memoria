const memes = [
'<img src="./src/image/imagem4.png" width="100" height="80">',
    '<img src="./src/image/imagem4.png" width="100" height="80">',
    '<img src="./src/image/1.jpg" width="100" height="80">',
    '<img src="./src/image/1.jpg" width="100" height="80">',
    '<img src="./src/image/2.jpeg" width="100" height="80">',
    '<img src="./src/image/2.jpeg" width="100" height="80">',
    '<img src="./src/image/3.webp" width="100" height="80">',
    '<img src="./src/image/3.webp" width="100" height="80">',
    '<img src="./src/image/4.avif" width="100" height="80">',
    '<img src="./src/image/4.avif" width="100" height="80">',
    '<img src="./src/image/5.jpg" width="100" height="80">',
    '<img src="./src/image/5.jpg" width="100" height="80">',
    
];

console.log(document.body.innerHTML);
const livesElement = document.querySelector("#lives");
console.log(livesElement);


const state = {
    values: {
    lives: 10,
},
view: {
    lives: document.querySelector("#lives"),
}
}

function updateLives() {
    state.view.lives.textContent = `x${state.values.lives}`;
}


function endGame() {
    state.values.lives = 0;
    updateLives();

    setTimeout(() => {
        alert("Game Over!");
        location.reload();
    }, 500);  
    };



function countDown() {
    if (state.values.lives > 0) {
        state.values.lives--;
        updateLives();
    }
    if (state.values.lives === 0) {
        endGame();
    }
}

let openCards = [];

let shuffleMemes = memes.sort(()=>(Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < memes.length; i++)
{
    let box = document.createElement ("div");
    box.className = "item";
    box.innerHTML = shuffleMemes[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);

}

function handleClick()
{
    if(openCards.length <2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }


if(openCards.length == 2) {
    setTimeout(checkMatch, 500);
}

console.log(openCards);
}

function checkMatch(){
    if (openCards[0].innerHTML === openCards[1].innerHTML) 
        {
        openCards[0].classList.add ("boxMatch");
        openCards[1].classList.add ("boxMatch");
    } else {
        openCards[0].classList.remove ("boxOpen");
        openCards[1].classList.remove ("boxOpen");
        countDown();
    }
openCards = [];

if (document.querySelectorAll(".boxMatch").length === memes.length) {
    alert("Parabéns, você venceu !");
}
}

updateLives();