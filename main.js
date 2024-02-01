// console.log(document.getElementsByTagName('h1'))
// console.log(document.getElementsByClassName('text'))
// console.log(document.getElementById('input'))
//
// console.log(document.querySelector('h1'))
// console.log(document.querySelectorAll('text'))
// console.log(document.querySelector('#input'))
// console.log(document.querySelectorAll('h1'))

// let h1=document.querySelector('h1')

// console.log(h1.innerHTML+="World")
// console.log(h1.innerText)


// const names=['bakyt','kengegyl','saltanat','rasul','kylych']
//
// let h1All=document.querySelectorAll('')
// h1All.forEach((el,idx)=>{
//     console.log(el.innerText+=names[idx])
// })

// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])
// console.log(names[4])
// console.log(names[5])

// let h1=document.querySelector('h1'),
// btn=document.querySelector('.btn')
//
// const names=['bakyt','kenjegyl','saltanat','rasul','kylych']
// btn.addEventListener('click',()=>{
// h1.innerHTML='Hello:'
//  h1.innerHTML+=names[Math.floor(Math.random()*names.length)]
// })
// console.log(names[Math.floor(Math.random()*names.length)])

// 2 yrok

// console.log(document.getElementsByTagName('h1'))
// console.log(document.getElementsByClassName('title'))
// console.log(document.getElementById("text"))

// console.log(document.querySelector('.block h1'))
// console.log(document.querySelector('.block .title'))
// console.log(document.querySelector('.block #input'))
// console.log(document.querySelectorAll('h1'))

// let block = document.querySelector('.block')
//
// block.addEventListener('click',()=>{
//     console.log("click")
//     // block.style.background='red'
// if (block.style.background==='') {
//     block.style.background = 'red'
// }else { block.style.background=''
// }
// })
//
// let block=document.querySelector('.block');
//
// block.addEventListener('mouseleave',()=>{
//         block.style.background=''
//
// })
// block.addEventListener("mouseover",()=>{
//     block.style.background='red'
// })


// let block=document.querySelectorAll('.block');
//
// block.forEach(el=> {
//     el.addEventListener('click',()=>{
// if (el.style.background==='') {
//     el.style.background='red'
// }else {
//     el.style.background=''
// }
//     })
//     })

// let block = document.querySelectorAll('.block')
//
// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'indigo',
//     'violet',
//     'pink',
//     'white',
//     'black'];
//
// let getColors=colors[Math.floor(Math.random() * colors.length)]
//
// block.forEach((el) => {
//     el.addEventListener('click', () => {
// el.style.background=colors[Math.floor(Math.random()*colors.length)]
//     })
// })

// // console.log(colors[2])
// console.log(colors[Math.floor(Math.random()*colors.length)])
// console.log(Math.floor(Math.random()*colors.length))
// console.log(Math.floor(Math.random()*10))

// let block=document.querySelectorAll('.block');
//
// block.forEach(el=> {
//     el.addEventListener('click',()=>{
// if (el.style.background==='') {
//     el.style.background='red'
// }else {
//     el.style.background=''
// }
//     })
//     })

let name=document.querySelector('.name'),
    input=document.querySelector('.input'),
    btn=document.querySelector('.btn')

// console.log(name.innerHTML)
// console.log(name.innerText)

btn.addEventListener("click",()=>{
name.innerText+= input.value
    input.value=''
})

