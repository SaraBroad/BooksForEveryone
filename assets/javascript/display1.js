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

database.ref("/want-books").on("child_added", function (snap) {
    var data = snap.val();
    var Email1 = snap.val().Email1;
    var BookTitle1 = snap.val().BookTitle1;
    var Author1 = snap.val().Author1;
    var Neighborhood1 = snap.val().Neighborhood1;
    var Comments1 = snap.val().Comments1;


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


    $(td1).append(Email1);
    $(td2).append(BookTitle1);
    $(td3).append(Author1);
    $(td4).append(Neighborhood1);
    $(td5).append(Comments1);
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
