import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add/Add";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import VideosList from "./components/VideosList";
import VideosContextProvider from "./contexts/videosContext";

function App() {
  return (
    <VideosContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<VideosList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <h1>Footer</h1>
      </BrowserRouter>
    </VideosContextProvider>
  );
}

export default App;
