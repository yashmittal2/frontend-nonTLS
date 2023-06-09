import Form from "./Form";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataPage from "./DataPage";

const App = () => {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/data" element={<DataPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
