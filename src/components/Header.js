import Button from "./Button";
import React from 'react';

const Header = ({ title }) => {

    const onclick = (e) => {
        console.log('click');
    }

    return (
        <header className='header'>
            <h1 >{ title }</h1>
            <Button text='Add' color='green' onClick={onclick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'white'
// }

export default Header