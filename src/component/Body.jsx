import React from "react";
import '../style/body.css'
import Footer from "./Footer";
class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:
            [
                {name:"This is data 1", loading: false, done:false},
                {name:"This is data 2", loading: false, done:false} ,        
            ],
            selectedIdx: []
        }

        this.handleIndex = this.handleIndex.bind(this);
        this.handleClearComplte = this.handleClearComplte.bind(this);
    }  
    updateData(){
        const newData = this.props.data;
        this.setState(prevState => ({
            data: [...prevState.data, newData]
        }));
    }
     componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.updateData();
        }
      }
  
      handleDelete(index){
           let dataCoppy = [...this.state.data];
           dataCoppy.splice(index , 1);
           this.setState({data:dataCoppy})
    }
    handleUpdate(index , value ){
            let dataCopy = [...this.state.data];
            dataCopy[index].name =  value;
            this.setState({
                data: dataCopy
            })
        }

    getValue = (e)=>{
        const event = e.currentTarget;
    }

    handleAll = () =>{
        this.setState((prevState) =>({
            data: [...prevState.data]
        }))
    }

    handleActive = (index) =>{
       try {
            let dataCoppy = [...this.state.data];
            dataCoppy[index].done = false;
            this.setState({
                data : dataCoppy
            })
            this.state.data.map(item =>{
                if(item.loading === false){
                    return <Body data={item}/>
                }
            })

            console.log(this.state.data);
       } catch (error) {
            alert("Bạn chưa chọn") 
       }
    }

    handleComplete = (index)=>{
      try {
        console.log(index);
            let dataCopp = [...this.state.data];
            dataCopp[index].done = true;
            this.setState({
                data : dataCopp
            })
            console.log(this.state.data);
      } catch (error) {
            console.log(error);
      }
    }

    handleClearComplte = ()=>{
        let dataCopp = [...this.state.data];
        dataCopp.map(item =>{
            if(item.done) item.done = false
            else if(item.loading) item.loading = false
        })
        this.setState({
            data : dataCopp
        })
        console.log(dataCopp);
    }
    handleIndex(e){
        const checked = e.currentTarget.checked;
        let index = this.state.selectedIdx;
        if(checked){
            index = this.state.selectedIdx;
            let indexCoppy = [...index , e.currentTarget.value]
            this.setState({
                selectedIdx: indexCoppy 
            });
        }else{
            index = this.state.selectedIdx;
            let indexCoppy = index.filter(item => item !== e.currentTarget.value);

            this.setState({selectedIdx: indexCoppy})

            console.log(this.state.selectedIdx);
            this.state.selectedIdx.map(item => {
                let dataCoppy = [...this.state.data];
                dataCoppy[item].done = false;
                this.setState({
                    data: dataCoppy
                })
                console.log(this.state.data);
            })
        }
    }
    render()
    {
        const {data , selectedIdx} = this.state;
        return <div className="body" >
            {
             data.map((i, index) => {
                return <div className="item" key={index}>
                    <input type="checkbox" className="checkbox" name="id" value={index} onClick={this.handleIndex} />
                    <input type="text" className="output" value={i.name} onChange={this.getValue}/>
                <div>
                    <button className="btn btn-update" ><i class="fa-solid fa-pen" onClick={this.handleUpdate}></i></button>
                    <button className="btn btn-delete" onClick={()=> this.handleDelete(index)}><i class="fa-solid fa-trash-can"></i></button>
                </div>
                </div>
             })  
            }
            <Footer 
                data={data} 
                selectedIdx={selectedIdx}
                handleAll={this.handleAll}
                handleComplete={this.handleComplete}
                handleActive={this.handleActive}
                handleClearComplte={this.handleClearComplte}
             />
        </div>
    }
}

export default Body