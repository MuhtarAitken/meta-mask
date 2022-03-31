import React from 'react';
import classes from "./Home.module.css"

const Home = (props) => {
    return (
        <div>
            <div className={classes.home}>
                <h1>welcome</h1>
                <p>eth address : {props.currentAccount}</p>
            </div>
        </div>

    );
};

export default Home;