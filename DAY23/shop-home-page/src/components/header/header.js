import './header.css'

function Header() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" style={{height: "300px" }}>
                <div className="carousel-item active">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/Coop/HFS_June_DesktopHero_3000x1200._CB602502758_.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/GWHeros/June/28th/3_3000._CB602465796_.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/June2023/SS/samsung_crystal_3000x1200._CB602489187_.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Header;




{/* <div classNameNameName='junbotron text-center d-flex align-items-center justify-content-center' style={{backgroundColor:"rgb(33, 37, 41)",color:"white",height:"500px",padding:"48px 0px"}}>
        <div>
        <h1 style={{fontSize:"56px,fontWeight:700"}}>Shopping Point</h1>
        <p style={{color:"rgba(255, 255, 255, 0.5)",fontSize:"20px,fontWeight:400",paddingTop:"15px"}}>All Your Needs in One Place</p>
        </div>
    </div> */}



    // <div>
    //         <div id="demo" classNameName="carousel slide mt-4" data-ride="carousel">
    //             <ul classNameName="carousel-indicators">
    //                 <li data-target="#demo" data-slide-to="0" classNameName="active"></li>
    //                 <li data-target="#demo" data-slide-to="1"></li>
    //                 <li data-target="#demo" data-slide-to="2"></li>
    //             </ul>
    //             <div classNameName="carousel-inner" style={{ width: "100%", height: "300px" }}>
    //                 <div classNameName="carousel-item active">
    //                     <img classNameName="d-block" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/Coop/HFS_June_DesktopHero_3000x1200._CB602502758_.jpg" alt="Los Angeles" width={"100%"} height={"650px"} />
    //                 </div>
    //                 <div classNameName="carousel-item">
    //                     <img classNameName="d-block" src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/GWHeros/June/28th/3_3000._CB602465796_.jpg" alt="Chicago" width={"100%"} height={"650px"} />
    //                 </div>
    //                 <div classNameName="carousel-item">
    //                     <img classNameName="d-block" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/June2023/SS/samsung_crystal_3000x1200._CB602489187_.jpg" alt="New York" width={"100%"} height={"650px"} />
    //                 </div>
    //             </div>
    //             <a classNameName="carousel-control-prev" href="#demo" data-slide="prev">
    //             <span classNameName="carousel-control-prev-icon"  ></span>
    //             </a>
    //             <a classNameName="carousel-control-next" href="#demo" data-slide="next">
    //                 <span classNameName="carousel-control-next-icon"  ></span>
    //             </a>
    //         </div>
    //     </div>