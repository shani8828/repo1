import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import ComingSoon from "./design/ComingSoon";
import { BackgroundCircles } from "./design/Hero";
import { Gradient } from "./design/Services";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { guestLectures } from "../constants/GuestLectures.js";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

const GuestLecture = () => {
	document.title = "Guest Lectures | Optima 2025";
	const text = "Many-More-Stars-Are-On-Their-Way!";
	const chars = text.split("");
	return (
		<Section id="guestLecture">
			<div className="container relative z-2">
				<Heading
					className="md:max-w-md lg:max-w-2xl text-center"
					title="Guest Lectures"
				/>
				<BackgroundCircles />

				{/* <div className='flex justify-center'>
          <ComingSoon link="https://2023.optima.org.in/guest-lectures"/>
        </div> */}

				<div className="grid grid-cols-1 gap-8">
					{guestLectures.map((lecture, index) => (
						<div
							key={index}
							className="md:flex bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
						>
							<div className="relative md:w-1/3">
								<img
									src={lecture.imgUrl}
									alt={lecture.name}
									className="object-cover w-full h-full"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent md:opacity-50"></div>
							</div>

							<div className="p-6 md:w-2/3">
								<h3 className="text-2xl lg:text-4xl font-bold text-white mb-2">
									{lecture.name}
								</h3>
								<p className="text-lg lg:text-2xl text-gray-300 mb-2">
									{lecture.designation}
									{lecture.company && `, ${lecture.company}`}
								</p>
								<p className="text-gray-400 lg:text-lg mb-2">
									Topic of Discussion :{" "}
									<span className="text-purple-300">{lecture.topic}</span>
								</p>
								<p className="text-gray-400 lg:text-lg mb-2">{lecture.desc}</p>
								<div className="flex mb-4 lg:mb-6">
									{lecture.date && (
										<p className="text-lg lg:text-2xl text-gray-300">
											{lecture.date}
										</p>
									)}
									{lecture.mode && lecture.date && (
										<p className="text-lg lg:text-2xl text-gray-300 mx-2">
											,
										</p>
									)}
									{lecture.mode && (
										<p className="text-lg lg:text-2xl text-gray-300">
											{lecture.mode}
										</p>
									)}
								</div>
								<div className="flex flex-wrap gap-4">
									{lecture.linkedin && (
										<button
											onClick={() => window.open(lecture.linkedin, "_blank")}
											className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium flex items-center justify-center transform hover:-translate-y-1 transition-all duration-200"
										>
											Know More
										</button>
									)}
									{lecture.companyUrl && (
										<button
											onClick={() => window.open(lecture.companyUrl, "_blank")}
											className="px-6 py-3 bg-transparent border-2 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white rounded-lg font-medium flex items-center justify-center transform hover:-translate-y-1 transition-all duration-200"
										>
											Visit Company
										</button>
									)}
								</div>
							</div>
						</div>
					))}

					{/* waiting animation */}
					<div className="flex flex-col items-center justify-center mb-20">
						<DotLottieReact
							// src="https://lottie.host/1107f092-3b60-46c8-9844-27bf4944a9e0/6stHI9nDEV.lottie"
							className="w-4/5 md:w-1/2"
							src="https://lottie.host/b3097079-bc6f-47ab-9c27-f39e395e8e83/2ptNd6xx7N.lottie"
							loop
							autoplay
						/>
						<h1 className="z-10 lg:-mt-12 text-md md:text-4xl lg:text-5xl italic font-bold flex">
							{chars.map((char, index) => (
								<motion.span
									key={index}
									initial={{ y: 0 }}
									animate={{ y: [-5, 5, -5] }} // Wave effect
									transition={{
										duration: 1.5,
										repeat: Infinity,
										repeatType: "reverse",
										delay: (chars.length - index) * 0.1, // Creates the wave effect
									}}
									className="inline-block"
								>
									{char}
								</motion.span>
							))}
						</h1>
					</div>
				</div>
			</div>
			<Gradient />
		</Section>
	);
};

export default GuestLecture;
