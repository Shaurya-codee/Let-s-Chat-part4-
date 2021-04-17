
//ADD YOUR FIREBASE LINKS HERE
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

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+ " !";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding Room Name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name- " +Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";   
         document.getElementById("output").innerHTML+=row;
      });
});

}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

