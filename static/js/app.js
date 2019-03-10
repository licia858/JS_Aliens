// from data.js
var tableData = data;
var submit = d3.select("#filter-btn");

//reference to the table body
var tbody = d3.select("tbody");

//console.log data from data.js
console.log(tableData);

//loop the data to console each element
tableData.forEach(function(ufoReport){
     //console.log(ufoReport);


     //append on tablerow (tr) for each object
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]){
        //console.log(key, value);
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

  var filteredData = tableData.filter(daterow => daterow.datetime === inputValue);

     console.log(filteredData);



  // Set the span tag in the h1 element to the text
  // that was entered in the form
  //d3.select("#ufo-table").text(filteredData);

  //tryingsomethin
  //$("tbody").remove();
  var empty = d3.select("tbody");
  
  empty.html(""); 

  var filterUFO = d3.select("tbody");

//loop the data to console each element
   filteredData.forEach(function(ufodate){
     //console.log(ufoReport);


     //append on tablerow (tr) for each object
    var row = filterUFO.append("tr");

    Object.entries(ufodate).forEach(function([key, value]){
        //console.log(key, value);
        //append a cell to the row for each value
        var cell = filterUFO.append("td");
        cell.text(value);
    });
});
});
