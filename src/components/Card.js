import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

import './Card.css'

function Card() {
    return(
        <div className="card">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default Card;