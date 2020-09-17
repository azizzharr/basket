import React, {Component} from 'react';

class Product2 extends Component {
    render() {
        const {title,text,button,price} = this.props
        return (
            <div>
                <div className='col'>
                    <div className="card  " style={{width:'15rem'}}>
                        <img className="card-img-top" src="https://bipbap.ru/wp-content/uploads/2017/09/4.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{text}
                                </p>
                            <a href ="" className="btn btn-primary">{button}</a>
                            <a href ="" style={{marginLeft:'14px' ,color:'black'}} className="price">{price}</a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product2;