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

    // Select the input element and get the raw HTML node for city form
    var cityInputElement = d3.select("#city");

    // Select the input element and get the raw HTML node for state form
    var stateInputElement = d3.select("#state");

    // Select the input element and get the raw HTML node for country form
    var countryInputElement = d3.select("#country");
    
    // Select the input element and get the raw HTML node for shape form
    var shapeInputElement = d3.select("#shape");

    // Get the value property of the input element of datetime filer
    var datetimeInput = dateTimeInputElement.property("value");

    // Get the value property of the input element of city filer
    var cityInput = cityInputElement.property("value").toLowerCase();

    // Get the value property of the input element of state filer
    var stateInput = stateInputElement.property("value").toLowerCase();

    // Get the value property of the input element of country filer
    var countryInput = countryInputElement.property("value").toLowerCase();

    // Get the value property of the input element of shape filer
    var shapeInput = shapeInputElement.property("value").toLowerCase();    
    
    // Initialize
    filterTableData = tableData;

    // filter data
    if (datetimeInput){
        filterTableData = filterTableData.filter(aDataRow => aDataRow.datetime === datetimeInput);
    }
    if (cityInput){
        filterTableData = filterTableData.filter(aDataRow => aDataRow.city === cityInput);
    }
    if (stateInput){
        filterTableData = filterTableData.filter(aDataRow => aDataRow.state === stateInput);
    }
    if (countryInput){
        ffilterTableData = filterTableData.filter(aDataRow => aDataRow.country === countryInput);
    }
    if (shapeInput){
        filterTableData = filterTableData.filter(aDataRow => aDataRow.shape === shapeInput);
    }

    // clear table body
    d3.selectAll("tbody tr").remove();

    var filterDataBody = d3.select("tbody");

    // display new table
    appendTableData(filterTableData,filterDataBody);

  };
