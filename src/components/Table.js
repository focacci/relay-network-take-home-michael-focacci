import React from 'react';
import { formatAsPercent } from '../utils';
import { v4 as uuidv4 } from 'uuid';
import '../css/Table.css';

function TableBody({rows, segment}) {

    if (rows) {
        return (
            rows.map(row =>
                {
                    return (
                        <tr className="TableRow" key={uuidv4()}>
                            <td>{row["ward"]}</td>
                            <td>{row["rep"]}</td>
                            <td>{row["dem"]}</td>
                            <td>{row["other_party"]}</td>
                            <td>{row["male"]}</td>
                            <td>{row["female"]}</td>
                            <td>{row["unknown_sex"]}</td>
                            <td>{row["black"]}</td>
                            <td>{row["hispanic"]}</td>
                            <td>{row["white"]}</td>
                            <td>{row["other_race"]}</td>
                            <td>{row["total"]}</td>
                            <td>{(segment === "") ? "%" : formatAsPercent((row[segment]/row["total"])*100)}</td>
                        </tr> 
                    )
                }
            )
        )
    }
}

export default function Table({ rows, segment }) {

    return (
        <div>
            <table className="Table">
                <thead>
                    <tr className="TableHeader">
                        <th>Ward</th>
                        <th>Republican</th>
                        <th>Democrat</th>
                        <th>Other Party</th>
                        <th>Male</th>
                        <th>Female</th>
                        <th>Unknown Sex</th>
                        <th>Black</th>
                        <th>Hispanic</th>
                        <th>White</th>
                        <th>Other Race</th>
                        <th>Total</th>
                        <th>%</th>
                    </tr>
                </thead>
                <tbody>
                    <TableBody rows={rows} segment={segment} />
                </tbody>
            </table>
        </div>
    )
}