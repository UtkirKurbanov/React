import React from "react";

function test2(props) {
    // const expenseDate = new Date(2023, 3, 24);
    // const expenseTitle = 'Front-End Course';
    // const expenseAmount = 400000;

    return (
        <div>
            Date: {props.date.toISOString()}
            <h2>Reason: {props.title}</h2>
            <p>Cost: ${props.amount} US</p>
        </div>

    )
}
export default test2;