const firebaseConfig = {
      apiKey: "AIzaSyAxVqx5HGm4k_uCFhzgGO6glXLG26He6yU",
      authDomain: "let-s-chat-part-4.firebaseapp.com",
      projectId: "let-s-chat-part-4",
      storageBucket: "let-s-chat-part-4.appspot.com",
      messagingSenderId: "378643942201",
      appId: "1:378643942201:web:0c604da6f72243d642b6e8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name,message:msg,like:0})
    document.getElementById("msg").value="";
}
