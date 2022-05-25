
const arr = [];
let selectedItem;
   
function myFunction(){
    var a = document.getElementById('in').value;
    if (a) arr.push(a);

    var list = "<ul>";
    for(let i=0;i<arr.length;i++)
    {   
        list+=`<li id="${i}">${arr[i]}   <span  onclick="deleteTodo(${i})">X</span> <span onclick="edit(${i})">Edit</span></li>` ;
        
    }
    list+="</ul>";
    document.getElementById('p1').innerHTML= list;
    document.getElementById('in').value = "";
}

function deleteTodo(i) {    
    arr.splice(i, 1);
    myFunction()
}

function edit(i) {
    document.getElementById("pop").style.display = 'block';
    document.getElementById("popup-in").value = arr[i];
    selectedItem = i;
}

function pop_submit() {
    arr[selectedItem] = document.getElementById("popup-in").value;
    myFunction();
    document.getElementById("pop").style.display = 'none';

}

/* 
function myFunction(){
    document.getElementById('error').innerHTML="";
    let val = document.getElementById('in').value;
    if(val==""){
        document.getElementById('error').innerHTML="Please Enter Something";
    }else{
        let p1 = document.getElementById('p1');
        let li = document.createElement('li');
        li.textContent = val;
        let edit = document.createElement('button');
        edit.textContent = "EDIT";
        li.appendChild(edit);
        let rem = document.createElement('button');
        rem.textContent = "X";
        rem.className="remove";
        li.appendChild(rem);
        p1.appendChild(li);        
    }
    document.getElementById('in').value="";
}
let remx=document.querySelector('ul');
remx.addEventListener('click',function(e){
    let p1 = document.getElementById('p1');
    let li = e.target.parentnode;
    p1.removeChild(li);
}) */

/* let edit=document.querySelector('ul');
let popup = document.getElementsByClassName(popup);
edit.addEventListener('click',function edit(){
    popup.style.display=block;
} ) */

// function myFunction(){
//     document.getElementById('error').innerHTML="";
//     let val = document.getElementById('in').value;
//     if(val==""){
//         document.getElementById('error').innerHTML="Please Enter Something";
//     }else{
//         let p1 = document.getElementById('p1');
//         let li = document.createElement('li');
//         li.textContent = val;
//         p1.appendChild(li);
//         let edit =document.createElement('button');
//         edit.textContent = "EDIT";
//         li.appendChild(edit);
//         let rem = document.createElement('button');
//         rem.textContent = "X";
//         li.appendChild(rem);
//     }
//     document.getElementById('in').value="";

// }
// let remx=document.querySelector('ul');
// remx.addEventListener('click',function(e){
//     let p1 = document.getElementById('p1');
//     let li = e.target.parentNode;
//     p1.removeChild(li);
// })