import React from 'react';
import ReactDOM from 'react-dom';

const navComponent = React.PureComponent({
    render: function() {
        return (
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        );
    }
})

export default navComponent;