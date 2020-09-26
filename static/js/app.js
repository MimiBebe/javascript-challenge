// from data.js
var tableData = data;
var tableBody = d3.select("tbody");

function appendTableData(dataset,datasetBody){
    dataset.forEach((ufoData) => {
        var row = datasetBody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

// append table data
appendTableData(tableData,tableBody);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-control");

// Create event handlers 
button.on("click", runFilter);
form.on("submit",runFilter);


// Complete the event handler function for the form
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    
    // Select the input element and get the raw HTML node for datetime form
    var dateTimeInputElement = d3.select("#datetime");

    // Get the value property of the input element od datetime filer
    var datetimeInput = dateTimeInputElement.property("value");

    // filter data
    var filteredDatetimeData = tableData.filter(aDataRow => aDataRow.datetime === datetimeInput);

    console.log(filteredDatetimeData );

    // clear table body
    // d3.select("tbody") = "" ;
    d3.selectAll("tbody tr").remove();
    //d3.select("#ufo-table tbody > tr").empty();

    var filterDataBody = d3.select("tbody");

    // display table
    appendTableData(filteredDatetimeData,filterDataBody);

  };
