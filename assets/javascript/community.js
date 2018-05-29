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
document.getElementById("submit1").addEventListener("click", function (event) {
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

document.getElementById("View1").addEventListener("click", function (event) {
    console.log("This works")
    location.href = "display1.html";
})

document.getElementById("submit2").addEventListener("click", function (event) {
    event.preventDefault(); //preventDefault prevents the page from restarting
    //inside this event, we're going to grab the values from the form that the submit button was connected to
    var Email2 = document.getElementById("Email2").value;
    var BookTitle2 = document.getElementById("BookTitle2").value;
    var Author2 = document.getElementById("Author2").value;
    var Neighborhood2 = document.getElementById("Neighborhood2").value;
    var Comments2 = document.getElementById("Comments2").value;
    console.log(Email2);
    console.log(BookTitle2);
    console.log(Author2);
    console.log(Neighborhood2);
    console.log(Comments2);
    //take those values and push them to firebase database
    database.ref("/give-books").push({
        Email2: Email2,
        BookTitle2: BookTitle2,
        Author2: Author2,
        Neighborhood2: Neighborhood2,
        Comments2: Comments2
    });
});
$("#view2").on("click", function (event) {
    console.log("This works");
    location.href = "display2.html";
});

document.getElementById("submit3").addEventListener("click", function (event) {
    event.preventDefault(); //preventDefault prevents the page from restarting
    //inside this event, we're going to grab the values from the form that the submit button was connected to
    var Email3 = document.getElementById("Email3").value;
    var BookTitle3 = document.getElementById("BookTitle3").value;
    var Author3 = document.getElementById("Author3").value;
    var Neighborhood3 = document.getElementById("Neighborhood3").value;
    var Comments3 = document.getElementById("Comments3").value;
    console.log(Email3);
    console.log(BookTitle3);
    console.log(Author3);
    console.log(Neighborhood3);
    console.log(Comments3);
    //take those values and push them to firebase database
    database.ref("/suggest-books").push({
        Email3: Email3,
        BookTitle3: BookTitle3,
        Author3: Author3,
        Neighborhood3: Neighborhood3,
        Comments3: Comments3
    });
});
document.getElementById("view3").addEventListener("click", function (event) {
    console.log("This works");
    location.href = "display3.html";
});