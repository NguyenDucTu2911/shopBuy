import "../../../index.css"
import "./cart.css"
import Trash from "../../../assets/trash.png"
import plus from "../../../assets/plus.png"
import minus from "../../../assets/minus.png"


function cart({ cart, headlebuy, HandleRemoveProduct, HandleAddProduct, handleDelete }) {
    return (
        <div className="row">

            {/* list */}
            <div className="ListProducct">
                <div className="List-body">
                    {cart.length === 0 ? <div className="CartBody-itemName">Your cart is empty.</div> : <div>
                        {cart.map((item) => {
                            const color = item.color
                            const sumItem = (item.price * item.quantity).toFixed(2)
                            return (
                                <div className="cartItem">
                                    <div className="cartItem-Img">
                                        <div className="cartImgline" style={{ background: color, width: "100%", height: "100%" }}>
                                            <img className="cartImg-name" src={item.image} alt={item.name} style={{
                                                width: "100%", height: "100%",
                                            }} />
                                        </div>
                                    </div>
                                    <div className="CartBody">
                                        <div className="CartBody-itemName">{item.name}</div>
                                        <div className="CartBody-itemBottom_Pride">
                                            ${sumItem}
                                        </div>
                                        <div className="CartBody-vtn">
                                            <div className="quantity">
                                                <button className="quantity-itemRemove"
                                                    onClick={() => HandleRemoveProduct(item)}
                                                >-</button>
                                                <p className="quantity-num">{item.quantity}</p>
                                                <button className="quantity-itemAdd"
                                                    onClick={() => HandleAddProduct(item)}
                                                >+</button>

                                            </div>
                                            <div className="Cartbtn" onClick={() => handleDelete(item)}>
                                                <img className="imgcheck" src={Trash} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>}
                </div>

            </div>

        </div>
    );
}

export default cart;