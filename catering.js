/*let today = new Date();
let newHour = today.getHours();
let greeting;
if (newHour > 18) { greeting = "GOOD EVENING"; } else if (newHour > 12) { greeting = "GOOD AFTERNOON"; } else if (newHour > 0) { greeting = "GOOD MORNING"; }
let name = prompt("what is your name?");
let result = "chef" + " " + name;
document.write("<h1>" + greeting + " " + result + "</h1>");
let nav = document.querySelectorAll('.nav-2');
nav.forEach(para => {
    console.log(para);

})*/
//const para = document.querySelector("#nav");//
//para.innerHTML += " " + " is  awesome";//

const content = document.querySelector("#feel");
content.innerHTML = "<h5> my name is emeka</h5>";
content.style.color = "gold";
content.style.fontSize = "100px";
let image = document.querySelector("img")
image.classList.add()

//
/*
function passWord() {
    let pass, votable
    pass = document.querySelector("#word") {
        if (pass < 12) {
            votable = "password is ok"
        }
        document.querySelector("#demo").innertext = votable;
    }

}*/


function passWord() {
    var pass, voteable;
    pass = (document.getElementById("word").value);
    if (pass.length < 4) {
        voteable = "passWord is not strong"
    } else if (pass.includes('@' && '!') && pass.length > 5) {
        voteable = "passWord is mighty strong"

    } else if (pass.length >= 15) {
        voteable = "password is too much"
    }
    document.getElementById("demo").innerHTML = voteable;
}
let botton = document.querySelector("#button").addEventListener("dblclick", myfashion);

function myfashion() {
    let fashion = document.querySelector(".fashion");
    fashion.classList.toggle("fashion-2");

}
/*let move = document.querySelector("demo").addEventListener("mousemove", massEvent);

function massEvent(e) {
  
    console.log(e.type);
}*/
let text = document.querySelector('input[type="text"]').addEventListener("keydown", firstName);

function firstName(e) {
    document.querySelector(".para").innerText = "<h1>" + e.target.value + "</h1>";

    console.log(e.target.value);
}
const logIn = document.querySelector('input[type="password"]').addEventListener("blur", book)

function book(e) {
    document.querySelector(".passWord").innerHTML = "<h3>" + e.target.value + "</h3>";
    console.log(e.target.value);

    document.body.style.backgroundColor = "rbg(" + e.offsetX + "," + e.offsetY + ",50)";
}
let form = document.querySelector("#form");
let ul = document.querySelector(".orderedList");
let term = document.querySelector(".list");
let filter = document.querySelector("#filter");
form.addEventListener("submit", mySub);
ul.addEventListener("click", myUl)
filter.addEventListener("keyup", filterItem)

function mySub(e) {
    e.preventDefault();
    let item = document.querySelector('#text').value;
    let li = document.createElement("li")
    li.className = "list";
    li.style.fontSize = "20px";
    li.style.fontWeight = "bolder";
    let delbnt = document.createElement("button");
    delbnt.appendChild(document.createTextNode("x"))
    delbnt.className = "btn";

    li.appendChild(document.createTextNode(item));
    li.appendChild(delbnt);
    ul.appendChild(li);
    console.log(ul);
}

function myUl(e) {
    if (e.target.classList.contains("btn")) {
        confirm("are you sure");
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
}

function filterItem(e) {
    let text = e.target.value.toLowerCase();
    console.log(text);
    let items = ul.querySelectorAll(".list");
    const divsArr = Array.prototype.slice.call(items).forEac.function(myTerms); {
        let newName = myTerms.firstChild.content();
        console.log(newName);
    }

    console.log(divsArr);
}
let myObject = { first: "Emeka", last: "Emeka", middle: "Emeka", }

console.log(myObject.first);
console.log(myObject.last);
console.log(myObject.middle.length);
let myData = ` [{
        "name": "Okolo",
        "class": " ss1 ",
        "age": "16"
    },
    {
        "name": "Okolo",
        "class": " ss1 ",
        "age": "16"

    }
]`
console.log(JSON.parse(myData));