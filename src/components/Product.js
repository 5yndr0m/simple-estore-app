import '../assets/CSS/layout.css';
import { useState } from 'react';

export default function Product({ flower}){
  const [quantity, setQuantity] = useState(0);
  
  const addItem = (e) => {
    const { name, value } = e.target.value;
    
  }
  
    return(
        <div className="grid-item">

            <div className="card">
              <img src={require(`../assets/image/${flower.img}`)} alt={flower.name}/>
                <div className="card-body">
                  <h5 className="card-title">{ flower.name }Price: { flower.price}</h5>
                    <div className="quantity-container">
                        <label htmlFor="quantity">Quantity:</label>
                        <input 
                          type="number" 
                          id="quantity" 
                          name="quantity" 
                          value={quantity} 
                          min="0"
                          onChange={(e) => setQuantity(e.target.value)} 
                        />
                    </div>
                    <button className="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}