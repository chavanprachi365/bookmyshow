import { Routes,Route } from "react-router-dom";
import { Header } from "./Header";
import { Events } from "./Pages/Events/Events";
import { Plays } from "./Pages/Plays/Plays";
import { Sports } from "./Pages/Sports/Sports";
import { Activities } from "./Pages/Activities/Activities";
import { Streams } from "./Pages/Streams/Streams";
import { Footer } from "./Footer/Footer";
import { Movies } from "./Pages/Movies/Movies";
import { Shows } from "./Pages/Shows/Shows";
import { Corporates } from "./Pages/Corporates/Corporates";
import { Details } from "./Pages/Details/Details";



function App() {
  return (
    <>
    <div className="p_bg_light">
      <Header />
      <Routes>
        <Route path="/" element={<Movies  />}></Route>
        <Route path="/streams" element={<Streams />}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/plays" element={<Plays/>}></Route>
        <Route path="/sports" element={<Sports/>}></Route>
        <Route path="/activities" element={<Activities/>}></Route>
        <Route path="/list-your-show" element={<Shows/>}></Route>
        <Route path="/corporates" element={<Corporates/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
      </Routes>
      <Footer/>
    </div>
  </>

  )
}
export default App;
