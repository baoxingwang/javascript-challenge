// from data.js
var tableData = data;



// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");


// // console.log the data from data.js
// console.log(tableData);

// // Step 1: Loop Through `tabledata` and log each  report object
// data.forEach(x => {
//     console.log(x);

//     // Step 2:  Use d3 to append one table row `tr` for each  report object
//     var row = tbody.append("tr");

//     // Step 3:  Use `Object.entries` to log each  report value
//     Object.entries(x).forEach(([key, value]) => {
//     console.log(key, value);

//     // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
//     var cell = row.append("td");

//     // Step 5: Use d3 to update each cell's text with
//     //  report values 
//     cell.text(value);
//     });
// });



// Select the button
var button = d3.select("#filter-btn");

button.on("click",function(){

    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

    // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
//   console.log(tableData);


    var filteredData = tableData.filter(x => x.datetime.toLowerCase() === inputValue.toLowerCase());

    console.log(filteredData);

    filteredData.forEach(x => {
        console.log(x);
    
        // Step 2:  Use d3 to append one table row `tr` for each  report object
        var row = tbody.append("tr");
    
        // Step 3:  Use `Object.entries` to log each  report value
        Object.entries(x).forEach(([key, value]) => {
        console.log(key, value);
    
        // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
        var cell = row.append("td");
    
        // Step 5: Use d3 to update each cell's text with
        //  report values 
        cell.text(value);
        });
    });
    


});