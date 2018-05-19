var React = require('react');

class Footer extends React.Component {

        render() {
            return (<div style = {
                    {
                        "box-shadow": "0 -20px 5px -16px #D3D3D3",
                        "border": "1px solid #ccc",
                        "height": "80px",
                        "width": "800px",
                        "align-content":"center"
                    }
                }>
                <button style = {
                    {
                        "border": "1px solid #ccc",
                        "height": "40px",
                        "width": "180px",
                        "background": "#f7f7f7",
                        "color": "black",
                        "box-shadow": "1px 2px 16px #D3D3D3",
                        "border-radius": "2px",
                        "margin":"12px 0px 0px 400px"
                    }
                }> CONTINUE SHOPPING < /button> 
                 <button style = {
                    {
                        "height": "40px",
                        "width": "180px",
                        "box-shadow": "1px 2px 16px #D3D3D3",
                        "background": "#EF5614",
                        "border-radius": "2px",
                        "margin":"12px 0px 0px 15px"
                    }
                }> PLACE ORDER < /button>  </div>);
            }
        }

export default Footer;