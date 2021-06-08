import React ,{useEffect} from 'react'
import './Nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Nav() {

    const [show, handleshow] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleshow(true)
        } else handleshow(false);
      });
      return () => {
        window.removeEventListener("scroll",{passive:true});
      }
    }, []);

    return (
        <div className={`nav ${show && 'navblack'}`} >
            <Link to='/'><img
              className='navlogo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png'
              alt="netflix_logo"
            /></Link>
            <img
              className='acclogo'
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            />
        </div>
    )
}

export default Nav
