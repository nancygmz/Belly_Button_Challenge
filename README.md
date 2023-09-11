
# Belly Button Biodiversity Interactive Dashboard

## Introduction

This repository contains an interactive dashboard built to explore the Belly Button Biodiversity dataset. This dataset catalogs the diverse microbial species that colonize human navels, providing insights into the microbial communities found in the human body.

## Data Cleaning

In this assignment, the following steps were completed to prepare and visualize the data:

1. **Data Retrieval:** Utilized the D3 library to read in the `samples.json` dataset from the provided URL.

2. **Horizontal Bar Chart:** Created a horizontal bar chart with a dropdown menu to display the top 10 operational taxonomic units (OTUs) found in each individual. Key data points used:
   - Values for the bar chart: `sample_values`.
   - Labels for the bar chart: `otu_ids`.
   - Hover text for the chart: `otu_labels`.
![image](https://github.com/nancygmz/Belly_Button_Challenge/blob/main/readme%20pictures/Screenshot%202023-09-11%20194013.png)

3. **Bubble Chart:** Developed a bubble chart to display each sample, visualizing the distribution of OTUs. Key data points used:
   - X values: `otu_ids`.
   - Y values: `sample_values`.
   - Marker size: `sample_values`.
   - Marker colors: `otu_ids`.
   - Text values: `otu_labels`.
![image](https://github.com/nancygmz/Belly_Button_Challenge/blob/main/readme%20pictures/Screenshot%202023-09-11%20194048.png)

4. **Sample Metadata:** Displayed an individual's demographic information from the sample metadata JSON object, including all key-value pairs.
![image](https://github.com/nancygmz/Belly_Button_Challenge/blob/main/readme%20pictures/Screenshot%202023-09-11%20194100.png)

6. **Interactivity:** Ensured that all plots and displayed information are updated when a new sample is selected.
![image](https://github.com/nancygmz/Belly_Button_Challenge/blob/main/readme%20pictures/Screenshot%202023-09-11%20194419.png)

## Conclusion

This project demonstrates the use of D3 and interactive web visualization techniques to explore the fascinating world of belly button biodiversity. The interactive dashboard allows users to gain insights into microbial communities and their distribution in human navels. Enjoy exploring the data!
