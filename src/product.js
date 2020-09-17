import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <div >
                <div className="card"  style={{width:'20rem'}}>
                    <img className="card-img-top" src="https://s3.nat-geo.ru/images/2019/7/19/21617921fa0642dca09999e746a248b7.max-2500x1500.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 style={this.props.style} className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                        <a href ="" className="btn btn-primary">{this.props.button}</a>
                        <a href ="" style={{marginLeft:'10px;'}} className="price">200</a>

                    </div>
                </div>
            </div>
        );
    }
}

export default Product;