// display on scroll down don't display on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
} 
console.log("Hello")
// slider opinion
let arr = [
    {opinion: "The author’s cocktails here should definitely try everything, you will not regret it, the bartenders know their stuff.", client: "ADAM ANDERSON"},
    {opinion: "Loved it! Solyanka awesome! The portions are large. Served quickly and politely. Nice interior, pleasant atmosphere.", client: "NICOLAS TRAVIS"},
    {opinion: "We went to dinner with mom today, I liked everything very much! Delicious food, pleasant atmosphere, friendly staff.", client: "NICOL FLORAND"},
    {opinion: "Thank you for a wonderful evening, elegant design, excellent service, cozy atmosphere and positive emotions!", client: "MOLLY MONT"},
    {opinion: "The owner is very cool. Very good food, the fries are from real potatoes, not the frozen ones. They cook american style and I just love it! Oh, and the prices...", client: "ANN"},
    {opinion: "Always delicious pizza and traditional dishes not to be forgotten, a clean quiet place with impeccable service", client: "Anna Cellini"},
    {opinion: "Good food, polite servers, clean bathrooms, you can sit outside during summer.", client: "Roxana Humeniuc"}
];
let clientOpinion = document.querySelector(".client-opinion");
let clientName = document.querySelector(".client-name");
let buttons = document.querySelectorAll(".client-btn");
let count = 0;
buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        if(btn.classList.contains("next-btn")){
            count++;
            if(count > arr.length - 1){
                count = 0
            }
            clientOpinion.textContent = arr[count].opinion;
            clientName.textContent = arr[count].client;
           
        }
    })
    btn.addEventListener("click", function(){
        if(btn.classList.contains("prev-btn")){
            count--;
            if(count < 0){
                count = arr.length - 1
            }
            clientOpinion.textContent = arr[count].opinion;
            clientName.textContent = arr[count].client;
           
        }
    })
})

// put another principal image
let images = document.querySelectorAll(".img");
let principalImage = document.querySelector(".bigger-image");
images.forEach(img => {
    img.addEventListener("click", function(e){
        let source = e.target.src;
        principalImage.src =  source;
    })
})