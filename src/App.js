import { Routes,Route } from "react-router-dom";
import { Header } from "./Header";
import { Events } from "./Pages/Events";
import { Plays } from "./Pages/Plays";
import { Sports } from "./Pages/Sports";
import { Activities } from "./Pages/Activities";
import { Streams } from "./Pages/Streams";
import { Footer } from "./Footer/Footer";
import { Movies } from "./Pages/Movies/Movies";
function App() {
  return (
    <>
    <div className="p_bg_light">
      <Header />
      <Routes>
        <Route path="/" element={<Movies  />}></Route>
        <Route path="/streams" element={<Streams/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/plays" element={<Plays/>}></Route>
        <Route path="/sports" element={<Sports/>}></Route>
        <Route path="/activities" element={<Activities/>}></Route>
      </Routes>
      <Footer/>
    </div>
  </>

  )
}
export default App;
