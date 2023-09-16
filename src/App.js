import { BrowserRouter } from "react-router-dom";
import Views from "./Views";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    </>
  );
}

export default App;
