import './App.css';
import React,{useState}from 'react';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import ShoppingArea from './components/shopping-area/shopping-area';
import Footer from './components/footer/footer';

let products = [
  {
    id : 1,
    isSales : false,
    title: "Smart Watch",
    price: "$44.00",
    img: "https://m.media-amazon.com/images/I/61S6f8SQGvL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id : 2,
    isSales : true,
    title: "HeadPhone",
    price: "$69.00",
    img: "https://m.media-amazon.com/images/I/71tylOH15JL._AC_UL960_FMwebp_QL65_.jpg",
  },
  {
    id : 3,
    isSales : true,
    title: "Hp Full HD Monitor",
    price: "$123.00",
    img: "https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id : 4,
    isSales : false,
    title: "Men's Running Shoes",
    price: "$34.00",
    img: "https://m.media-amazon.com/images/I/71C4-3Ksp-L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id : 5,
    isSales : true,
    title: "Robot Toys",
    price: "$25.00",
    img: "https://m.media-amazon.com/images/I/61w7nXzBZyL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id : 6,
    isSales : false,
    title: "Laptop",
    price: "$129.00",
    img: "https://m.media-amazon.com/images/I/71LbNQh0aPL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id : 7,
    isSales : true,
    title: "Google Pixel 7a",
    price: "$478.00",
    img: "https://m.media-amazon.com/images/I/8162vKQDSYL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id : 8,
    isSales : false,
    title: "Men's Shirt",
    price: "$31.00",
    img: "https://m.media-amazon.com/images/I/81oTmSS7J3L._AC_UL480_FMwebp_QL65_.jpg",
  }];



function App() {
  const [count,setCount] = useState(0);

  const handleClick = (e) => {
      if(e.target.innerHTML === 'Add to Cart'){
            setCount(count+1);
            e.target.innerHTML = "Remove From Cart";
      }
      else if(e.target.innerHTML === 'Remove From Cart')
      {
            setCount(count-1);
            e.target.innerHTML = "Add to Cart";
      }
}

  return (
    <React.Fragment>
      <div>
      <Navbar count={count}/>
      <Header />

      <div className="shopping-container">
        <div className="row align-items-start">
          {
            products.map((d,i) => {
              return <ShoppingArea handleClick={handleClick} key={i} data ={d} />
            })
          }
        </div>
      </div>

      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;




