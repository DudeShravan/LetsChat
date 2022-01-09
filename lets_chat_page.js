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

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name"); 
    room_name = localStorage.getItem("room_name");
    
    function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = ""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
