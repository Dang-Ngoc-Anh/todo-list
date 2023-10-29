import React from "react";
import '../style/body.css'
import Item from "./Item";
import { ThemeContext } from "./ThemeContext";
class Body extends React.Component {
    constructor(props){
        super(props)
        this.inputUpdate = React.createRef();
        this.state= {
            data:this.props.data
        }
    }

    changeData = (data) =>{
        this.setState({
            data:data
        })
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({ data: this.props.data });
        }
    }
    render()
    {
        const {handleDelete,handleUpdate,handleChecked,getId} = this.props
        return <div className="body">
            {
                this.state.data?.map((item) => <Item item={item} handleDelete={handleDelete} handleUpdate={handleUpdate} handleChecked={handleChecked} getId={getId}/>)  
            }
        </div>
    }
}

export default Body