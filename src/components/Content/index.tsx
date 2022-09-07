import React from 'react';
import Cards from './Cards';
import Upload from './Upload';
import './styles.css';

function Content() {
    return (
        <React.Fragment>
            <Upload/>;
            <Cards/>;
            <footer></footer>
        </React.Fragment>
    );
}

export default Content;