import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <h3>Ecomerce</h3>
            <button>cervezas</button>
            <button>gaseosas</button>
            <button>vinos</button>

            <CartWidget />
        </nav>
        </div>
        
        
    )

}

export default NavBar