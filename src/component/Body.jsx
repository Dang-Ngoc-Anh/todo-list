import React from "react";
import '../style/body.css'
import Item from "./Item";
import Pagination from "./Pagination";
import { MAX_PAGE } from "../Utils/utils";


class Body extends React.Component {
    constructor(props){
        super(props)
        this.inputUpdate = React.createRef();
        this.state= {
            data:this.props.data,
            currentPage: 1,
            itemPerPage: MAX_PAGE,
            dataCurrent: [],
            isLoading: false
        }
        this.bodyRef = React.createRef();

    }

    changeData = (data) =>{
        this.setState({
            data:data
        })
    }
    
    // componentDidMount() {
    //     this.setState({ data: this.props.data });
    // }


    loadMoreData = () => {
        const { data, currentPage, itemPerPage, isLoading } = this.state;
        const indexLastOffset = currentPage * itemPerPage;
        if (indexLastOffset < data.length && !isLoading) {
          const indexFirstOffset = indexLastOffset - itemPerPage;
          const newData = data.slice(indexFirstOffset, indexLastOffset);
          this.setState({ isLoading: true });
          setTimeout(() => {
            this.setState((prevState) => ({
              dataCurrent: [...prevState.dataCurrent, ...newData],
              isLoading: false, // Set isLoading to false after data is loaded
            }));
          }, 2000); // Simulated delay of 1 second (adjust as needed)
        }
      };
      
    componentDidMount() {
        this.bodyRef.current.addEventListener("scroll" , () => {
            const body= this.bodyRef.current
            const height = body.scrollHeight; 
            const top = body.scrollTop; 
            const clientHeight = body.clientHeight; 
            if((top + clientHeight) >= height - 10 && this.state.isLoading ){
              this.loadMoreData();
            }   
           })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({ data: this.props.data });
        }
    }
  
    render()
    {
        const {handleDelete,handleUpdate,handleChecked,handeleUpdate} = this.props
        const newData = this.state.data

        return <>
             <div className="body" ref={this.bodyRef}>
            {
                newData?.map((item) => 
                        <Item 
                            item={item} 
                            handleDelete={handleDelete} 
                            handleUpdate={handleUpdate} 
                            handleChecked={handleChecked} 
                            handeleUpdate={handeleUpdate}
                            key={item.id}
                        />)  
            }
        </div>
        <Pagination
          data={newData}
          itemPerPage={MAX_PAGE}
        />
        </>
    }
}

export default Body