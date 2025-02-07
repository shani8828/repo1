import { competitions } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";
import unstopIcon from "../assets/unstop-icon.png";
import ComingSoon from "./design/ComingSoon";
import { BackgroundCircles } from "./design/Hero";
import { Gradient } from "./design/Services";
import { grid } from "../assets";

const Competitions = () => {
	document.title = "Competitions | Optima 2025";
	return (
		<Section id="competitions">
			<div className="container relative z-2">
				{/* Section Heading */}
				<Heading
					className="md:max-w-md lg:max-w-2xl text-center"
					title="Competitions"
				/>
				<BackgroundCircles />

				{/* <div className="flex justify-center">
					<ComingSoon link="https://2023.optima.org.in/competitions" />
				</div> */}

				<div className="flex flex-wrap gap-10 mb-10 items-center justify-center">
					{competitions.map((item) => (
						<div
							className="block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
							style={{
								backgroundImage: `url('/svg/card-1.svg')`,
							}}
							key={item.id}
						>
							<div className="relative z-2 flex flex-col min-h-[28rem] min-w-[18rem] md:min-w-[21rem] p-[2rem]">
								<div className="flex justify-center mb-2">
									{item.photoUrl ? (
										<img
											src={item.photoUrl}
											alt={`${item.title} Photo`}
											className="rounded-lg text-white opacity-80 filter brightness-110"
											style={{ maxWidth: "350px", maxHeight: "180px" }}
										/>
									) : (
										<img
											src={'/assets/competitions-card-images/hacktank-image.png'}
											alt={`${item.title} Photo`}
											className="rounded-lg opacity-80 text-white filter brightness-110"
											style={{ maxWidth: "350px", maxHeight: "180px" }}
										/>
									)}
								</div>

								<h5 className="h4 text-center font-semibold">
									{item.title}
								</h5>

								{item.subTitle && (
									<h6 className="text-sm text-center mb-2 h2">
										{item.subTitle}
									</h6>
								)}

								{item.text && (
									<p className="body-2 mb-2 text-n-3 text-center">
										{item.text}
									</p>
								)}

								<div className="flex items-center mt-auto gap-2 md:gap-3 justify-center">
									{item.driveLink && (
										<button
											className="cursor-pointer hover:scale-[105%] max-w-[50%] border border-n-2 rounded-md p-1.5 md:p-2 flex items-center transition transition:translate duration-200"
											onClick={() =>
												window.open(
													item.driveLink,
													"_blank",
													"noopener,noreferrer"
												)
											}
										>
											<p className="ml-auto font-code text-xs font-bold text-n-2 uppercase cursor-pointer">
												Problem Statement
											</p>
										</button>
									)}

									{item.unstopLink && (
										// <a
										// 	href={item.unstopLink}
										// 	target="_blank"
										// 	rel="noopener noreferrer"
										// 	className="cursor-pointer hover:scale-[108%] transition transition:translate duration-200"
										// >
										// 	<img
										// 		src={unstopIcon}
										// 		alt="unstopIcon"
										// 		className="w-8 md:w-11"
										// 	/>
										// </a>
										<button
											className="cursor-pointer hover:scale-[105%] max-w-[50%] border border-n-2 rounded-md p-1.5 md:p-2 flex items-center transition transition:translate duration-200"
											onClick={() =>
												window.open(
													item.unstopLink,
													"_blank",
													"noopener,noreferrer"
												)
											}
										>
											<p className="ml-auto font-code text-xs font-bold text-n-2 uppercase cursor-pointer">
												Details/ Register
											</p>
										</button>
									)}

									{/* {item.whatsAppLink && (
										<a
											href={item.whatsAppLink}
											target="_blank"
											rel="noopener noreferrer"
											className="cursor-pointer hover:scale-[110%] transition transition:translate duration-200"
										>
											<FaWhatsapp
												className="w-8 h-8 md:w-12 md:h-11"
												color="#25D366"
											/>
										</a>
									)} */}
								</div>
							</div>

							{/* {item.light && <GradientLight />} */}

							<div
								className="absolute inset-0.5 opacity-50 bg-gradient-to-b from-n-4 to-black"
								style={{ clipPath: "url(#benefits)" }}
							>
								<div className="absolute inset-0 transition-opacity">
									<img
										src={grid}
										alt={item.title}
										className="w-full h-full object-cover"
									/>
								</div>
							</div>

							<ClipPath />
						</div>
					))}
				</div>
			</div>
			<Gradient />
		</Section>
	);
};

export default Competitions;
