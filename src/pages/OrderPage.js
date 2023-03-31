import React from "react";
import ProductRow from "../components/ProductRow.js";

function OrderPage({products}) {
    return (
        <>
            <h2>Order Form</h2>
            <article>
                <p>
                    Welcome to our online ordering page! Each product is limited to ten per customer. Thank you!
                </p>
                    <table>
                        <caption>Spring 2023 Collection</caption>
                        <thead>
                            <tr>
                                <th>Item, Company</th>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((currentProduct, index) => <ProductRow item={currentProduct} key={index}/>)}
                        </tbody>
                    </table>
            </article>
        </>
    );
}

export default OrderPage;