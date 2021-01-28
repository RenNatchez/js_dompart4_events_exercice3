//--1--
let h1 = document.querySelector('h1')
h1.addEventListener('click', () => {
    h1.style.color = 'blue'
})

//--2--
let h3 = document.querySelector('h3')
h3.addEventListener('dblclick', () => {
    h3.classList.add('text-error')
})

//--3--
let p = document.querySelector('p')
p.addEventListener('click', () => {
    p.classList.toggle('text-style')
})

//--4--
let p1 = document.querySelectorAll('p')[1]
a = p1.children
console.log(a)
let tab = Array.from(a)
tab.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('bolder')
    })
});

//--5--
let p2 = document.querySelectorAll('p')[2]
a = p2.children
console.log(a)
let tab2 = Array.from(a)
tab2.forEach((element) => {
    element.addEventListener('click', () => {
        tab2.forEach(element => {
            element.classList.remove('bolder-red')
        });
        element.classList.add('bolder-red')
    })
});