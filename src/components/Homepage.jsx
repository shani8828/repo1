import Hero from "./Hero";
import FAQs from "./Faqs";
import About_home from "./About_Home";

const Homepage = () => {
    return (
      <>
         <div><Hero/></div>
         <About_home/>
         <div className="relative z-10">
          <FAQs />
         </div>
         
      </>
  );
};
export default Homepage;
