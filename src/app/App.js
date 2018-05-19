var React = require('react');
var ReactDom = require('react-dom');

import Header from './Header.js';
import Product from './Product.js';

class App extends React.Component
{
   constructor(props) {
      super(props);
      this.data1 = {
      	"id":"item1",
      	"name":"Moto G5 Plus",
      	"price":"₹14,999",
      	"image":"../../dist/mobile.png"
      }
      this.data2 = {
      	"id":"item2",
      	"name":"Casusal Women's Pink Top",
      	"price":"₹459",
      	"image":"../../dist/top.png"
      }
      this.data3 = {
      	"id":"item3",
      	"name":"Indian Polity 5 Edition",
      	"price":"₹350",
      	"image":"../../dist/book.png"
      }
}

	render(){
		return(<div style={{"border": "1px solid #ccc","height":"762px","width":"500px"}}>
			<div style={{"border": "1px solid #ccc","height":"60px","width":"500px"}}>
			<p>My Cart</p>
			</div>
            <Product data={this.data1} />
            <div style={{"border": "1px solid #ccc","height":"1px","width":"500px"}}></div>
            <Product data={this.data2} />
                 <div style={{"border": "1px solid #ccc","height":"1px","width":"500px"}}></div>
            <Product data={this.data3} />
                 <div style={{"border": "1px solid #ccc","height":"1px","width":"500px"}}></div>
            <div style={{"border": "1px solid #ccc","height":"90px","width":"500px"}}>
            <button style={{"border": "1px solid #ccc","margin":"30px","height":"40px","width":"180px","background":"white","color":"black"}}>CONTINUE SHOPPING</button> 
            <button style={{"margin":"10px","height":"40px","width":"180px","background":"orange"}}>PLACE ORDER</button> 
            </div>
     
			</div>)

}
}


export default App;
