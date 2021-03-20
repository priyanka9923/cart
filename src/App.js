import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor (){
    super();

    this.state ={
        products:[
        {
            
            price : 999,
            title : 'Watch',
            qty : 4,
            img : 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id : 1
        },
        {
            
            price : 9999,
            title : 'Laptop',
            qty : 2,
            img : 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id: 2
        },
        {
            
            price : 999,
            title : 'Phone',
            qty : 1,
            img : 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            id : 3

        }
        ]
    }

   // this.increaseQuantity = this.increaseQuantity.bind(this)
//this.testing();
}
handleIncreaseQuantity = (product) => {
    console.log('hey please increase the qty', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products
    })
}

handleDecreaseQuantity = (product) => {
    console.log('hey please increase the qty', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products
    })
}

handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}
getCartCount =()=> {
  const {products} = this.state;

  let count=0;
  products.forEach((product) => {
    count +=product.qty;
  });
  return count;
}
getCartTotal =()=> {
  const{products}= this.state;
  let total=0;
  products.forEach((product) =>{
    total += product.qty*product.price;

  });
  return total;
}

  render(){
    const { products }= this.state;
    return (
      <div className="App">
        <Navbar count= {this.getCartCount()}/>
      <Cart
      products={products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}

      />
      <div style={{ padding: 10, fontSize: 20}}>Total: {this.getCartTotal()}</div>
      
      </div>
    );
  }
}

export default App;
