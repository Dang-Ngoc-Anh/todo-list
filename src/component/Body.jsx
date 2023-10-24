import React from "react";
import '../style/body.css'
import Footer from "./Footer";
class Body extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data : ""
        }
        this.inputUpdate = React.createRef()
    }

    handleChange = (e)=>{
        const input = this.inputUpdate.current.value.trim()
        this.setState({
            data:e.currentTarget.value
        })
        console.log(this.state.data);
    }

    checked = (e) => {
        return e.currentTarget.checked;
    }
    render()
    {
        const {data , handleDelete,handleUpdate,handleChecked} = this.props
        const result = this.state.data
        return <div className="body" >
            {
             data.map((i) => {
                return <div className="item" key={i.id}>
                        <input type="checkbox" className="checkbox" name="id" onClick={(e)=> handleChecked(i.id , this.checked(e))} key={i.id}/>
                        <input type="text" className={`output ${i.done ? 'underline' : ''}`} defaultValue={i.name}  onChange={this.handleChange} />
                    <div>
                    <button className="btn btn-update" ><i class="fa-solid fa-pen" onClick={()=> handleUpdate(i.id ,result )} key={i.id} ref={this.inputUpdate}></i></button>
                    <button className="btn btn-delete" onClick={()=> handleDelete(i.id)}><i class="fa-solid fa-trash-can"></i></button>
                </div>
                </div>
             })  
            }
        </div>
    }
}

export default Body