import React from "react";

function test2(props) {
    // const expenseDate = new Date(2023, 3, 24);
    // const expenseTitle = 'Front-End Course';
    // const expenseAmount = 400000;
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();

    return (
        <div>
            <span>{month} </span>
            <span>{day} </span>
            <span>{year} </span>
            <h2>Reason: {props.title}</h2>
            <p>Cost: ${props.amount} US</p>
        </div>

    )
}
export default test2;