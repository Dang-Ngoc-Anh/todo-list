import "./App.css";
import React from "react";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import uuid from "react-uuid";
import "./style/header.css";
import { MAX_PAGE, actionStatus } from "./Utils/utils";
import { ThemeContext } from "./component/ThemeContext";
class App extends React.Component {
  static contextType = ThemeContext;
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

  handeleUpdate = (id, value) => {
    localStorage.setItem("id", id);
    this.headerRef.current.showValue(value);
  };

  handleChecked = (id, checked) => {
    const data = this.state.data;
    data.map((item) => {
      if (item.id === id) {
        checked
          ? (item.done = actionStatus.COMPLETE)
          : (item.done = actionStatus.ACTIVCE);
      }
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
    const dataCopy = data.filter((item) => item.done === actionStatus.ACTIVCE);
    this.listRef.current.changeData([...dataCopy]);
  };

  handleComplete = () => {
    const data = [...this.state.data];
    const dataCopy = data.filter((item) => item.done === actionStatus.COMPLETE);
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

  handleChangeTheme = () => {};
 
  render() {
    return (
      <div className={`container ${this.context.theme} `}>
        <button className="btn-toggle " onClick={this.context.changeTheme}>
          Togle
        </button>
        <Header ref={this.headerRef} updateList={this.updateList} />
        <Body
          data={this.state.data}
          ref={this.listRef}
          handeleUpdate={this.handeleUpdate}
          handleDelete={this.handleDelete}
          handleChecked={this.handleChecked}
        />
        <Footer switchAction={this.switchAction} />
      </div>
    );
  }
}

export default App;
