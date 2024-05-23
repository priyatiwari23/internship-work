function addTask() {
    var inputValue = document.getElementById("taskInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        var textNode = document.createTextNode(inputValue);
        li.appendChild(textNode);
        
        // Create delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function() {
            li.remove();
        };
        
        li.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskInput").value = "";
        
        li.onclick = function() {
            this.classList.toggle("completed");
        };
    }
}
