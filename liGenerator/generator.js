document.addEventListener("DOMContentLoaded", function(){
    const list = document.getElementById("list")
    const addLi = document.getElementById("addLi")
    let liCount = 1;
    
    addLi.addEventListener("click", function(){
        const newLi = document.createElement("li")
        newLi.textContent = "Item " + liCount;
        liCount++;
        list.appendChild(newLi)
    })
})