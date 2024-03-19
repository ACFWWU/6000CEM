import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
        <div className="container">
            <Link to="/">
                <h1>S.S.System</h1>
            </Link>
        </div>
        <div className="container">
            <Link to="/qr">QR</Link>
        </div>
        </header>
    );
}

export default Navbar;