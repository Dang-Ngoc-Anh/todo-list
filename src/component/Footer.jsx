import React from "react";
import "../style/footer.css"
class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index : -1
        }
    }
 
    render(){
       const { data,
        handleAll,
        handleActive,
        handleComplete,
        handleClearComplte  } =  this.props
        return <div className="footer">
            <div className="footer-left">{data.length} item</div>
            <div className="footer-center">
                <button className="btn btn-all"  onClick={handleAll}>All</button>
                <button className="btn btn-active" onClick={handleActive}>Active</button>
                <button className="btn btn-complte" onClick={handleComplete}>Complte</button>
            </div>
            <div className="footer-right">
                <button className="btn" onClick={handleClearComplte}>Clear complte</button>
            </div>
        </div>
    }
}

export default Footer