import './shopping-area-style.css';

function ShoppingArea({ data, handleClick }) {
    return (
        <div className="col-3">
            <div className="card">
                <div className="card-img-top">
                    <img src={data.img} alt="products" />
                    {data.isSales ? <h6 className='batch bg-dark text-white'><span>Sale</span></h6> : ""}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <div className='card-rating'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                    </div>
                    <p className="card-text pt-3">{data.price}</p>
                </div>
                <div className='card-footer'>
                    <button onClick={(e) => handleClick(e)} className="btn border-dark">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingArea;





{/* <div className="col-3">
                    <div className="card">
                        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Special Item</h5>
                            <div className='card-rating'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                            </div>
                            <p className="card-text pt-3">$18.00</p>
                        </div>
                        <div className='card-footer'>
                            <a href="#" className="btn border-dark">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sale Item</h5>
                            <div className='card-rating'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                            </div>
                            <p className="card-text pt-3">$18.00</p>
                        </div>
                        <div className='card-footer'>
                            <a href="#" className="btn border-dark">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Popular Item</h5>
                            <div className='card-rating'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                            </div>
                            <p className="card-text pt-3">$18.00</p>
                        </div>
                        <div className='card-footer'>
                            <a href="#" className="btn border-dark">Add to cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Special Item</h5>
                            <div className='card-rating'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                            </div>
                            <p className="card-text pt-3">$18.00</p>
                        </div>
                        <div className='card-footer'>
                            <a href="#" className="btn border-dark">Add to cart</a>
                        </div>
                    </div>
                </div> */}