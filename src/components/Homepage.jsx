import Hero from "./Hero";
import FAQs from "./Faqs";
import HodMessage from "./HodMessage";

const Homepage = () => {
    return (
      <>
         <div><Hero/></div>
         <HodMessage/>
         <div className="relative z-10">
          <FAQs />
         </div>
         
      </>
  );
};
export default Homepage;
