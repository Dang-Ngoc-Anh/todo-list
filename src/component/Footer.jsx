import React from "react";
import "../style/footer.css"
import { actionStatus } from "../Utils/utils";
class Footer extends React.Component {

    render(){
       const {switchAction  } =  this.props
        return <div className="footer">
            <div className="footer-left"></div>
            <div className="footer-center">
                <button className="btn btn-all"  onClick={()=>switchAction(actionStatus.ALL)}>All</button>
                <button className="btn btn-active" onClick={()=>switchAction(actionStatus.ACTIVCE)}>Active</button>
                <button className="btn btn-complte" onClick={()=>switchAction(actionStatus.COMPLETE)}>Complte</button>
            </div>
            <div className="footer-right">
                <button className="btn" onClick={switchAction(actionStatus.CLEAR_COMPLETE)}>Clear complte</button>
            </div>
        </div>
    }
}

export default Footer