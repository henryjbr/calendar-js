let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


let date = new Date()
let dayn = date.getDay()
let day = date.getDate()
let month = months[date.getMonth()]
let year = date.getFullYear()
let active = document.querySelector(".week li:nth-child("+dayn+")")
let h1 = document.createElement('h1')

h1.innerHTML = day
active.classList.add('actual')
active.appendChild(h1)

let h5 = document.createElement('h5')
h5.innerHTML = month
active.appendChild(h5)


let h3 = document.createElement('h3')
h3.innerHTML = year
active.appendChild(h3)