import React from 'react'

class Pagination extends React.Component {

  constructor(props){
  super(props)
  this.state = {
    pageNumbers:[],
  }
}
    
  pageCount = ()=>{
    let {data , itemPerPage } = this.props
    let pageCount = Math.ceil(data.length/itemPerPage);
    let item = [];
    for (let i = 0; i < pageCount; i++)
    {
      item.push(i);
    }
    this.setState({
      pageNumbers: item
    })
    }

  componentDidUpdate(pre){
    if(pre.data !== this.props.data)
      this.pageCount();
  }
 
  // componentDidMount(){
  //     this.pageCount();
  // }
 
  render() {
    return (
      <nav className='border-y-2'>
      <ul className='flex text-cyan-600'>
      {this.state.pageNumbers.map(item => (
        <li key={item} className='page-item p-2 border'>
          <a href='!#' className='page-link'>{item}</a>
        </li>
      ) )}
    </ul>
    </nav>
    );
  } 
   
}

export default Pagination