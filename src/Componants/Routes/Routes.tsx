import { Route, Routes } from "react-router-dom";
import MyComp from "../MyComp/Pages/Mycomp";

const RoutesForRender: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/my" element={<MyComp />}></Route>
      </Routes>
    </>
  );
};
export default RoutesForRender;
