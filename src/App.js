import React, {Component} from 'react';
import Product from "./product";
import Product2 from "./Product2";

class App extends Component {
    state = {
    data: [
        {id:1, title:'Asan',text:'oxo sakat', button:'bas', price:'150', color:true , rebate:100},
        {id:2, title:'usan',text:'broo sakat', button:'bas emi' , price:'200', color:false , rebate:200},
        {id:3, title:'usun',text:'barbol sakat', button:'bas bro',price:'500', color:false ,rebate:100},
        {id:4, title:'nur',text:'doke sakat', button:'bas doke' , price:'400', color:false ,rebate:200}
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
                    return <Product2 key={item.id} {...item} />
                })}






        </div>



        </div>
    );
  }
}

export default App;
