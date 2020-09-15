import React, {Component} from 'react';

class Product2 extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="card  " style={{width:'20rem'}}>
                        <img className="card-img-top" src="https://bipbap.ru/wp-content/uploads/2017/09/4.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.text}
                                </p>
                            <a href ="" className="btn btn-primary">{this.props.button}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product2;