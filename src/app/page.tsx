import About from "@/components/about/about";
import Contct from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Work from "@/components/project/work";
import React from "react";

function page() {
  return (
    <div className="h-min-screen">
      <Header />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Rye&display=swap" rel="stylesheet"></link>
       <Hero/>
       <About/>
       <Work/>
       <Contct/>
       <Footer/>
    </div>
  );
}

export default page;
