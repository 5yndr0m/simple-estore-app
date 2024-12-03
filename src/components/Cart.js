import { useState } from "react";

export default function Cart({ cartItems }) {
    const [gTotal, setGTotal] = useState(0);
    
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {
                    cartItems.map((cartItem) => (
                      <tr>
                        <td>
                          {cartItem.name}
                        </td>
                        <td>
                          {cartItem.qunt}
                        </td>
                        <td>
                          {cartItem.price}
                        </td>
                        {() => { setGTotal(gTotal + cartItem.price * cartItem.qunt) }}
                      </tr>
                    ))
                }
                <tr>
                    <td >Grand Total : </td>
            <td colSpan={2}>{ gTotal }</td>
                </tr>
            </table>
           
        </div>
    );
}