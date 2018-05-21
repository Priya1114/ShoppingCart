 var React = require('react');

 class Header extends React.Component {

         render() {
             return ( < div style = {
                     {
                         "border": "1px solid #ccc",
                         "height": "50px",
                         "width": "800px"
                     }
                 }>
                 <p style = {
                     {
                         "margin": "15px 0px 0px 25px",
                         "font-family": "sans-serif"
                     }
                 } > My Cart({this.props.data.value}) </p>
                  </div>)
             }

         }

export default Header;