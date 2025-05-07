const startContainer = document.querySelector('.start');
const startCards = document.querySelectorAll('.start .card'); 
const startButton = document.querySelector('.start button'); 
const playground = document.querySelector('.playground');
const repeat = document.querySelector('.fa-repeat');
const title = document.querySelector('h1');


let grid = 0,
    level = 0,
    matched = 0,
    cardOne,
    cardTwo,
    IsPreventClick = true;


startCards.forEach(function(element) {
    element.addEventListener("click", function(e){
        startCards.forEach(function(el){
            el.classList.remove("active")
        })


        e.target.parentElement.classList.add("active"); 
        grid = e.target.parentElement.getAttribute("grid");
        level = e.target.parentElement.getAttribute("level");

        console.log(grid ,level)
        });
});

startButton.addEventListener("click", function() {
    startContainer.style.display = "none";
    playground.style.display = "grid";
    
    let cardSize, minHeight;

    if (level == 8) {
        cardSize = "100px"; 
        minHeight="100vh"
    } else if (level == 18) {
        cardSize = "80px"; 
        minHeight="70vh" 
    } else {
        cardSize = "60px";
        minHeight="50vh"  
    }
    document.documentElement.style.setProperty("--min-height", minHeight);
    playground.style.setProperty("--card-size", cardSize);
    playground.style.gridTemplateColumns = `repeat(${grid}, ${cardSize})`;
    playground.style.gridTemplateRows = `repeat(${grid}, ${cardSize})`;

    createCards();
});
    

var createCards= function(){
    var cardArray=[
        "spotify",
        "soundcloud",
        "pinterest",
        "playstation",
        "xbox",
        "apple",
        "github",
        "google",
        "android",
        "windows",
        "ubuntu",
        "whatsapp",
        "instagram",
        "facebook",
        "telegram",
        "x-twitter",
        "linkedin",
        "youtube",
        "discord",
        "tiktok",
        "stack-overflow",
        "paypal",
        "internet-explorer",
        "google-play",
        "cc-visa",
        "skype",
        "twitch",
        "yahoo",
        "threads",
        "js",
        "html5",
        "css3"
        ];
        shuffleArray(cardArray);
        shuffleCards([...cardArray.slice(0,level), ...cardArray.slice(0,level)]);  
}

const shuffleArray = function(array){
    for (let i = array.length -1; i > 0 ; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

const shuffleCards =function(cards) {
    playground.innerHTML = "";        
    for (let i = 0; i < cards.length; i++) {
        playground.innerHTML +=
        `<div class="card" onclick="flipCard(this)">
            <div class="front"><i class="fa-solid fa-question"></i></div>
            <div class="back"><i class="fa-brands fa-${cards[i]}"></i></div>
        </div>`;
    }
    repeat.style.display="block";
}

function flipCard(card){
    card.classList.add('flip')
}

repeat.addEventListener("click",function(){
    startContainer.style.display="grid";
    playground.style.display="none";
    repeat.style.display="none";
    matched = 0;
    cardOne="";
    cardTwo= "";
    IsPreventClick = true;


})

