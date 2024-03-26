// import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Componants/NavigationBar/Pages/NavigationBar";
import RoutesForRender from "./Componants/Routes/Routes";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <RoutesForRender />
    </>
  );
}

export default App;
