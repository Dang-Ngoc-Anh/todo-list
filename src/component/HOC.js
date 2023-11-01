import React from "react";
import Panigitaion from "./Pagination";

function HOC(WrappedComponent) {
  return class PanigitaionHOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
        data: null,
      };
    }

    showModal = (data) => {
      this.setState({
        show: true,
        data: data,
      });
    };

    closeModal = (data) => {
      this.setState({
        show: false,
        data: null,
      });
    };
    render() {
      const { show, data } = this.state;
      return (
        <React.Fragment>
          <WrappedComponent showModal={this.showModal}>
            {show ? (
              <Panigitaion data={data} closeModal={this.closeModal} />
            ) : null}
          </WrappedComponent>
        </React.Fragment>
      );
    }
  };
}

export default HOC;
