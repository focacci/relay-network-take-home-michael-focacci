# Requirements

- Git commit history is included in the project

Please take us along your development journey on this project to show your thought process via commits. Backtracking and fixing mistakes are all part of the development process and perfection is not a requirement.

- Implemented with a modern front end framework such as React, Angular, Vue, etc
- Includes a README with enough information to allow another developer to know how to use and contribute to the project
- Has associated tests (100% code coverage is not required)
<br></br>

## Step 1

Create a new git project: relay-network-take-home-\<your name>
 <br></br>
 
## Step 2

As this take home does not have any mock-ups, etc do not worry too much about the page aesthetic.
 
Create an index.html with a title of Philadelphia Qualified Voter Listing 2018
 
Add two sections to the page:
 
Section 1 includes the following summary:
 
- Top Segment of All Voters:
- Percentage of All Voters that are \<segment>:
 
Section 2 includes a table or table like structure with the following column headers:
- Ward
- Republican
- Democrat
- Other Party
- Male
- Female
- Unknown Sex
- Black
- Hispanic
- White
- Other Race
- Total
- %
<br></br>

## Step 3

Add functionality to fetch data from [this API](https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id) and add it as a row to the table.
 
The "Top Segment of All Voters" in section 1 should also be updated to show the largest segment of voters across all wards.
 
*Format:*

Top Segment of All Voters: \<segment name> - \<voter count> - <% of all voters to two decimal points>
 
*Example from fake data:*

Top Segment of All Voters: Other Party - 10243 - 21.34%
<br></br>

## Step 4
 
Add a drop down containing all of the available voter segments in the top summary section to tabulate the percentage of voters by that segment of all voters when selected.
 
When a value is selected from the drop down:

- Calculate the percentage of voters and update to display as Percentage of All Voters that are \<segment name> - \<voter count> - <% of all voters>
- For each Ward's row in the table, in the "%" column, show the percentage of that voter segment across that ward's total voters
 
**Example:**
 
1. Select the "female" voter segment from the drop down
2. The summary section will display: Percentage of All Voters that are Female - 1234 - 43.21%
3. Each row should now show the percentage of "female" voters for that ward in the "%" column to two decimal points.
<br></br>

## Step 5

Submit your solution as a zip or tar file [here](https://app.greenhouse.io/tests/c1b191fec342452c6e5ae0422b29ec50?utm_medium=email&utm_source=TakeHomeTest)