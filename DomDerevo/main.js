// let elems = document.body.children;
// for (let elem of elems){
//     console.log(elem)
// // }
// // console.log(document.body.firstElementChild.nextElementSibling)
// // console.log(document.body.lastElementChild.previousElementSibling)

// let elem2 = document.querySelector('.list')
// console.log(elem2.children)
// let item = document.querySelector('.item')
// console.log(document.body.firstChild.data)
// item.innerHTML = document.body.firstChild.data;


// document.querySelector('ul').insertAdjacentHTML('afterbegin')

//     <div class='alert'>
//         <strong>Hello</strong> I love Nurik
//     </div>


// let item = document.querySelector('ul'). cloneNode(true);
// console.log(item)
// document.querySelector('h1').after(item)



let users = [
    {id:1, name: 'Vasya', surname: 'Ivanov', grade: '5B'},
    {id:2, name: 'Ronaldo', surname: 'Ivanov', grade: '7A'},
    {id:3, name: 'Sasha', surname: 'Petrov', grade: '5B'},
    {id:4, name: 'Sogdiyar', surname: 'Pupkin', grade: 'childhouse'},
    {id:5, name: 'Ilya', surname: 'Hohryakov', grade: '1kurs'},
  ];
let win = [2, 4];
let elem = document.querySelector('.list')
for (let user of users){
    elem.insertAdjacentHTML('beforeend', 
    `
        <div class="card" id="${user.id}" onclick="game(${user.id})">
            <h4 class="name">${user.name}</h4>
            <p class="surname">${user.surname}</p>
            <p class="grade">${user.grade}</p>
            <p class="id">${user.id}</p>
        </div>
    `
)
function game(id){
    if (win.includes(id)) {
        alert('Win');
    }
    else{
        console.log(id)
        document.getElementById(id).hidden = true;  
    }   
}
}
