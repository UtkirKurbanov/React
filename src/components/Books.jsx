import React, { useState } from 'react';
import './books.css';
import Counter from './counter';

const Books = props => {
    const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     console.log('Clicked');
    // };

    const titleChangeHandler = () => {
        setTitle('Amerika fojeasi');
    };
    const titleResetHandler = () => {
        setTitle(props.title);
    };


    return (
        <div className='book'>
            <img className='book_img' src={props.img} alt="Otamdan qolgan dalalar" />
            <div className='book_desc'>
                <h2>{title}</h2>
                <p>{props.author}</p>
                <br />
                <button onClick={titleChangeHandler}>         Change Title</button>
                <br />
                <button onclick={titleResetHandler}>Reset Title</button>
                <Counter />
            </div>            
        </div>
    );
};

export default Books;
