import "../style/navbar.css"
const Navbar = () => {
    const openingTag = "<"
    const name = "Sandeep"
    const closeTag = "/>"
    return ( 
        <div className="navbar-container">
            <div className="navbar-name">
                {openingTag} <span> {name} </span> {closeTag}
            </div>
            <div className="navbar-buttons">
                <input type="button" value="Home" />
                <input type="button" value="About" />
                <input type="button" value="Connect" />
            </div>
        </div>
     );
}

export default Navbar;