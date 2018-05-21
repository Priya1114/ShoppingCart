var React = require('react');
var ReactDom = require('react-dom');

import Header from './Header.js';
import Footer from './Footer.js';
import Product from './Product.js';

class App extends React.Component {
        constructor(props) {
            super(props);
                this.state = {
                   isHidden1: false,
                   isHidden2: false,
                   isHidden3: false,
                   value: 3
                }
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
        // componentDidMount() {
        //     if(this.state.isHidden1 && this.state.isHidden2 && this.state.isHidden3)
        //     {
        //         this.setState({
        //           value : 1
        //         })
                
        //     }
        // }
        remove1() {
            console.log("remove function");
                this.setState({
                  isHidden1: !this.state.isHidden1
                })
        }
        remove2() {
            console.log("remove function");
                this.setState({
                  isHidden2: !this.state.isHidden2
                })
        }
        remove3() {
            console.log("remove function");
                this.setState({
                  isHidden3: !this.state.isHidden3
                })
        }


        render() {
            return ( < div style = {{"border": "1px solid #ccc","height": "800px","width": "800px","margin": "auto"}} >
                <Header data={this.state} />
                { !this.state.isHidden1 && < Product  onClick = {this.remove1.bind(this)} data = {this.data1}/>}
                <hr></hr> 
                { !this.state.isHidden2 && < Product  onClick = {this.remove2.bind(this)} data = {this.data2}/>}
                 <hr></hr>
                { !this.state.isHidden3 && < Product  onClick = {this.remove3.bind(this)} data = {this.data3}/>}
                <Footer/>
                </div>)
            }
        }


export default App;