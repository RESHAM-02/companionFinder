// src/pages/HomePage.jsx
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import HowItWorks from '../components/HowItWorks';
import '../styles/Hero.css';
import '../styles/PopularDestinations.css';

const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <HowItWorks />
    </>
  );
};

export default HomePage;
