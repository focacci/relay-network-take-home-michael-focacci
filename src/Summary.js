import React, { useState, useEffect } from 'react'


const segTitleMap = {
    "black": "Black",
    "hispanic": "Hispanic",
    "white": "White",
    "other_race": "Other Race",
    "male": "Male",
    "female": "Female",
    "unknown_sex": "Unknown Sex",
    "dem": "Democrat",
    "rep": "Republican",
    "other_party": "Other Party"
}


function formatAsPercent(num) {
    return new Intl.NumberFormat('default', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num / 100);
}


export default function Summary({ totals, segment }) {

    const [totalVoters, setTotalVoters] = useState(null);

    const [topSeg, setTopSeg] = useState(null);
    const [topSegVoterCount, setTopSegVoterCount] = useState(null);
    const [topSegVoterPercent, setTopSegVoterPercent] = useState(null);

    const [selSeg, setSelSeg] = useState(segment);
    const [selSegVoterCount, setSelSegVoterCount] = useState(null);
    const [selSegVoterPercent, setSelSegVoterPercent] = useState(null);

    useEffect(() => {
        /* totals is initially 'null' when rendered in parent component.
           The following code will not run unless totals is defined */
        if (totals) {

            /* Make a copy of totals so we can retain the "total" field value after we
               delete it from the object */
            var copy = JSON.parse(JSON.stringify(totals));

            /* Delete unneeded fields from the object. "total" is deleted so we can quickly
               find the largest segment value */
            delete copy["ward"];
            delete copy["the_geom"];
            delete copy["the_geom_webmercator"];
            delete copy["total"];

            /* Update state variables to be rendered in the HTML text */
            setTotalVoters(totals["total"]);
            setTopSeg(Object.keys(copy).reduce((a, b) => copy[a] > copy[b] ? a : b));
            setTopSegVoterCount(totals[topSeg]);
            setTopSegVoterPercent((topSegVoterCount/totalVoters)*100);
        }
    });

    useEffect(() => {
        setSelSeg(segment);
    }, [segment]);

    useEffect(() => {
        setSelSegVoterCount(totals[selSeg]);
    }, [selSeg]);

    useEffect(() => {
        setSelSegVoterPercent((selSegVoterCount/totalVoters)*100);
    }, [selSegVoterCount]);

    return (
        <div>
            <p>Top Segment of All Voters: {segTitleMap[topSeg]} - {topSegVoterCount} - {formatAsPercent(topSegVoterPercent)}</p>
            <p>Percentage of All Voters that are {segTitleMap[selSeg]} - {selSegVoterCount} - {formatAsPercent(selSegVoterPercent)}</p>
        </div>
    );
}