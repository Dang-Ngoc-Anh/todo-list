import React from "react";
import "../style/footer.css"
class Footer extends React.Component {
    constructor(props){
        super(props);
        this.handleComplete = this.handleComplete.bind(this);
        this.state = {
            index : [this.getId()]
        }

        
    }

    getId(){
        console.log( this.props.selectedIdx);
        return this.props.selectedIdx; 
    }
    // refreshTrigger(){
    //    let index = this.state.index;
    // }
    getLength(){
        return this.props.data.length;
    }

    handleAll = ()=> {
        const all= this.props.handleAll;
        all();
    }

    handleActive = ()=>{
        const active = this.props.handleActive;
        let index = this.getId();
        index.map(item => active(item))
    }
    handleComplete = ()=>{
        const complete = this.props.handleComplete;
        let index = this.getId();
        index.map(item => complete(item))
    }
    handleClearComplte = ()=>{
        const clearComplete = this.props.handleClearComplte;
        clearComplete();
    }
    render(){
        return <div className="footer">
            <div className="footer-left">{this.getLength()} item</div>
            <div className="footer-center">
                <button className="btn btn-all"  onClick={this.handleAll}>All</button>
                <button className="btn btn-active" onClick={this.handleActive}>Active</button>
                <button className="btn btn-complte" onClick={this.handleComplete}>Complte</button>
            </div>
            <div className="footer-right">
                <button className="btn" onClick={this.handleClearComplte}>Clear complte</button>
            </div>
        </div>
    }
}

export default Footer