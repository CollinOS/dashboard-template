import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from "./routes/Root";


export const App = () => {

  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col h-[100vh] w-[100vw] justify-center items-center">
  //       <PageLoader />
  //     </div>
  //   );
  // }

  return (
    <Routes>
      <Route path="/" element={<Root/>} />
    </Routes>
  );
};