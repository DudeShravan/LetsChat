const firebaseConfig = {
      apiKey: "AIzaSyBQXxblb6Gqgq1Etpoh_Y6C9xZtWqVYWoo",
      authDomain: "letschat-9071.firebaseapp.com",
      databaseURL: "https://letschat-9071-default-rtdb.firebaseio.com",
      projectId: "letschat-9071",
      storageBucket: "letschat-9071.appspot.com",
      messagingSenderId: "327076656980",
      appId: "1:327076656980:web:01769637c8cf531b317ac1"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "tweeting_bird_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "tweeting_bird_page.html";
}

function logout() 
{ 
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name"); 
      window.location = "index.html"; 
}
