
import '../assets/CSS/layout.css';
import Product from './Product';
import { flowers } from './FlowerDB';
import { useState } from 'react';
import Cart from './Cart';

export default function Products(){
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (flower, quantity) => {
    if (quantity > 0) {
      const newCartItem = {
        id: flower.id,
        name: flower.name,
        quantity: quantity,
        price: flower.price,
        totalPrice: flower.price * quantity,
      }
      
      setCartItems((prevItems) => {
        return [...prevItems, newCartItem]
      });
    }
  };
  
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        flowers.map((flower)      => (
                          <Product key={flower.id} flower={flower} addToCart={addToCart} />
                        ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                  <Cart cartItems={cartItems} />
                }
            </div>
        </>
    );

}