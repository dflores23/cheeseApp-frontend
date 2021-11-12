import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>
                    Add Your Favor Cheese
                </div>
            </Link>
        </nav>
    )
}

export default Header