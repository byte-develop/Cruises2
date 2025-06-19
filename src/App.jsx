import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import TopLine from "./Components/TopLine";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FindACruise from "./Pages/FindACruise";
import CruiseDetails from "./Pages/CruiseDetails";
import Ships from "./Pages/Ships";
import Destinations from "./Pages/Destinations";
import LastMinute from "./Pages/LastMinute";
import Rooms from "./Pages/Rooms";
import Plans from "./Pages/Plans";
import Pay from "./Pages/Pay";
import Weekend from "./Pages/Weekend";
import Deals from "./Pages/Deals";
import Faq from "./Pages/Faq";
import Docs from "./Pages/FAQs/docs";
import Board from "./Pages/FAQs/board";
import Pack from "./Pages/FAQs/Pack";
import Check from "./Pages/FAQs/Check";
import Trans from "./Pages/FAQs/Trans";
import Internet from "./Pages/FAQs/Internet";
import Payment from "./Pages/FAQs/Payment";
import Lugg from "./Pages/FAQs/Lugg";
import Term from "./Pages/FAQs/Term";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <TopLine />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-a-cruise" element={<FindACruise />} />
          <Route path="/cruise/:id" element={<CruiseDetails />} />
          <Route path="/ships" element={<Ships />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/last-minute-cruises" element={<LastMinute />} />
          <Route path="/cruise-rooms" element={<Rooms />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/weekend" element={<Weekend />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/faq" element={<Faq />} />

          <Route path="/faq/boarding-requirements" element={<Board />} />
          <Route path="/faq/travel-documents" element={<Docs />} />
          <Route path="/faq/beverage-package" element={<Pack />} />
          <Route path="/faq/check-in" element={<Check />} />
          <Route
            path="/faq/transportation-embarkation-pier"
            element={<Trans />}
          />
          <Route
            path="/faq/onboard-internet-device-service"
            element={<Internet />}
          />
          <Route
            path="/reservation-payment-cancellation-policy"
            element={<Payment />}
          />
          <Route path="/packing-luggage-tags" element={<Lugg />} />
          <Route path="/directions-cruise-port" element={<Term />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
