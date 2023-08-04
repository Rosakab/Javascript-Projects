import CountdownTimer from "../components/CountdownTimer";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import Resort from "../components/Resort";
import TeamMember from "../components/TeamMember";
// import Suggestions from "../components/Suggestions";
import TripPlans from "../components/TripPlans";



const Home = () => {
    return ( 
        <>
         <Navbar/>
        <Hero/>
        <CountdownTimer  />
        <TripPlans/>
        <Resort/>
        <ImageSlider/>
        <TeamMember/>
        <Footer/>
        </>
    )
    }
export default Home;

