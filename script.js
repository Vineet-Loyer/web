const container =document.querySelector('.container')
const text=document.querySelector('#text')

const totalTime=7500
const breatheTime=(totalTime/5)*2
const holdTime=totalTime/5
breatheAnimation()
function breatheAnimation(){
  text.innerHTML='BREATH IN ! '
  container.className='container grow'
  
  setTimeout(()=> {
    text.innerText='HOLD'
    setTimeout(()=> {
      text.innerText='BREATHE OUT!'
      container.className='container shrink'
    },holdTime)
  },breatheTime)
  
}
setInterval(breatheAnimation,totalTime)
