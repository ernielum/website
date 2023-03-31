import React, { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const increase = () => setQuantity(quantity === 10 ? quantity : quantity + 1)
    const decrease = () => setQuantity(quantity === 0 ? 0 : quantity - 1)

    return (
        <>
            <AiFillCaretUp onClick={increase} />
            <span>{quantity}</span>
            <AiFillCaretDown onClick={decrease} />
        </>
    );
}

export default ProductQuantity;