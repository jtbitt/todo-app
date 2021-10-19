import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { Routes } from "./Routes";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Routes />
      </Suspense>
    </Router>
  );
}

export default App;
