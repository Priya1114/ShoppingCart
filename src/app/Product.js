var React = require('react');
var ReactDom = require('react-dom');

class Product extends React.Component {
       constructor(props) {
      super(props);
      
      this.state = {
         data: 1,
         showMyComponent: false
      }
   };
    updateState() {
      this.setState({data: 'Data updated from the child component...'})
   }
    decrement(){
    	console.log("inside decrement")


    }
    removeItem(){
    	console.log("inside removeItem");
    	{ this.state.showMyComponent ? <MyComponent /> : null }
    }
	render()
	{
		console.log("inside product ",this.props.data);
		return(<div style={{"width":"450px","height":"200px"}}>
			<div style={{"width":"150px","height":"200px","float":"left"}}>
			<div>
			<img height= "110px" width="90px" src={this.props.data.image}/>
			</div>
			<div style={{"width":"40px","height":"20px"}}>
			<div onClick={this.decrement} style={{"float":"left","border": "1px solid #ccc","border-radius": "25px","height":"15px","width":"15px"}}>-</div>
             <p>{this.state.data}</p>
			<div style={{"float":"right","border": "1px solid #ccc","border-radius": "25px","height":"15px","width":"15px"}}>+</div>
			</div>
			</div>
			<div style={{"width":"200px","height":"200px","float":"right"}}>
			<p>{this.props.data.name}<br/>
               {this.props.data.price}
			</p>
			<h4 onClick={this.removeItem}>Remove</h4>
			</div>
			</div>)
	}
}

export default Product;