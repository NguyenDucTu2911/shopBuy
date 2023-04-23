import "../../../index.css"
import "./ListProduct.css"
import check from "../../../assets/check.png"

function ListProduct({ data, headlebuy, cart }) {

    return (
        <div className="row">

            {/* list */}
            <div className="ListProducct">
                {data && data.map((item) => {
                    const color = item.color;
                    return (
                        <div className="List-body" key={item.id}>
                            <div className="list-itemImg">
                                <div className="imgline" style={{ background: color, width: "100%", height: "100%" }}>
                                    <img className="img-name" src={item.image} alt={item.name} style={{
                                        width: "100%", height: "100%"
                                        ,
                                    }} />
                                </div>

                            </div>
                            <div className="list-itemName">{item.name}</div>
                            <div className="list-itemDescription">
                                {item.description}
                            </div>
                            <div className="list-itemBottom">
                                <div className="list-itemBottom_Pride">
                                    ${item.price}
                                </div>
                                {
                                    item.isCart === false ? <div className="list-itemBottom_Btn" onClick={() => headlebuy(item)} key={item.id}>
                                        <p className="addCart">ADD TO CART</p>
                                    </div>
                                        : <div className="list-itemBottom_Btn">
                                            <img className="imgcheck" src={check} />
                                        </div>
                                }

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>

    );
}

export default ListProduct;