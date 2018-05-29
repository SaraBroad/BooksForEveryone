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

database.ref("/give-books").on("child_added", function (snap) {
    var data = snap.val();
    var Email2 = snap.val().Email2;
    var BookTitle2 = snap.val().BookTitle2;
    var Author2 = snap.val().Author2;
    var Neighborhood2 = snap.val().Neighborhood2;
    var Comments2 = snap.val().Comments2;


    var tr = document.createElement('tr');
    var td1 = $('<td>');
    td1.addClass("column1")
    var td2 = $('<td>');
    td2.addClass("column2")
    var td3 = $('<td>');
    td3.addClass("column3")
    var td4 = $('<td>');
    td4.addClass("column4")
    var td5 = $('<td>');
    td5.addClass("column5")


    $(td1).append(Email2);
    $(td2).append(BookTitle2);
    $(td3).append(Author2);
    $(td4).append(Neighborhood2);
    $(td5).append(Comments2);
    $(tr).append(td1);
    $(tr).append(td2);
    $(tr).append(td3);
    $(tr).append(td4);
    $(tr).append(td5);


    $("#t-body").append(tr);

    // var myDiv = $("<div class='wantBookR'>")
    // myDiv.text(Author1+" "+Email1+" "+BookTitle1+" "+Neighborhood1+" "+Comments1)
    // $("#container").append(myDiv)

})

document.getElementById("BackCommunity").addEventListener("click", function () {
    console.log("this worked");
    location.href = "communityMollusk.html";
})