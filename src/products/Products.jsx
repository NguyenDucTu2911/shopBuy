import "../index.css"
import "./Products.css"
import nike from "../assets/nike.png"
import ListProduct from "./component/listProduct/ListProduct";
import Cart from "./component/cart/cart";
import products from "../database/products.json"
import { useState, useEffect } from "react";
import prodo from "../../src/database/products.json"
import useLocalStorage from "../customhook/useLocalStorage";


function Products(props) {

    const [cart, setCart] = useLocalStorage("carts", []);
    const [data, setdata] = useState([]);
    // const data = products;

    useEffect(() => {
        setdata(prodo.shoes.map((item) => {
            item.isCart = false
            return item
        }))
    }, []);

    const headlebuy = (product) => {
        data.map((item) => {
            if (item.id === product.id) {
                item.isCart = true
                return item
            }
        })
        const productexit = cart.find((item) => item.id === product.id);
        if (productexit) {
            setCart(cart.map((item) => item.id === product.id ?
                { ...productexit, quantity: productexit.quantity + 1 } : item))

        } else {
            setCart([...cart, { ...product, quantity: 1, isCart: true }]);
        }
    }

    const HandleAddProduct = (product) => {
        const productexit = cart.find((item) => item.id === product.id);
        if (productexit) {
            setCart(cart.map((item) => item.id === product.id ?
                { ...productexit, quantity: productexit.quantity + 1 } : item))
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    const HandleRemoveProduct = (product) => {

        const productexit = cart.find((item) => item.id === product.id);
        if (productexit.quantity === 1) {
            data.map((item) => {
                if (item.id === product.id) {
                    item.isCart = false
                    return item
                }
            })
            setCart(cart.filter((item) => item.id !== product.id));
        } else {
            setCart(cart.map((item) => item.id === product.id ?
                { ...productexit, quantity: productexit.quantity - 1 } : item))
        }

    }

    const handleDelete = (product) => {
        data.map((item) => {
            if (item.id === product.id) {
                item.isCart = false
                return item
            }
        })
        const productexit = cart.find((item) => item.id === product.id);
        if (productexit.quantity) {
            setCart(cart.filter((item) => item.id !== product.id));
        }
    }

    const Total = cart.reduce((price, item) => price + item.quantity * item.price, 0).toFixed(2)
    return (

        <>
            <div className="product grid ">

                <div className="list">
                    <div className="list-header">
                        <img src={nike} />
                    </div>
                    <div className="List-name">
                        Our Products
                    </div>
                    {/* list */}
                    <ListProduct data={data} cart={cart} headlebuy={headlebuy} />
                </div >

                <div className="list">
                    <div className="list-header">
                        <img src={nike} />
                    </div>
                    <div className="List-name">
                        Your cart
                        <span className="monney">${Total}</span>
                    </div>
                    {/* listCart */}
                    <Cart cart={cart}
                        headlebuy={headlebuy}
                        HandleRemoveProduct={HandleRemoveProduct}
                        HandleAddProduct={HandleAddProduct}
                        handleDelete={handleDelete} />
                </div >

            </div >
        </>

    );

}

export default Products;
