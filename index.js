let button=document.querySelector("#addNoteButton");
let count=0
let data;


function a()
{
    count++;
    return count;
}

const addnote=(text="")=>
{


    const note=document.createElement('div');
    // note.classList.add('className')
    note.id='note';

    const html=`
    
    <div id="operation">
        <button id="edit"><i class="fas fa-edit"></i></button>
        <button ">${a()}</button>

        <button id="trash"><i class="far fa-trash-alt"></i></button>
    </div>


    <div class="main " >
    <textarea id="textbox"></textarea>
    </div>
    
 `
note.insertAdjacentHTML("afterbegin",html)  //agar hum isko console mei print krwa tay tu undefined at

console.log(note);  //yahan show hoga

document.body.appendChild(note);


const deleteButton=note.querySelector('#trash');
deleteButton.addEventListener('click',()=>{
    note.remove();
    autoSave();
    })


let disablebutton=note.querySelector('#edit');
let textBox=note.querySelector('#textbox');

if(text.length>0)
{textBox.value=text;}
else{}

disablebutton.addEventListener('click',()=>textBox.classList.toggle('test'));

textBox.addEventListener("mouseleave",()=>textBox.classList.add("test"));

textBox.addEventListener('change',autoSave);



}



function autoSave()
{
    let textBoxValue=document.querySelectorAll("textarea");
    data=[];
    textBoxValue.forEach((innerValue)=>{
        return data.push(innerValue.value);
    }
    )

    localStorage.setItem("data",JSON.stringify(data));
   
}


//get back data from local storage

let backupData=JSON.parse(localStorage.getItem("data"));

if(backupData){backupData.forEach((element)=>{
    addnote(element);
  

})};  

button.addEventListener('click',addnote);


