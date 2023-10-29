import "./App.css";
import React from "react";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import uuid from "react-uuid";
import "./style/header.css";
import { actionStatus } from "./Utils/utils";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: uuid(),
          name: "this is data 1",
          loading: actionStatus.ALL,
          done: actionStatus.ACTIVCE,
        },
        {
          id: uuid(),
          name: "this is data 1",
          loading: actionStatus.ALL,
          done: actionStatus.ACTIVCE,
        },
      ],
    };
    this.headerRef = React.createRef(null);
    this.listRef = React.createRef(null);
  }

  updateList = (id, value) => {
    if (!id) {
      const data = [...this.state.data, value];
      this.setState({ data: data });
    } else {
      const data = [...this.state.data];
      data.map((item) => {
        if (item.id === id) {
          item.name = value.name;
        }
        return item;
      });
      this.setState({ data: data });
      localStorage.clear();
    }
  };

  handleDelete = (id) => {
    let dataCoppy = [...this.state.data];
    dataCoppy = dataCoppy.filter((item) => item.id !== id);
    this.setState({ data: dataCoppy });
  };

  getId = (id) => {
    localStorage.setItem("id", id);
    let value = this.state.data.map((item) => {
      if (item.id === id) return item.name;
    });
    this.headerRef.current.showValue(value);
  };

  handleChecked = (id, checked) => {
    const data = this.state.data;
    data.map((item) => {
      if (item.id === id && checked) {
        item.done = actionStatus.COMPLETE;
      } else if (item.id === id && !checked) item.done = actionStatus.ACTIVCE;
    });
    this.setState({
      data: data,
    });
  };

  handleAll = () => {
    this.listRef.current.changeData([...this.state.data]);
  };

  handleActive = () => {
    const data = [...this.state.data];
    const dataCopy = data.filter(item => item.done === actionStatus.ACTIVCE)
    this.listRef.current.changeData([...dataCopy]);
  };

  handleComplete = () => {
    const data = [...this.state.data];
    const dataCopy = data.filter(item => item.done === actionStatus.COMPLETE)
    this.listRef.current.changeData([...dataCopy]);
  };

  switchAction = (act) => {
    switch (act) {
      case actionStatus.ALL:
        this.handleAll();
        break;
      case actionStatus.ACTIVCE:
        this.handleActive();
        break;
      case actionStatus.COMPLETE:
        this.handleComplete();
        break;
      case actionStatus.CLEAR_COMPLETE:
        this.handleClearComplte();
        break;
      default:
        break;
    }
  };
  handleClearComplte = () => {};
  render() {
    console.log(this.state.data);
    return (
      <div className="container">
        <Header ref={this.headerRef} updateList={this.updateList} />
        <Body
          data={this.state.data}
          ref={this.listRef}
          getId={this.getId}
          handleDelete={this.handleDelete}
          handleChecked={this.handleChecked}
        />
        <Footer switchAction={this.switchAction} />
      </div>
    );
  }
}

export default App;
