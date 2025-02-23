import { Link } from "react-router-dom";

function Navbar () {

    return (
        <nav style={{
        
            color:'white',
            padding: '10px',
            textAlign:'center'
        }}>
            <Link to="/">Home</Link>
            <Link to="./src/About">About</Link>
            <Link to="./src/Services">Services</Link>
            <Link to ="./src/Contact">Contact</Link>
        </nav>
    );

}



export default Navbar;