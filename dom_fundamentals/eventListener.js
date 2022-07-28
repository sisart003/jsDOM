// Event Listeners

// element.addEventListener('click', function)
// const buttonTwo = document.querySelector('.btn-2')

// function alertBtn(){
//     alert('I also Love JavaScript ~ btn-2')
// }

// buttonTwo.addEventListener('click', alertBtn)

// Mouseover
// const newBackgroundColor = document.querySelector('.box-3')

// function changeBgColor(){
//     newBackgroundColor.style.backgroundColor = 'blue'
// }

// newBackgroundColor.addEventListener('mouseover', changeBgColor)

// Reveal Event
// const revealBtn = document.querySelector('.reveal-btn')
// const hiddenContent = document.querySelector('.hidden-content')

// function revealContent(){
//     if(hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn')
//     }else{
//         hiddenContent.classList.add('reveal-btn')
//     }
// }

// revealBtn.addEventListener('click', revealContent)

// Event Probagation
// window.addEventListener('click', function(){
//     console.log('Window')
// }, true)

// document.addEventListener('click', function() {
//     console.log('Document')
// }, true)

// document.querySelector('.div2').addEventListener('click', function(){
//     console.log('DIV 2')
// }, true)

// document.querySelector('.div1').addEventListener('click', function(){
//     console.log('DIV 1')
// }, true)

// document.querySelector('button').addEventListener('click', function(e){
//     console.log(e)
//     // console.log(e.target.innerText = "clicked!")
// }, true)

// Event Delegation
// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.

// document.querySelector('#sports').addEventListener('click', function(e){
//     console.log(e.target.getAttribute('id') + ' is clicked')

//     const target = e.target

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// const sports = document.querySelector('#sports')
// const newSport = document.createElement('li')

// newSport.innerText = 'Rugby'
// newSport.setAttribute('id', 'rugby')
// sports.appendChild(newSport)