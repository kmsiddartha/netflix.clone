import React from 'react'
import './Home.css';
import Nav from './Nav';
import {Link} from "react-router-dom";
function Home() {
    return (
        
        <div className='home'>
            <div className='homecont'>
            <h3>Welcome</h3>
            <h1>
                Unlimited Movies, TV
            </h1>
            <h1>
                Shows and more
            </h1>
            <h3>Watch anywhere. Cancel anytime</h3>
            </div>
        <div className='button'>
            <Link to='/row'><button className='sign'>JOIN FREE FOR A MONTH</button></Link>
        </div>
        </div>
        
    )
}

export default Home
