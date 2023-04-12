// Store a URL
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// Fetch the JSON data and console log it
d3.json(url).then(
  function(data) {
    console.log(data);
  });

// Create function that builds bar chart
function buildBarChart(sample){

     // Use the D3 library to get all the samples data
    d3.json(url).then((data) => {

        let sampleData = data.samples;

        // Filter the data 
        let filteredData = sampleData.filter(result => result.id == sample);

        // Get the first value of the data
        let resultData = filteredData[0];

        // Get the otu ids, lables, and sample values
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;

        
        // Slice top 10 to display in the chart 
        let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}` ).reverse();
        let xticks = sample_values.slice(0, 10).reverse();
        let textLabels = otu_labels.slice(0, 10).reverse();

        // Set up trace for bar chart 
        let trace1 = {
            y: yticks,
            x: xticks,
            text: textLabels,
            type: "bar",
            orientation: "h",
        };

        let barchart = [trace1]

        // Set a layout for the bar chart
        let layout = {
            title: "Top 10 Microbial Species"
        };

        // Plot the bar chart using Plotly
        Plotly.newPlot("bar", barchart, layout)
    });
};

// Create funtion that builds bubble chart
function buildBubbleChart(sample)
{
     // Use the D3 library to get all the data
     d3.json(url).then((data) => {

        let sampleData = data.samples;

        // Filter the data 
        let filteredData = sampleData.filter(result => result.id == sample);


        // Get the first value from the data
        let resultData = filteredData[0];

        // Get the otu ids, lables, and sample values
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;

        // Set up trace a bubble chart
        let trace2 = {
            y: sample_values,
            x: otu_ids,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };
        let bubbleData = [trace2];

        // Set up a layout for the Bubble Chart
        let layout = {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
        };

        // Plot the bar chart using Plotly
        Plotly.newPlot("bubble", bubbleData, layout)
    });
};

// Create a function that populates the demographics box
function buildDemographBox(sample)
{
    // Use the D3 library to get all the data
    d3.json(url).then((data) => {
        
        // Get all data
        let metaData = data.metadata;

        // Filter data 
        let filteredData = metaData.filter(result => result.id == sample);

        // Get the data on the first sample
        let resultData = filteredData[0];
        // Reset the metadata 
        d3.select("#sample-metadata").html("");

        // Update the demographics box with keys and values from the sample data
        Object.entries(resultData).forEach(([key, value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};

// Create a function that initializes the dashboard
function init(){

    // Create a variable for the dropdown menu using the html id
    let dropDown = d3.select("#selDataset");

    // Use the D3 library toget the sample names and populate the dropdown menu
    d3.json(url).then((data) => {

        let sampleNames = data.names;

        sampleNames.forEach((sample) => {
            dropDown.append("option")
                .text(sample)
                .property("value", sample);
        });

        let firstSample = sampleNames[0];
        

        // Call the function to build the demographics box
        buildDemographBox(firstSample);

        // Call the function to build the bar chart
        buildBarChart(firstSample);

        // Call the function to build the bubble chart
        buildBubbleChart(firstSample);
    });    
    };

  // Create a function that updates the dashboard when another sample is selected 
  function optionChanged(value){

    // Call the function to update demographics box
    buildDemographBox(value);
    // Call the function to update bar chart
    buildBarChart(value);
     // Call the function to update bubble chart
    buildBubbleChart(value);
   };
  
// Call the init function to start the dashboard
init();