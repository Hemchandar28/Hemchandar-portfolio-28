import { useState } from 'react';
import './header.css';
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import resume from "../../assest/HemchandarResume(1).pdf";

function Header() {
    const[value,setvalue] = useState(true)

    function Click() {
        setvalue(!value);
    }
    return(
        <div className="headercontainer">
            <div className="navbar">
                <div className="title">
                    <h1>PORTFOLIO</h1>
                </div>
                <div className="nav">
                <div className="menuicons" onClick={()=>Click()}>{value ? (<FaBars/>) : (<GrClose/>)}</div>
                <nav className='navheader'>
                    <ul className={value ? "navheader ul active" : "navheader ul"}>
                        <li onClick={()=>Click()} ><Link to='/'>HOME</Link></li>
                        <li onClick={()=>Click()}><Link to='/about'>ABOUT</Link></li>
                        <li onClick={()=>Click()}><Link to='/resume'>RESUME</Link></li>
                        <li onClick={()=>Click()}><Link to='/project'>PROJECT</Link></li>
                        <li onClick={()=>Click()}><Link to='/contact'>CONTACT</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    )
}
export default Header;