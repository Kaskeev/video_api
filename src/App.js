import VideosList from "./components/VideosList";
import VideosContextProvider from "./contexts/videosContext";

function App() {
  return (
    <VideosContextProvider>
      <VideosList />
    </VideosContextProvider>
  );
}

export default App;
