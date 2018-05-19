 var React = require('react');
 import './styles.css';
 var ReactDom = require('react-dom');

 class Header extends React.Component {
 	constructor() {
 		super();
 		this.state={
 			data:"inside header data"
 		}
 	}
  render()
  {
  	return (<div style={{"height":"60", "border":"1px solid"}}>
  		<h2 style={{"color":"purple", "text-align":"left","margin":"20px"}}>URBAN PIPER</h2>
  		</div>)
  }

 }

 export default Header;