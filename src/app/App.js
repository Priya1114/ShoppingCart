var React = require('react');
var ReactDom = require('react-dom');

import Header from './Header.js';
import Footer from './Footer.js';
import Product from './Product.js';

class App extends React.Component {
        constructor(props) {
            super(props);
            this.data1 = {
                "id": "item1",
                "name": "Moto G5 Plus(16 GB)",
                "feature": "3 GB RAM",
                "price": "₹14,999",
                "image": "../../dist/mobile.png",
                "seller": "Vision Star"
            }
            this.data2 = {
                "id": "item2",
                "name": "Casusal Women's Pink Top",
                "feature": "3/4 Sleeve ",
                "price": "₹459",
                "image": "../../dist/top.png",
                "seller": "RetailNet"
            }
            this.data3 = {
                "id": "item3",
                "name": "Indian Polity 5 Edition",
                "feature": "English, Paperback",
                "price": "₹350",
                "image": "../../dist/book.png",
                "seller": "TrueComRetail"
            }
        }

        render() {
            return ( < div style = {{"border": "1px solid #ccc","height": "800px","width": "800px","margin": "auto"}} >
                <Header / >
                <Product data = {this.data1}/>
                <hr></hr> 
                <Product data = {this.data2}/>
                 <hr></hr>
                <Product data = {this.data3}/>
                <Footer/>
                </div>)
            }
        }


export default App;