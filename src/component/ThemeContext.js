import React from "react";
import { THEME } from "../Utils/utils";
const ThemeContext = React.createContext();
class GlobalStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEME.light,
    };
  }

  changeTheme = () => {
    return this.setState({
      theme: this.state.theme === THEME.light ? THEME.dark : THEME.light,
    });
  };

  render() {
    const { changeTheme } = this;
    const { theme } = this.state;
    const { children } = this.props;
    return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContext, GlobalStyle };
