import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import LandingImg from "./components/LandingImg/LandingImg";
import Card2 from "./components/Card2/Card2";
import About from "./components/About/About";
import VideoTour from "./components/VideoTour/VideoTour";
import Apply from "./components/Apply/Apply";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import NewsAndUpdate from "./components/NewsAndUpdate/News";
import DonationAndContact from "./components/Donation&Contact/DonationAndContact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <LandingImg />
      <Card2 />
      <About />
      <Apply />
      <UpcomingEvents />
      <NewsAndUpdate />
      <VideoTour />
      <DonationAndContact />
      <Footer />
    </div>
  );
}

export default App;
