import "./App.css";
import React from "react";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import uuid from "react-uuid";
import "./style/header.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: uuid(),
          name: "this is data 1",
          loading: false,
          done: false,
        },
        {
          id: uuid(),
          name: "this is data 1",
          loading: false,
          done: false,
        },
      ],
    };
    this.myRef = React.createRef();
  }

  handleKeyUp = (e) => {
    const input = this.myRef.current;
    let result = input.value.trim();
    if (e.keyCode === 13) {
      if (!result) {
        alert("Bạn chưa nhập ji");
      } else {
        const dataCoppy = [
          ...this.state.data,
          {
            id: uuid(),
            name: result,
            loading: false,
            done: false,
          },
        ];

        this.setState({
          data: dataCoppy,
        });
        input.value = "";
      }
    }
  };

  handleDelete = (id) => {
    let dataCoppy = [...this.state.data];
    dataCoppy = dataCoppy.filter((item) => item.id !== id);
    this.setState({ data: dataCoppy });
  };

  handleUpdate = (id, value) => {
    try {
      let dataCopy = [...this.state.data];
      dataCopy.forEach((item) => {
        if (item.id === id) {
          item.name = value;
        }
        return item;
      });
      this.setState({
        data: dataCopy,
      });
      console.log(this.state.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChecked = (id, checked) => {
    const data = this.state.data;
    data.map((item) => {
      if (item.id === id && checked) {
        item.done = true;
      } else item.done = false;
      return item;
    });
    this.setState({
      data: data,
    });
    console.log(this.state.data);
  };

  handleAll = () => {};

  handleActive = (index) => {
    try {
    } catch (error) {
      alert("Bạn chưa chọn");
    }
  };

  handleComplete = (index) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  handleClearComplte = () => {};
  render() {
    return (
      <div className="container">
        <Header handleKeyUp={this.handleKeyUp} myRef={this.myRef} />
        <Body
          data={this.state.data}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          handleChecked={this.handleChecked}
        />
        <Footer
          data={this.state.data}
          handleAll={this.handleAll}
          handleActive={this.handleActive}
          handleComplete={this.handleComplete}
          handleClearComplte={this.handleClearComplte}
        />
      </div>
    );
  }
}

export default App;
