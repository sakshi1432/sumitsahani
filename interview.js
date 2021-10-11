const data = [];
// var seconds = 00;
// var tens = 00;
// let tens = document.getElementById('tens');

// const ten = () => {
//     ten++;
//     setInterval(() =>{

//     })
// }

// const delet = () => {
//     document.getElementById("inpu").value = "";

// }
// const add = () =>{
//     let inp = document.getElementById("inpu").value;
//      data.push(inp);
//     console.log(data);

//     //creating li
//      data.map((elem)=>{
//         let display = document.getElementById("display");
//          let list = document.getElementById("list");
//          let todo = document.getElementById("todo");
//         let li = document.createElement('li');//li
//         li.innerText = elem;

//         list.append(li);
//         display.append(list);
//         console.log(elem)

//     })

// }

// const adds = (val) =>{
//     console.log(val);
//     let select = document.getElementById("nemo");

//     if(val === "volvo")
//     {
//         console.log("hii");
//         let option = document.createElement("option");
//         option.value = "PINK";
//         option.innerText = "PINK"
//         select.append(option);
//     }

//     if(val === "oggy")
//     {
//         console.log("hii");
//         let option = document.createElement("option");
//         option.innerText = "GOLDEN"
//         select.append(option);
//     }
// }

// //stop
// $("#firts").click(function(){
//     event.preventDefault();
//     alert("EVENT PREVENTED,")
// })

// let multiple = function(){
//     let a = 10;
//     return function(){
//             console.log(a);
//             let b = 20;
//     }
// }

// let m = multiple();
// m();

// let data = new Promise((reject,resolve) =>{
//     setTimeout(() =>{
//         resolve("hii")
//     },3000) //then resolving th promise value
// }).then((item) =>{
//     console.log('item')
// }).catch((err) =>{
//     console.log('err')
// })

let a = document.getElementById("eo");

function ru() {
  a.style.backgroundColor = "red";
}

function ek() {
  let b = document.getElementById("my").setAttribute("data-list-type", "nono");
}

function g() {
  document
    .getElementById("sa")
    .setAttribute(
      "src",
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg"
    );
}

function fun1() {
  let f = document.getElementById("sr").value;
  let d = document.getElementById("sak");
  let li = document.createElement("li");
  let but = document.createElement("button");
  li.innerHTML = f;
  but.innerText = "delete";
  li.append(but);
  d.append(li);
}

// let api = "https://jsonplaceholder.typicode.com/todos";
// fetch(api)
//     .then(response => response.json())
//     .then(data =>{
//         let table = document.getElementById("table");
//         let tbody = document.getElementById("tbody");
//         data.map((element) => {
//             let tr = document.createElement("tr");
//             let td1 = document.createElement("td1");
//             let td2 = document.createElement("td2");
//             let td3 = document.createElement("td3");
//             let td4 = document.createElement("td4");

//             td1.innerText = element.userId;
//             td2.innerText = element.id;
//             td3.innerText = element.title;
//             td4.innerText = element.completed;

//             tr.append(td1,td2,td3,td4);
//             tbody.append(tr);
//             table.append(tbody);
//             console.log(element);
//         })
//     })

let te = 00;

let sec = document.getElementById("sec");
let start = document.getElementById("start");

function st() {
  let se = 00;
  se++;

  sec.innerText = se;
}

//  start.addEventListener("click",st());

//  function ot(){
//         alert("div1")
//  }

//  function oj(event){
//      alert("div2");
//      event.stopPropagation();
//  }

//call back

// const add = () =>{
//     let inp = document.getElementById("st").value;
//     console.log(inp)
//     let ol = document.getElementById("w");
//     let li = document.createElement("li");
//     let but =document.createElement("button");
//     li.innerText = inp;
//     but.innerText="delete";
//     li.append(but);
//     ol.append(li)

//     but.onclick = function(){
//         remove();
//     }
// }

// function remove(){

// }

// let tasks = [];

// function addTask() {
//     let task = document.getElementById('task').value;
//     if (task != "") {
//         tasks.push(task);

//         let main = document.getElementById('output-box');

//         let ul = document.getElementById('ul');

//         let li = document.createElement('li');
//         let p = document.createElement('p');
//         p.className = "mylist"
//         p.innerText = task;

//         let trash = document.createElement('button');
//         trash.className = "btn btn-danger btn-sm mytrash"
//         trash.innerText = "Delete";

//         trash.onclick = function () {
//             removeItem();
//         }

//         let edit = document.createElement('button');
//         edit.className = 'btn btn-info btn-sm editTodo mx-2';
//         edit.innerText = "Edit";

//         edit.onclick = function () {
//             editItem();
//         }

