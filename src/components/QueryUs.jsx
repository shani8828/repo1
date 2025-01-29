import Heading from "./Heading";
import { useState } from "react";
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

const QueryUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone No:", phone);
    console.log("Query:", query);

    alert("Query raised successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setQuery("");
  };
  return (
    <Section id="query-us">
      <div className="container relative z-2 ">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Query Us"
        />
        <div className="min-h-96 flex flex-col md:flex-row lg:flex-row">
          <div className="bg-black/30 border border-n-1/10  flex flex-col justify-center items-start md:w-1/2 lg:w-1/2 rounded-lg p-4 md:p-8 text-lg lg:text-xl">
            <a
              href="https://maps.app.goo.gl/7t9fs2Z4KE2Dqjnb6"
              target="_blank"
              className="mb-4"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#9333ea" }}
              />{" "}
              Department of Industrial and Systems Engineering, IIT Kharagpur -
              721302
            </a>
            <div className="flex flex-col gap-0 mb-4">
              <a href={`tel:+916370708967`} target="_blank">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#9333ea" }} />
                <span className="pl-2">+91 6370708967</span>
              </a>
              <a href={`tel:+917027000295`} target="_blank">
                <span className="pl-7">+91 7027000295</span>
              </a>
            </div>
            <div className="flex flex-col gap-0 mb-4">
              <a href={`mailto:sumanta@optima.org.in`} target="_blank">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#9333ea" }}
                />{" "}
                sumanta@optima.org.in
              </a>
              <a href={`mailto:baranwalsanchay01@gmail.com`} target="_blank">
                <span className="pl-6">baranwalsanchay01@gmail.com</span>
              </a>
            </div>
            <h1 className="mb-3">Get connected with us : </h1>
            <div className="flex flex-row justify-center gap-10 min-w-full items-start text-4xl">
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
          <div className=" bg-black/70 border border-n-1/10 md:w-1/2 lg:w-1/2 rounded-lg p-4 md:p-8">
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col justify-between items-start  text-lg lg:text-xl gap-4"
            >
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full px-3 py-2 outline-none outline outline-1 outline-purple-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 "
                placeholder="Name"
                required
              />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-3 py-2 outline-none outline outline-1 outline-purple-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full px-3 py-2 outline-none outline outline-1 outline-purple-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                placeholder="Phone No"
                required
              />
              <textarea
                className="mt-2 w-full px-3 py-2 outline-none outline outline-1 outline-purple-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Share your queries here..."
                required
              ></textarea>
              <button
                type="submit"
                className="px-3 py-2 w-full outline-none rounded-lg bg-purple-500 transition-all duration-300 ease-in-out transform hover:bg-transparent hover:text-orange-500 hover:shadow-md hover:shadow-orange-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Gradient />
    </Section>
  );
};

export default QueryUs;
