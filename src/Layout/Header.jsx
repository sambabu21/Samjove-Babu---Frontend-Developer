import { NavLink,Link } from "react-router-dom"

export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "whitesmoke"
    }

    return (
        <header className="header">
            <Link className="site-logo" to="/">SpaceX</Link>
            <nav>
                <NavLink
                    to="/rockets"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    ROCKETS
                </NavLink>
                <NavLink
                    to="/capsules"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    CAPSULES
                </NavLink>
            </nav>
        </header>
    )
}
