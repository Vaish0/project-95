 //  Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAZWbxa2zn0vXiOS1RdNOYoEQCjKA4E5II",
    authDomain: "kwitter-app-328ad.firebaseapp.com",
    databaseURL: "https://kwitter-app-328ad-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-328ad",
    storageBucket: "kwitter-app-328ad.appspot.com",
    messagingSenderId: "989763349214",
    appId: "1:989763349214:web:b063577b7892d635b0b04f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;

        });
    });
}
getData();
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref('/').child(room_name).update({
        purpose: "adding_room_name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html"
}




function redirectToRoomName(name){
    console.log(name)
    localStorage.setItem("room_name" ,name);
    window.location="kwitter_page.html"
}
 