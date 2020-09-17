import React, {Component} from 'react';

class Product2 extends Component {
    render() {
        const {title,text,button,price ,color,rebate} = this.props
        return (
            <div>
                <div className='col'>
                    <div className="card  " style={{width:'15rem'}}>
                        <img className="card-img-top"  src='https://superg.ru/wallpapers-by-justin-maller/wallpaper-03/' alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{text}
                                </p>
                            <button className="btn btn-primary">{button}</button>
                            <br/>
                            <span style={{marginLeft:'14px' ,color:'black',  textDecoration:"line-through"}} className="price">{price}som</span>
                            <span style={{marginLeft:'14px' ,color:'red'}} className="">{ rebate}som</span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product2;