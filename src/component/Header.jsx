import React from "react";
import '../style/header.css'
import '../style/theme.css'
import uuid from "react-uuid";
import {actionStatus} from "../Utils/utils.js"
import { ThemeContext } from "./ThemeContext";
class Header extends React.Component {
    static contextType = ThemeContext
    constructor(props){
        super(props);
        this.inputRef = React.createRef(null);
        this.state = {
            value : null
        };
    }
    handleChange = () =>{
        return this.setState({value: this.inputRef.current.value});
    }

    handleKeyUp = (e) => {
        const {updateList} = this.props;
        let result = this.inputRef.current.value.trim();
          if (e.keyCode === 13) {
            if (!result) {
              alert("Bạn chưa nhập ji");
            } else {
                const objInput = {
                    id: uuid(),
                    name: result,
                    loading:actionStatus.ALL,
                    done: actionStatus.ACTIVCE
                }
                let id = localStorage.getItem('id');
                updateList(id,objInput);
                this.setState({value:""})
          }
        };

    }
    showValue = (value)=>{
        this.inputRef.current.value = value ;
        this.setState({value:this.inputRef.current.value});
    }

    render(){
        return <div className={`header ${this.context.theme}`} >
            <h1>Todo</h1>
            <input 
                type="text" 
                placeholder="What need to be done " 
                className="input"
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange}
                value={this.state.value}
                ref={this.inputRef}
                />
        </div>
    }
}
export default Header