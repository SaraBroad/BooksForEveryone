var lccnResults = [];

  var lccnChildren = ['2005002160', '90040410', '98022578', '93016788', '2006001947', '2006009487', '2014019913', '2005013501', '2011002879', '2016952958', '2017006468', '90021459', '00039103', '2013049031', '2014005767', '2013033662', '97062397'];
  var YA = ['2014021346', '2016950333', '2010277664', '2016058582', '2015026310', '2017297201', '2013013810', '2017019240', '2005005540', '2016003280', '2009009293', '2017000922', '2011378944', '2011036317', '2017943585', '2017021616', '2017945039']
  function fetchWithLCCN(lccnList, bookDiv) {


  for (var i = 0; i < lccnList.length; i++) {
    //   var queryURL = "https://www.googleapis.com/books/v1/volumes?q=lccn:" + lccnList[i] + "&key=AIzaSyBEd3FJa5kNMhvL2CUQrltQmvo1aKUWlcA";
      $.ajax({
          url: queryURL,
          method: "GET"
      }).then(function (response) {
          if (response.totalItems > 0) {
              var book = response.items[0];
              console.log(book);
              var div = $('<div>');
              div.append(book.volumeInfo.title); 
              var author = $("<div>")
              author.text(book.volumeInfo.authors);
              div.append(author);
              var image = $("<img>");
              image.attr("src", book.volumeInfo.imageLinks.thumbnail);
              div.append(image);
              $(bookDiv).append(div);
          }         

      });
  }
  }
  fetchWithLCCN(lccnChildren, "#book-box");
  fetchWithLCCN(YA, "#youngadult-books");