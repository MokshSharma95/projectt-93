var firebaseConfig = {
      apiKey: "AIzaSyC4VLwplEwMA_7fmZ6aP8jUUNSyMFhUpaA",
      authDomain: "projnext-93.firebaseapp.com",
      projectId: "projnext-93",
      storageBucket: "projnext-93.appspot.com",
      messagingSenderId: "49788881554",
      appId: "1:49788881554:web:38d6e07628f2a0c603b44b",
      measurementId: "G-S9SK5KPBSD"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

     function addRoom(){
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
           });

           localStorage.setItem("room_name", room_name);

           window.location = "kwitter_page.html";
     }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

