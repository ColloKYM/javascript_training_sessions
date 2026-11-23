const heading = document.getElementById("heading");
heading.textContent =  
    "Welcome to DOM Manipulation!"
/*heading.style.color = "blue"
heading.style.backgroundColor = "yellow"
heading.style.fontSize = "40px"
*/
const container = document.getElementById("container");
container.innerHTML = 
    "<h2> Hello Students!</h2> <p> Welcome to class.</p> "

heading.classList.add("highlight")