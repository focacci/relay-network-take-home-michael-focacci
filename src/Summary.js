import React, { useState, useEffect } from 'react';
import { segTitleMap, formatAsPercent } from './utils';

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
            setTopSegVoterPercent(formatAsPercent((topSegVoterCount/totalVoters)*100));
        }
    });

    useEffect(() => {
        setSelSeg(segment);
    }, [segment]);

    /* The following effect hooks use if-else statements to handle the default empty selection */
    useEffect(() => {
        if (selSeg != "") {
            setSelSegVoterCount(totals[selSeg]);
        }
        else {
            setSelSegVoterCount("");
        }
    }, [selSeg]);

    useEffect(() => {
        if (selSeg != "") {
            setSelSegVoterPercent(formatAsPercent((selSegVoterCount/totalVoters)*100));
        }
        else {
            setSelSegVoterPercent("");
        }
    }, [selSegVoterCount]);

    return (
        <div>
            <p>Top Segment of All Voters: {segTitleMap[topSeg]} - {topSegVoterCount} - {topSegVoterPercent}</p>
            <p>Percentage of All Voters that are {segTitleMap[selSeg]} - {selSegVoterCount} - {selSegVoterPercent}</p>
        </div>
    );
}