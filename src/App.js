import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewPost from "./NewPost";
import Posts from "./Posts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Posts />} />
          <Route exact path="/newpost" element={<NewPost />} />
          <Route exact path="/newpost/middle" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
