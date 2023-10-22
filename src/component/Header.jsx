import React from "react";
import '../style/header.css'
import Body from "./Body";
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{
                name:"",
                loading:false,
                done:false
            }
        }
            
        this.handleKeyUp = this.handleKeyUp.bind(this);
        }
   

     handleKeyUp = (e)=>{
        let result = e.currentTarget.value.trim();
        if(e.keyCode === 13)
            {
                if(!result) {alert("Bạn chưa nhập ji");}
                else {
                    this.setState({
                        data: {
                            name:result,
                            loading:false,
                            done:false
                        }
                    })
                }
            }
     }
    render(){
        const {data} = this.state
        return <div className="header">
            <h1>Todo</h1>
            <input 
                type="text" 
                placeholder="What need to be done " 
                className="input"
                name="input"
                onKeyUp={this.handleKeyUp}
                />
                <Body data={data}/>
        </div>
    }
}
export default Header