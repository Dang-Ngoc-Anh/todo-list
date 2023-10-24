import React from "react";
import '../style/header.css'
class Header extends React.Component {
    render(){
        const {handleKeyUp , myRef , data} = this.props
        return <div className="header">
            <h1>Todo</h1>
            <input 
                type="text" 
                placeholder="What need to be done " 
                className="input"
                onKeyUp={handleKeyUp}
                ref={myRef}
                />
        </div>
    }
}
export default Header