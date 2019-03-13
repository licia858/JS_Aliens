// from data.js
var tableData = data;
var submit = d3.select("#filter-btn");
var submit2 = d3.select("new-data-btn");

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

  // Get the value property of the input element - grabs the data from the user
  var inputValue = inputElement.property("value");

  console.log(inputValue); //print the input value
  // find matching value from input tothe datetime
  var filteredData = tableData.filter(daterow => daterow.datetime === inputValue);

     console.log(filteredData); //print filteredData
    //tryingsomething remove cleared the headers too. didnt work
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


