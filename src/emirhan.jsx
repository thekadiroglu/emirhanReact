import { useState } from 'react'

function FetchProductsButton({onClick}) {
    return (
        <button onClick={onClick}>Ürünleri Getir</button>
    )
}

function ProductTable({products}) {
    let productList = products.map(product => <li key={product.id}>{product.title}</li>);

    return (
        <ul>
            {productList}
        </ul>
    );
}

export default function ProductList() {
    const [products, setProducts] = useState([]);
    
    async function fetchProducts() {
        const productList = await fetch('https://dummyjson.com/products').then(r => r.json());
        setProducts(productList.products);
    }

    return (
        <div>
            <FetchProductsButton onClick={fetchProducts} />
            <ProductTable products={products} />
        </div>
    )
}