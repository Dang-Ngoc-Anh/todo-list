import React from "react"
import '../style/item.css'
import { actionStatus } from "../Utils/utils";
import { ThemeContext } from "./ThemeContext";
class Item extends React.Component {
    static contextType = ThemeContext

    constructor(props){
        super(props);
        this.nameRef = React.createRef(undefined);
        this.checkBoxRef = React.createRef(undefined);
    }
  
    render(){
        const {id , name  , done} = this.props.item;
        const {handleDelete ,handeleUpdate ,handleChecked} = this.props;
        return <div className={`item ${this.context.theme}`} key={id}>
                    <input type="checkbox" className="checkbox"onClick={()=>{
                        let checked = this.checkBoxRef.current.checked;
                        handleChecked(id,checked);
                    }}
                    ref={this.checkBoxRef}
                    />
                    <div className={done === actionStatus.COMPLETE ? 'complete' : ''} ref={this.nameRef}>{name}</div>
                <div>
                    <button className="btn btn-update px-2" onClick={() => handeleUpdate(id,name)}><i class="fa-solid fa-pen"></i></button>
                    <button className="btn btn-delete px-2" onClick={() => handleDelete(id)}><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
    }
}

export default Item;