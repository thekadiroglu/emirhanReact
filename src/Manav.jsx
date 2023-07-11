import { useState } from 'react'
import Chery from './assets/chery.jpg'
import Melon from './assets/melon.jpg'
import Strawberry from './assets/strawberry.jpg'
import Peach from './assets/Peach.jpg'
import Orange from './assets/Orange.jpg'
import Grape from './assets/grape.jpg'
import Box from './assets/sepet2.png'
import Header from './components/Header'


function ProductItem({product, addToBasket}) {
    function handleClick() {
        addToBasket(product);

    }
    

    return (
        <div className='showCase'>
            <img className='smallPic' src={product.src} alt="" />
            <h4>{product.title}</h4>
        <button className='addBox' onClick={handleClick}>Add To Basket +</button>
        
        </div>
    );
}

function Products({addToBasket}) {
    return (
        <div className="products">
            {products.map(fruits => <ProductItem addToBasket={addToBasket} key={fruits.id} product={fruits} />)}
        </div>
    );
}

const products = [
    {
        id: 1,
    title: 'Melon',
    src: Melon,
        price: 8,
        stock: 5
    },
    {
        id: 2,
      title: 'Strawberry',
      src: Strawberry,
        price: 25,
        stock: 23
      
    },
    {
        id: 3,
      title: 'Chery',
      src: Chery, 
        price: 25,
        stock: 15
    },
    {
        id: 4,
      title: 'Peach',
      src: Peach,
        price: 15,
        stock: 30
    },
    {
        id: 5,
        title: 'Orange',
      stock: 10,
      src: Orange,
        price: 20,
        stock: 18
  },
  {
    id: 6,
      title: 'Grape',
    stock: 10,
    src: Grape,
      price: 25,
      stock: 40
  }
];
export default function Basket() {
    const [shoppingList, setShoppingList] = useState([]);

    
    function removeProduct(productId) {
        const updatedList = shoppingList.filter((item) => item.id !== productId);
        setShoppingList(updatedList);
      }
    function emptyProduct() {
        setShoppingList([]);
    }
    
    function addToBasket(product) {
        setShoppingList([...shoppingList, { ...product, id: Date.now() }]);
    }
   
    const total = shoppingList.reduce((acc, item) => acc + item.price, 0);
    return (
        <div className='basket'>
            <Header/>
            <h3 className='title'>Products</h3>
        <Products addToBasket={addToBasket} />
        <h3 className='title'>Your Basket</h3>
            {
                shoppingList.length > 0 ? 
                    <ul className='box'>     
              {shoppingList.map(x => <div className='product'  key={x.id}>
                <li>
                  <img id={x.id} src={x.src} alt="" />
                      <h5 className='title'>{x.title}</h5>
                      <h5 className='title'>Price: {x.price} TL</h5>
                      <button className='outBtn' id={x.id} onClick={() => removeProduct(x.id)}>Out -</button>
                  </li>
              </div>)}
              <button className='outBtn' onClick={emptyProduct}>Clear</button>              
                </ul> :
            <ul className='emptyBox'>
                        <div >
                            <img src={Box} alt="" />
                            <h3>Your cart is empty</h3>
              </div>
                </ul>
            } 
            {shoppingList.map(y => <div key={y.id}>
                <p>{y.total}</p>
                
            </div>)}
        <p className='inBox'>Basket Price: {total} TL</p>
            <p className='inBox'>Ürün Toplamı: {shoppingList.length}</p>
        </div>
    );
}
    