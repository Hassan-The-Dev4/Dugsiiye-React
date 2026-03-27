import {  useState } from "react";

export const ShoppingCart = () => {

  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const addProduct = () => {
    if(productName.trim() !== "" && productPrice.trim() !== ""){
        const newProduct = {
            id : Date.now(),
            name: productName,
            price:  parseFloat(productPrice),
            quantity: 1
        }

        setProducts([...products, newProduct]);
        setProductName("");
        setProductPrice("");
    }
  }


  const removeProduct = (id) =>{
    const updatedProduct = products.filter(product => product.id !== id);
    setProducts(updatedProduct);
  }

  const increaseQuantity = (id) => {
    const updatedProduct = products.map(product => (
      product.id === id ? {...product, quantity : product.quantity +1} : product
    ));
    setProducts(updatedProduct);
  }

  const dicreaseQuantity = (id) => {
    const updatedProduct = products.map(product => (
      product.id === id && product.quantity > 1 ? {...product, quantity : product.quantity -1} : product
    ))
    setProducts(updatedProduct);
  }

  const totalPrice = products.reduce((total, product)=> total + product.price * product.quantity,0)

  return (
    <div>
      <h2>Simple Shopping Cart</h2>

      <div>
        <h4>Add to Cart</h4>

        <input 
        type="text" 
        placeholder="product name"  
        onChange={(e)=> setProductName(e.target.value)}
        value={productName}
        />

        <input 
        type="number"
        min="0" 
        placeholder="price" 
        onChange={(e)=> setProductPrice(e.target.value)}
        value={productPrice}
        />


        <button onClick={addProduct}>Add</button>
      </div>

      
      {
        products.length > 0 ? (
            <>
            <h3>Products In cart</h3>

            <ul>

            {
                products.map(product => (

                    <li key={product.id}>
                        <strong>{product.name}</strong>- ${product.price.toFixed(2)}
                        <div>
                            Quantity:
                            <button min="0" onClick={()=> dicreaseQuantity(product.id)}>-</button>
                            {product.quantity}
                            <button onClick={()=> increaseQuantity(product.id)}>+</button>
                        </div>
                        <button onClick={()=> removeProduct(product.id)}>Remove</button>
                    </li>
                    
                ))
            }

            </ul>

            <h4>Total Price: ${totalPrice}</h4>

            </>

        ) : <p>This Product is empty.</p>
      }

      
   
    </div>
  );
};
