import './nav.css';

function Navbar({count}) {
    return (
        <div className='navbar-style'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand font-weight-bold" href="#"><h3>Shopping Point</h3></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
                            <div className='navbar-nav-left'>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Shop
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">All Products</a></li>
                                            <li><a className="dropdown-item" href="#">Popular Items</a></li>
                                            <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='nav'>
                                <form className='d-flex'>
                                    <button className='btn btn-outline-dark'>
                                        <i className="bi-cart-fill me-2"></i>
                                        Cart
                                        <span className='badge bg-dark text-white ms-2 rounded-pill'>{count}</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;