import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./common/NotFound/NotFound";
import FirstPage from "./page/FirstPage";
import Home from "./page/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/:name" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
