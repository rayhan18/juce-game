const playerOne = document.getElementById('player1Score')
const playerTwo = document.getElementById('player2Score')
const inputNum = document.getElementById('inputNum')
const playerOneBtn= document.getElementById('player1Btn')
const playerTwoBtn= document.getElementById('player2Btn')
const reset= document.getElementById('reset')
const plOnePoint=document.getElementById('pl-point')
const pl2Point = document.getElementById('pl2-point')
const inputBtn=document.getElementById('inputBtn')
const p1result = document.getElementById('p1result')
const p2result = document.getElementById('p2result')

let playerOneScore =0
let playerTwoScore =0

const gameOver = false
let winner = 0


       inputNum.addEventListener('change',(e)=>{
       let inputValue_p1= e.target.value  
       playerOneBtn.addEventListener('click',()=>{
        playerOne.textContent = inputValue_p1
        plOnePoint.innerHTML=  inputValue_p1
   
    })
       })
     

        inputNum.addEventListener('change',(e)=>{
       let inputValue_p2= e.target.value  
       playerTwoBtn.addEventListener('click',()=>{
        playerTwo.textContent = inputValue_p2
        pl2Point.textContent = inputValue_p2
   
    })
   })


   inputBtn.addEventListener('click',()=>{
      let playerOnePoint= plOnePoint.innerText
      let playerTwoPoint= pl2Point.innerText
      if(playerOnePoint ===''){
         alert("please enter player one point")
         
      }else if(playerTwoPoint=== ''){
         alert("please enter player two point")
      }else{
         if(playerOnePoint > playerTwoPoint){
            let result  = playerOnePoint - playerTwoPoint
            p1result.innerText += result + '+' 
            let point =[5,10,15,20,]
           let totalarrp1= point.push(result)
           console.log(totalarrp1)

         }else if(playerOnePoint === playerTwoPoint){

         }
         
         else {
            let result = playerTwoPoint - playerOnePoint  
            p2result.innerText +=result + '+' 
            point.push(result)
         }
      }
   })

   