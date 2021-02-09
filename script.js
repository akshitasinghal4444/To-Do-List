toggleToDoItemState=()=>{
    $("li").click(function(){
        $(this).toggleClass("completed");
    });
}

newToDoItem=(itemText,completed)=>{
    let toDoItem=document.createElement("li");
    let toDoText=document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if(completed){
        toDoItem.className="completed";
    }

    toDoList.appendChild(toDoItem);

    toDoItem.onclick=(toggleToDoItemState);
}

addToDoItem=()=>{
    let itemText=toDoEntryBox.value;
    newToDoItem(itemText,false);
}

clearCompletedToDoItems=()=>{
    let completedItems=toDoList.getElementsByClassName("completed");
    alert("Completed items successfully removed");
    while(completedItems.length>0){
        completedItems.item(0).remove();
    }
}

emptyList=()=>{
    let items=toDoList.children;
    while(items.length>0)
    items[0].remove();
    alert("Cleared the list");
}

saveList=()=>{
    var toDos=[];
    let i;
    for(i=0;i<toDoList.children.length;i++)
    {
        let toDoInfo={
            "task":toDoList.children.item(i).innerText,
            "completed":toDoList.children.item(i).className.includes('completed')
        };
        toDos.push(toDoInfo);
    }
    localStorage.setItem("toDos",JSON.stringify(toDos));
    
    alert("Successfully saved your list 🐣");
}

loadList=()=>{
    let toDos;
    if(localStorage.getItem("toDos")!=null)
    {
        toDos=JSON.parse(localStorage.getItem("toDos"));   
    }

    for(let i=0;i<toDos.length;i++)
    {
        console.log(toDos.length);
        newToDoItem(toDos[i].task,toDos[i].completed);
    }
    
}

changeThemeBlack=()=>{
    $(".container").addClass("dark-theme");
    $(".container").removeClass("light-theme");
    $("nav").addClass("dark-theme");
    $("nav").removeClass("light-theme");
}

changeThemeWhite=()=>{
    $(".container").addClass("light-theme");
    $(".container").removeClass("dark-theme");
    $("nav").addClass("light-theme");
    $("nav").removeClass("dark-theme");
}
loadList;

$(document).ready(function(){
    

    $("#dark-theme").click(changeThemeBlack);
    $("#light-theme").click(changeThemeWhite);

    let addButon=$(".add-button");
    let clearButton=$("#clear-button");
    let emptyButton=$("#empty-button");
    let saveButton=$("#save-button");
    let toDoEntryBox=$("#toDoEntryBox");
    let toDoList=$("#toDoList");
    
    addButon.click(addToDoItem);
    clearButton.click(clearCompletedToDoItems);
    emptyButton.click(emptyList);
    saveButton.click(saveList);
    
});
