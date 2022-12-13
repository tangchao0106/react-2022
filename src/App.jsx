import React from "react";
import routes from "./router";
import { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Icon, Cell, Button } from "zarm";
import TabBar from "./components/TabBar";
import { ConfigProvider } from "zarm";
const App = () => {
  return (
    <ConfigProvider>
      <Fragment>
        <Routes>
          {routes.map((item) => {
            return <Route exact key={item.path} path={item.path} element={<item.component />}></Route>;
          })}
        </Routes>
        <TabBar></TabBar>
      </Fragment>
    </ConfigProvider>
  );
};
export default App;
