import Heading from "./Heading";
import Section from "./Section";
import { Gradient } from "./design/Services.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
("use client");

const QueryUs = () => {
  return (
    <Section id="query-us">
      <div className="container relative z-2 ">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Query Us"
        />
        <div className="min-h-96 flex flex-col md:flex-row lg:flex-row">
          <div className="gap-4 bg-black/30 border border-n-1/10  flex flex-col justify-between items-start md:w-1/2 lg:w-1/2 rounded-lg md:rounded-l-lg lg:rounded-l-lg p-4 text-xl lg:text-2xl">
            <h1 className="text-2xl lg:text-3xl font-semibold underline">
              Contact Us
            </h1>
            <a href="https://maps.app.goo.gl/7t9fs2Z4KE2Dqjnb6" target="_blank">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#9333ea" }}
              />{" "}
              Department of Industrial and Systems Engineering, IIT Kharagpur -
              721302
            </a>
            <a href={`tel:+916370708967`} target="_blank">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#9333ea" }} />
              <span className="pl-2">+91 6370708967</span>
            </a>
            <a href={`mailto:sumanta@optima.org.in`} target="_blank">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#9333ea" }} />{" "}
              sumanta@optima.org.in
            </a>
            <h1>Get connected with us : </h1>
            <div className="flex flex-row justify-center gap-10 min-w-full items-center text-4xl">
              <a
                className=" hover:text-purple-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:shadow-white"
                href="https://www.facebook.com/optima.iitkharagpur"
                target="_blank"
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a
                className=" hover:text-purple-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:shadow-white"
                href="https://www.instagram.com/optima.iitkgp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a
                className=" hover:text-purple-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:shadow-white"
                href="https://www.linkedin.com/company/optima-iitkgp/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="gap-4 bg-black/70 border border-n-1/10  flex flex-col justify-between items-start md:w-1/2 lg:w-1/2 rounded-lg md:rounded-l-lg lg:rounded-l-lg p-4 text-xl lg:text-2xl">
            <h1 className="text-2xl lg:text-3xl font-semibold underline">
              Query Us
            </h1>
            <input
              className="p-3 w-full outline-none outline outline-1 outline-purple-500 rounded-lg"
              type="text"
              name=""
              id="name"
              placeholder="Name"
            />
            <input
              className="p-3 w-full outline-none outline outline-1 outline-purple-500 rounded-lg"
              type="email"
              name=""
              id="email"
              placeholder="Email"
            />
            <input
              className="p-3 w-full outline-none outline outline-1 outline-purple-500 rounded-lg"
              type="tel"
              name=""
              id=""
              placeholder="Phone No"
            />
            <input
              className="min-h-28 p-3 w-full outline-none outline outline-1 outline-purple-500 rounded-lg text-start"
              type="textarea"
              name=""
              id="query"
              placeholder="Share your queries here..."
            />
            <button className="p-3 w-full outline-none  rounded-lg hover:text-purple-500 transition-all duration-300 ease-in-out transform hover:shadow-md hover:shadow-purple-500">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Gradient />
    </Section>
  );
};

export default QueryUs;
