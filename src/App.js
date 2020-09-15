import React, {Component} from 'react';
import Product from "./product";
import Product2 from "./Product2";

class App extends Component {
    state = {
    data: [
        {id:1, title:'Asan',text:'oxo sakat', button:'bas'},
        {id:2, title:'usan',text:'broo sakat', button:'bas emi'},
        {id:3, title:'usun',text:'barbol sakat', button:'bas bro'},
        {id:4, title:'nur',text:'doke sakat', button:'bas doke'}
    ]
}
  render() {
        const style = {
            fontSize:'42px;'
        }
    return (

        <div className='container jumbotron'>
            <div className='row '>
                {this.state.data.map((item) => {
                    return <Product2 key={item.id} title={item.title} text={item.text} button={item.button} />
                })}

                {this.state.data.map((item) => {
                    return <Product key={item.id} title={item.title} text={item.text} button={item.button} />
                })}



                {/*<Product  title={'Asan'} text={'oxo sakat'} button={'bas'}/>*/}
                {/*<Product2 title={'usan'} text={'broo sakat '} button={'bas emi'}/>*/}
                {/*<Product title={'usun'} text={'barbol sakat'} button={'bas bro'}/>*/}
                {/*<Product2 title={'nur'} text={'doke sakat'} button={'bas doke'}/>*/}

        </div>



        </div>
    );
  }
}

export default App;
