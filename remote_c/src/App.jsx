import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import withReducer from "host/withReducer";
import footer, { toggleFooter } from "./footerSlice";

function App() {
  const showFooter = useSelector((state) => state.footer.showFooter);
  const dispatch = useDispatch();

  return (
    <>
      {showFooter && <div>Footer Coming from Remote C</div>}
      <button onClick={() => dispatch(toggleFooter())}>Toggle Footer</button>
    </>
  );
}

export default withReducer("footer", footer)(App);
