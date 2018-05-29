var config = {
    apiKey: "AIzaSyAToT_g5DSTX9cS96xiW7RVkbejO-25hds",
    authDomain: "community-5e724.firebaseapp.com",
    databaseURL: "https://community-5e724.firebaseio.com",
    projectId: "community-5e724",
    storageBucket: "",
    messagingSenderId: "937972840063"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

database.ref("/want-books").on("child_added",function(snap){
    var data = snap.val();
    var Email1 = snap.val().Email1;
    var BookTitle1 = snap.val().BookTitle1;
    var Author1 = snap.val().Author1;
    var Neighborhood1 = snap.val().Neighborhood1;
    var Comments1 = snap.val().Comments1;
    console.log(Author1)
    var myDiv = $("<div>")
    myDiv.text(Author1+" "+Email1+" "+BookTitle1+" "+Neighborhood1+" "+Comments1)
    $("#container").append(myDiv)

})

document.getElementById("BackCommunity").addEventListener("click", function(){
    console.log("this worked");
    location.href="community.html";
})
