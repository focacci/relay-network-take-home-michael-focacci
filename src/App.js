import React, { useEffect, useState } from 'react';
import Summary from './components/Summary';
import Table from './components/Table';
import Dropdown from './components/Dropdown';
import './css/App.css';

function App() {

  const [rows, setRows] = useState(null);
  const [totals, setTotals] = useState(null);
  const [dropdownSelection, setDropdownSelection] = useState("");

  const dropdownOptions = [
    { label: "---", value: "" },
    { label: "Republican", value: "rep" },
    { label: "Democrat", value: "dem" },
    { label: "Other Party", value: "other_party" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Unknown Sex", value: "unknown_sex" },
    { label: "Black", value: "black" },
    { label: "Hispanic", value: "hispanic" },
    { label: "White", value: "white" },
    { label: "Other Race", value: "other_race" }
  ];

  const handleDropdownChange = (event) => {
    setDropdownSelection(event.target.value);
  }

  useEffect(() => {
    const url = "https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id";

    const processData = (data) => {
      var rows = data["rows"].slice(0, 66);
      var totals = data["rows"].slice(66)[0];
      setRows(rows);
      setTotals(totals);
    }
  
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        processData(json);
      }
      catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="TopContainer">
        <Summary totals={totals} segment={dropdownSelection}/>
        <Dropdown 
        label="Select a voter segment "
        value={dropdownSelection}
        options={dropdownOptions}
        onChange={handleDropdownChange}
        />
      </div>
      <Table rows={rows} segment={dropdownSelection}/>
    </div>
  );
}

export default App;
