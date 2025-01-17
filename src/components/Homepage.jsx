import Hero from "./Hero";
import FAQs from "./Faqs";

const Homepage = () => {
    return (
      <>
         <div><Hero/></div>
         
         <div className="relative z-10">
          <FAQs />
         </div>
         
      </>
  );
};
export default Homepage;
