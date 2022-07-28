// Variables
let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
    {
        quote: "Happy Birthday Kagawad Chris Morales ng Sta. Ana",
        person: "Cesar Montano"
    },{
        quote: "Lebron James na offend sa sinabi ni Jhong Hilario",
        person: "Lebron James"
    },
    {
        quote: "Tarantado talaga yang Bf mo ehh no, kung ako nalang kase",
        person: "Boy Best Friend"
    },
    {
        quote: "Minor Computer Problem *restart",
        person: "IT guy"
    },
    {
        quote: "Mandatory ROTC",
        person: "VP Du30"
    },
    {
        quote: "Libreng sakay is...uh What we will have... Uhh what what we have done is...",
        person: "PBBM"
    }
]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
    
})