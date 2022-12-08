import Hero from '../images/Rectangle 90.png'

import './Header.css'


function Header() {
    return (
        <div className="header">
            <img className="photo" src={Hero} />
        </div>
    );
}

export default Header;