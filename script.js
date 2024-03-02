const button = document.getElementById('btn');
const UnorderedList = document.getElementById('ul')
const input = document.getElementById('input');

button.addEventListener('click',function(){
    if(input.value===''){
        alert('write something');
    }
    else{
        let listElement = document.createElement('li');
        listElement.innerHTML=input.value;
        UnorderedList.appendChild(listElement);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        listElement.appendChild(span);
    }
    input.value="";
    saveData();

});
UnorderedList.addEventListener('click',function(event){
    // console.log(event);
    if(event.target.tagName ==='LI'){
        if(event.target.className==""){
            event.target.className = "checked";
        }
        else{
            event.target.className = "";
        }
        saveData();
    }
    else if(event.target.tagName === 'SPAN')
    {
        event.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",UnorderedList.innerHTML);
}

function showTask(){
    UnorderedList.innerHTML = localStorage.getItem("data");
}
showTask();
