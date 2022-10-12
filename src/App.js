import React, { useEffect, useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';

function App() {

  const [rows, setRows] = useState(null);
  const [totals, setTotals] = useState(null);

  useEffect(() => {
    const url = "https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id";
    
    const processData = (data) => {
      var rows = data["rows"].slice(0, 66);
      var totals = data["rows"].slice(66);
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
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
