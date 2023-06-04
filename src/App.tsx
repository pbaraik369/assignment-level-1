import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";

const ExampleComponent = React.lazy(() => import("./ExampleComponent"));

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ExampleComponent />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
