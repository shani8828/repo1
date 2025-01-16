import Hero from "./Hero";
import FAQs from "./Faqs";

const Homepage = () => {
    return (
      <>
         <Hero/>
         <div className="relative z-50">
          <FAQs />
         </div>
         
      </>
  );
};
export default Homepage;
