
export default function Cart({ cartItems }) {
  let grandTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    grandTotal += cartItems[i].totalPrice;
  }
    
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
                          {cartItem.quantity}
                        </td>
                        <td>
                          {cartItem.totalPrice}
                        </td>
                      </tr>
                    ))
                }
                <tr>
                    <td >Grand Total : </td>
            <td colSpan={2}>{ grandTotal }</td>
                </tr>
            </table>
           
        </div>
    );
}