import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./common/Loader";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import IdCheck from "./Pages/IdCheck";

export const AppRoutes: React.FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id/" element={<IdCheck />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};
