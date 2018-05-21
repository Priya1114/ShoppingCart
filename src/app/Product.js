var React = require('react');

class Product extends React.Component {
        constructor() {
            super();
            this.state = {
                count: 1
            };
            this.decrement = this.decrement.bind(this);
            this.increment = this.increment.bind(this);
        }

        decrement() {
            if (this.state.count != 1) {
                this.setState({
                    count: --this.state.count
                })
            }
        };

        increment() {
            this.setState({
                count: ++this.state.count
            })
        };

        render() {
            console.log("inside product ", this.props.data);
            return ( < div style = {
                    {
                        "width": "450px",
                        "height": "200px",
                        "margin": "20px 0px 0px 0px"
                    }
                } >
                <div style = {
                    {
                        "width": "150px",
                        "height": "200px",
                        "float": "left"
                    }
                } >
                <div style = {
                    {
                        "margin": "10px 10px 10px 30px"
                    }
                } >
                <img  align = "center" height = "110px" width = "90px"src = {this.props.data.image}/> 
                </div>
                <div style = {
                    {
                        "margin": "10px 10px 10px 25px",
                        "width": "100px",
                        "height": "30px"
                    }
                }>
                <span onClick = {
                    this.decrement
                }
                style = {
                    {
                        "cursor": "hand",
                        "float": "left",
                        "border": "1px solid #ccc",
                        "border-radius": "50%",
                        "height": "20px",
                        "width": "20px",
                        "text-align": "center",
                        "background": "#f7f7f7"
                    }
                }>-</span> 
                <span style = {
                    {
                        "border": "1px solid #ccc",
                        "height": "20px",
                        "width": "35px",
                        "display": "inline-block",
                        "text-align": "center",
                        "margin": "0px 0px 0px 11px",
                        "text-size": "16px"
                    }
                }> {this.state.count} </span> 
                <span onClick = {this.increment} style = {
                    {
                        "float": "right",
                        "border": "1px solid #ccc",
                        "border-radius": "50%",
                        "height": "20px",
                        "width": "20px",
                        "text-align": "center",
                        "background": "#f7f7f7"
                    }
                }>+</span>
                </div> 
                </div> 
                <div style = {
                    {
                        "width": "200px",
                        "height": "200px",
                        "float": "right",
                        "font-family": "Sans-serif"
                    }
                }>
                <p>{this.props.data.name}
                <p style = {
                    {
                        "font-size":"14px",
                        "color":"gray",
                        "font-family": "Sans-serif"
                    }
                }>{this.props.data.feature}</p>  
                <p style = {
                    {
                        "font-size":"12px",
                        "color":"gray",
                        "font-family": "Sans-serif"
                    }
                }>Seller: {this.props.data.seller}</p>
                <h3> {this.props.data.price} </h3>
                </p>
                <div style = {
                    {
                        "text-align": "left",
                        "margin": "10px 10px 10px 0px"
                    }
                }>
                <h4 onClick = {this.props.onClick} > Remove </h4> 
                </div>
                </div>
                </div>)
            }
        }
export default Product;