//         li.append(p, edit, trash);

//         ul.append(li);
//         main.append(ul);
//         console.log(tasks)
//     } else {
//         swal({
//             title: "Bad Job",
//             text: "Please enter the task",
//             icon: "warning",
//             button: "Ok!",
//         });
//     }

// }

// function removeItem() {
//     let trash = document.getElementsByClassName('mytrash');
//     for (let i = 0; i < trash.length; i++) {
//         trash[i].onclick = function () {
//             this.parentNode.remove();
//         }
//     }
// }

// function editItem() {
//     let edit = document.getElementsByClassName('editTodo');
//     for (let i = 0; i < edit.length; i++) {
//         edit[i].onclick = function () {
//             let updated = prompt();
//             document.getElementsByClassName('mylist')[i].innerHTML = updated;
//         }
//     }
// }

const item = [];

function add() {
  let userin = document.getElementById("user").value;
  item.push(userin);
  console.log(item);
  let main = document.getElementById("view");
  let ul = document.getElementById("ul");
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.className = "mylist";
  p.innerText = userin;
  let trash = document.createElement("button");
  trash.className = "btn btn-danger btn-sm mytrash";
  trash.innerText = "Delete";
  let edit = document.createElement("button");
  edit.className = "btn btn-info btn-sm editTodo mx-2";
  edit.innerHTML = "EDIT";

  edit.onclick = function () {
    editItem();
  };

  trash.onclick = function () {
    removeItem();
  };

  li.append(p, edit, trash);
  ul.append(li);
  main.append(ul);
}

function removeItem() {
  let trash = document.getElementsByClassName("mytrash");
  for (let i = 0; i < trash.length; i++) {
    trash[i].onclick = function () {
      this.parentNode.remove();
    };
  }
}

function editItem() {
  let ed = document.getElementsByClassName("editTodo");

  for (let i = 0; i < ed.length; i++) {
    ed[i].onclick = function () {
      let updated = prompt();
      document.getElementsByClassName("mylist")[i].innerHTML = updated;
    };
  }
}

function addItem() {
  let itone = document.getElementById("ite").value;
  let ittwo = document.getElementById("pi").value;
  let tb = document.getElementById("tb");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.className = "o";
  let td2 = document.createElement("td");

  td2.className = "p";

  td1.innerText = itone;
  let x = parseInt(ittwo);
  td2.innerText = x;

  tr.append(td1, td2);

  tb.append(tr);
}

const check = () => {
  let d = document.getElementsByClassName("p");
  let f = document.getElementById("pi").value;
  let x = parseInt(f);
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += parseInt(d[i].innerHTML);
  }
  let gh = document.getElementById("gh");
  gh.innerHTML = sum;
};

const checkAp = () => {
  document.getElementById("mt").style.display = "none";

  let sef = document.getElementById("sef").value;
  let k = document.getElementById("k");
  let m = document.getElementById("m");
  let u = document.getElementById("u");

  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((res) => {
      const n = res.filter((elem) => {
        if (elem.title === sef) {
          return elem;
        }
      });
      console.log(n);
      n.map((er) => {
        k.innerHTML = er.id;
        m.innerHTML = er.title;
        u.innerHTML = er.url;
      });
    });
};

const checkCookies = () => {
  let ok = document.getElementById("ok");
    

  if (ok.click()) {
    checkAp();
 
  } else {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((json) => {
        let mt = document.getElementById("mt");
        let sm = document.getElementById("sm");

        json.map((elem) => {
          let tr = document.createElement("tr");
          let td6 = document.createElement("td");
          let td7 = document.createElement("td");
          let td8 = document.createElement("td");

          td6.innerHTML = elem.id;
          td7.innerHTML = elem.title;
          td8.innerHTML = elem.url;

          tr.append(td6, td7, td8);
          sm.append(tr);
          mt.append(sm);
        });
      });
    }
};

const submit = () =>{
        let bookn = document.getElementById("bookn").value;
        let bookp = document.getElementById("bookp").value;
        let bookau = document.getElementById("bookau").value;
        
        
        let li1 = document.createElement("li");
       let li2 = document.createElement("li");     
        let li3 = document.createElement("li");
        let p1 = document.createElement("p");
        let l = document.getElementById("l");
        let fload = document.getElementById("fload");
        p1.className = "mylist";
        p1.innerHTML = bookn;
        let p2 = document.createElement("p");
        p2.className = "mylist";
        p2.innerHTML = bookp;
        let p3 = document.createElement("p");
        p3.className = "mylist";
        p3.innerHTML = bookau;

        li1.append(p1);
        li2.append(p2);
        li3.append(p3);

        l.append(li1,li2,li3);
        fload.append(l);
        
}