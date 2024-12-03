import '../assets/CSS/layout.css';

export default function Product({ flower}){
    
    return(
        <div className="grid-item">

            <div className="card">
              <img  src={require(`../assets/image/${flower.img}`)} alt={flower.name}/>
                <div className="card-body">
                    <h5 className="card-title">Price:</h5>
                    <div className="quantity-container">
                        <label htmlFor="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button className="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}