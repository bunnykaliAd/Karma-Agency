import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import About from '../components/About';
import Feature from '../components/Feature';
import Works from '../components/Works';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import Chat from '../components/Chat';

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
   <Cards />
   <About />
   <Feature />
   <Works />
   <Pricing />
   <Chat />
   <Footer />
    </>
  )
}

export default Home
