import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { HomePage, MarketPage } from "./pages"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyles.css"; 
function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/market" element={<MarketPage />}/>
      </Routes>
   </Router>
  )
}

export default App
