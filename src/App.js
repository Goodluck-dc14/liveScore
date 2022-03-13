// import React from "react";
// import MainBuild from "./SuperSport/MainBuild";
// import PhoneBook from "./PhoneBook/PhoneBook";
// import Header from "./PhoneBook/Header";
// import Details from "./PhoneBook/Details";
// import Update from "./PhoneBook/Update";
// import EnterContact from "./PhoneBook/EnterContact";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import styled from "styled-components";

// const App = () => {
//   return (
//     <div>
//       <MainBuild />
//     </div>
//     // <BrowserRouter>
//     //   <Switch>
//     //     <Route exact path="/" component={PhoneBook} />
//     //     <Route exact path="/enter" component={EnterContact} />
//     //     <Route exact path="/details/:id" component={Details} />
//     //     <Route exact path="/edit/:id" component={Update} />
//     //   </Switch>
//     //   {/* <Wrapper> */}
//     //   <Header />
//     //   {/* </Wrapper> */}
//     // </BrowserRouter>
//   );
// };

// export default App;

// // const Wrapper = styled.div`
// //   position: absolute;
// //   bottom: -45px;
// //   left: 0;
// //   width: 100%;
// // `;
// // const Container = styled.div`
// //   position: relative;
// // `;

import React from "react";
import HeaderBuild from "./Components/Header/HeaderBuild";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateScreen from "./Components/Main/CreateScreen";
import HomeScreen from "./Components/Main/HomeScreen";
import Register from "./Components/Main/Register";
import PrivateRoute from "./Components/Main/PrivateRoute";
// import antd from "antd/dist/antd.css";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderBuild />
      <Switch>
        <PrivateRoute exact path="/" component={HomeScreen} />
        <PrivateRoute exact path="/create" component={CreateScreen} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
