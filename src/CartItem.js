import React from 'react';
class CartItem extends React.Component {
    constructor (){
        super();
        this.state = {
            
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this)
       this.testing();
    }

    testing () {
        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve('done');
            }, 5000);
        })
        promise.then(() => {
            //set state acts like a synchronous call
            this.setState({ qty:100});
            console.log('state',this.state);
        });
    }

    increaseQuantity =()=> {
        //steState form 1
        this.setState({
            qty: this.state.qty + 1
        });
        //setState form 2
        // this.setState((prevState) =>{
        //     return{
        //         qty: prevState.state.qty + 1
        //     }
        // });
    }
    decreaseQuantity =()=> {
        //steState form 1
        if (this.state.qty > 1){
            this.setState({
            
                qty: this.state.qty - 1
                
            });
        }
        
    }
    DeleteItem =()=> {
        //steState form 1
        this.setState({
        
        });
        //setState form 2
        // this.setState((prevState) =>{
        //     return{
        //         qty: prevState.state.qty + 1
        //     }
        // });
    }
    render (){
        const { price, title, qty }=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image
                    }/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}} >Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                         alt="increase"
                          className="action-icons" 
                          src="https://t3.ftcdn.net/jpg/02/51/03/82/240_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg"
                          onClick={this.increaseQuantity}>

                        </img>
                        <img 
                        alt="decrease"
                         className="action-icons" 
                         src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                         onClick={this.decreaseQuantity}>

                         </img>
                        <img
                         alt="delete"
                          className="action-icons" 
                          src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                          onClick={this.DeleteItem}>

                          </img>

                    </div>
                </div>

            </div>
        );
    }
}

const styles ={
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}

export default CartItem;