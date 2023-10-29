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
  
    checked = (done)=>{
        if(!(actionStatus.COMPLETE === done)){
            this.nameRef.current.className = 'complete'
        }else{
            this.nameRef.current.classList.remove('complete')
        }
    }
    
    render(){
        const {id , name  , done} = this.props.item;
        const {handleDelete ,getId ,handleChecked} = this.props;
        return <div className={`item ${this.context.theme}`} key={id}>
                    <input type="checkbox" className="checkbox"onClick={()=>{
                        let checked = this.checkBoxRef.current.checked;
                        handleChecked(id,checked);
                        this.checked(done)
                    }}
                    ref={this.checkBoxRef}
                    />
                    <div ref={this.nameRef}>{name}</div>
                <div>
                    <button className="btn btn-update" onClick={() => getId(id)}><i class="fa-solid fa-pen"></i></button>
                    <button className="btn btn-delete" onClick={() => handleDelete(id)}><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
    }
}

export default Item;