function addUser () 
{
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "lets_chat_room.html";
}