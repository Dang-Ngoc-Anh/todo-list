import "./App.css";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <form className="container" onSubmit={e=> e.preventDefault()}>
      <Header />
    </form>
  );
}

export default App;
