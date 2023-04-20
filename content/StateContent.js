import React, {createContext, useContext, useState} from 'react';
import toast from "react-hot-toast";

const StateContext = createContext(undefined);

export const StateProvider = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [qty, setQty] = useState(1);
    const [isFeatured, setIsFeatured] = useState(false);
    const [isMen, setIsMen] = useState(false);
    const [isWomen, setIsWomen] = useState(false);
    const [allProducts, setAllProducts] = useState(true);
    let foundProduct;
// increment quantity
    const setFeatured = () => {
        setIsFeatured(true);
        setIsMen(false);
        setIsWomen(false);
        setAllProducts(false);
    }
    const setMen = () => {
        setIsFeatured(false);
        setIsMen(true);
        setIsWomen(false);
        setAllProducts(false);
    }
    const setWomen = () => {
        setIsFeatured(false);
        setIsMen(false);
        setIsWomen(true);
        setAllProducts(false);
    }
    const setAll = () => {
        setIsFeatured(false);
        setIsMen(false);
        setIsWomen(false);
        setAllProducts(true);
    }
    const incQty = () => {
        setQty((prevQty) =>
            prevQty + 1
        )
    }
// decrement quantity
    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        })
    }

// add to cart
    const addToCart = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setCartTotal((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setCartQuantity((prevTotalQuantities) => prevTotalQuantities + quantity);

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}]);
        }

        toast.success(`${product.name} added to the cart.`);
    }

// remove from cart
    const removeFromCart = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        setCartTotal((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setCartQuantity(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
        toast.success(`${product.name} removed from the cart.`);
    }

    const cartItemsQuantity = (id, value) => {
        foundProduct = cartItems?.find((item) => item._id === id);
        if (value === 'inc') {
            const updatedData = cartItems.map(item => (item._id === id ? {
                ...item,
                quantity: item.quantity + 1
            } : item));
            setCartItems(updatedData);
            setCartTotal((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setCartQuantity(prevTotalQuantities => prevTotalQuantities + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                const updatedData = cartItems.map(item => (item._id === id ? {
                    ...item,
                    quantity: item.quantity - 1
                } : item));
                setCartItems(updatedData);
                setCartTotal((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setCartQuantity(prevTotalQuantities => prevTotalQuantities - 1)
            }

        }
    }
    return (
        <StateContext.Provider
            value={{
                cartItems,
                cartTotal,
                cartQuantity,
                qty,
                incQty,
                decQty,
                addToCart,
                removeFromCart,
                cartItemsQuantity,
                showCart,
                setShowCart,
                setFeatured,
                setMen,
                setWomen,
                setAll,
                isFeatured,
                isMen,
                isWomen,
                allProducts
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext);