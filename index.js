//reference to the table body
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");


//loop the data to console each element
data.forEach(function(ufoReport){
    console.log(ufoReport);


     //append on tablerow (tr) for each object
    var row = tbody.append("tr");

    Object.defineProperties(ufoReport).forEach(function([key, value]){
        console.log(key, value);
        //append a cell to the row for each value
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Select the submit button
submit.on("click", function() {
    console.log("taco");

  // Prevent the page from refreshing
    
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  //grabs the data from the user
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(daterow => daterow.datetime === inputValue);

  console.log(filteredData);



  // Set the span tag in the h1 element to the text
  // that was entered in the form
  //d3.select("h1>span").text(inputValue);
});




