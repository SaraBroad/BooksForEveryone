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

//write an event that listens to the submit button
// document.getElementById("submit1").addEventListener("click",function(event){
document.getElementById("submit1").addEventListener("click", function(event) {

    event.preventDefault(); //preventDefault prevents the page from restarting
//inside this event, we're going to grab the values from the form that the submit button was connected to
    var Email1 = document.getElementById("Email1").value;
    var BookTitle1 = document.getElementById("BookTitle1").value;
    var Author1 = document.getElementById("Author1").value;
    var Neighborhood1 = document.getElementById("Neighborhood1").value;
    var Comments1 = document.getElementById("Comments1").value;
    console.log(Email1);
    console.log(BookTitle1);
    console.log(Author1);
    console.log(Neighborhood1);
    console.log(Comments1);
    //take those values and push them to firebase database
    database.ref("/want-books").push({
        Email1: Email1,
        BookTitle1: BookTitle1,
        Author1: Author1,
        Neighborhood1: Neighborhood1,
        Comments1: Comments1
    })
})

document.getElementById("View1").addEventListener("click",function(event){
console.log("This works")
location.href="display1.html";
})






