import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>
                    Add Your Favorite Cheese
                </div>
            </Link>
        </nav>
    )
}

export default Header