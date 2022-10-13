import React, { useState, useEffect } from 'react'
export default function Section1({ totals }) {

    const [totalVoters, setTotalVoters] = useState(null);
    return (
        <div>
            <p>Top Segment of All Voters:</p>
            <p>Percentage of All Voters that are segment:</p>
        </div>
    )
}