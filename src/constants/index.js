import {
	benefitIcon1,
	benefitIcon2,
	benefitIcon3,
	benefitIcon4,
	benefitImage2,
	chromecast,
	disc02,
	discord,
	discordBlack,
	facebook,
	figma,
	file02,
	framer,
	homeSmile,
	instagram,
	notification2,
	notification3,
	notification4,
	notion,
	photoshop,
	plusSquare,
	protopie,
	raindrop,
	recording01,
	recording03,
	roadmap1,
	roadmap2,
	roadmap3,
	roadmap4,
	searchMd,
	slack,
	sliders04,
	telegram,
	twitter,
	yourlogo,
	// About_Home
	Degrees,
	CodeLand,
	FinanceFantasia,
	Innovate,
	NetworSify,
	NLP,
	Operheimer,
	OptiSim,
	unstop,
} from "../assets";

export const navigation = [
	{
		id: "0",
		title: "About",
		url: "/about",
	},
	{
		id: "1",
		title: "Competitions",
		url: "/competitions",
	},
	{
		id: "2",
		title: "Guest Lectures",
		url: "/guest-lectures",
	},
	{
		id: "3",
		title: "Workshops",
		url: "/workshops",
	},
	{
		id: "4",
		title: "Gallery",
		url: "/gallery",
	},
	{
		id: "5",
		title: "Sponsors",
		url: "/sponsors",
	},
	{
		id: "6",
		title: "Team",
		url: "/team",
	},
	// {
	//   id: "7",
	//   title: "New account",
	//   url: "signup",
	//   onlyMobile: true,
	// },
	// {
	//   id: "8",
	//   title: "Sign in",
	//   url: "login",
	//   onlyMobile: true,
	// },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
	"Photo generating",
	"Photo enhance",
	"Seamless Integration",
];

export const brainwaveServicesIcons = [
	recording03,
	recording01,
	disc02,
	chromecast,
	sliders04,
];

export const collabText =
	"With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
	{
		id: "0",
		title: "Data Analytics",
	},
	{
		id: "1",
		title: "Operations",
	},
	{
		id: "2",
		title: "Supply Chain",
	},
];

export const collabApps = [
	{
		id: "0",
		title: "Degrees",
		icon: Degrees,
		width: 26,
		height: 36,
	},
	{
		id: "1",
		title: "CodeLand,",
		icon: CodeLand,
		width: 34,
		height: 36,
	},
	{
		id: "2",
		title: "FinanceFantasia",
		icon: FinanceFantasia,
		width: 36,
		height: 28,
	},
	{
		id: "3",
		title: "Innovate,",
		icon: Innovate,
		width: 34,
		height: 35,
	},
	{
		id: "4",
		title: "NetworSify,",
		icon: NetworSify,
		width: 34,
		height: 34,
	},
	{
		id: "5",
		title: "NLP",
		icon: NLP,
		width: 34,
		height: 34,
	},
	{
		id: "6",
		title: " Operheimer",
		icon: Operheimer,
		width: 26,
		height: 34,
	},
	{
		id: "7",
		title: " OptiSim,",
		icon: OptiSim,
		width: 38,
		height: 32,
	},
];

export const workshops = [
	{
		id: "0",
		title: "Ask anything",
		image: "/logo-optima.png",
		text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
		borderUrl: "./src/assets/benefits/card-1.svg",
		iconUrl: benefitIcon1,
		backgroundUrl: benefitImage2,
	},
	{
		id: "1",
		title: "Improve everyday",
		image: "/logo-optima.png",
		text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
		borderUrl: "./src/assets/benefits/card-2.svg",
		iconUrl: benefitIcon2,
		backgroundUrl: benefitImage2,
		light: true,
	},
	{
		id: "2",
		title: "Connect everywhere",
		image: "/logo-optima.png",
		text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
		borderUrl: "./src/assets/benefits/card-3.svg",
		iconUrl: benefitIcon3,
		backgroundUrl: benefitImage2,
	},
	{
		id: "3",
		title: "Fast responding",
		image: "/logo-optima.png",
		text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
		borderUrl: "./src/assets/benefits/card-4.svg",
		iconUrl: benefitIcon4,
		backgroundUrl: benefitImage2,
		light: true,
	},
	{
		id: "4",
		title: "Ask anything",
		image: "/logo-optima.png",
		text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
		borderUrl: "./src/assets/benefits/card-5.svg",
		iconUrl: benefitIcon1,
		backgroundUrl: benefitImage2,
	},
	{
		id: "5",
		title: "Improve everyday",
		image: "/logo-optima.png",
		text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
		borderUrl: "./src/assets/benefits/card-6.svg",
		iconUrl: benefitIcon2,
		backgroundUrl: benefitImage2,
	},
];
export const competitions = [
	{
		id: "0",
		title: "Innovate-X",
		//subTitle: "By IBM", // New subtitle added
		text: "The IBM innovation challenge",
		path: "/Innovate-X",
		pathToWhatsApp: "/Innovate-X/Whatsapp",
		pathToPS: "/Innovate-X/PS",
		photoUrl: '/assets/competitions-card-images/innovate-x-image.png',
		whatsppicon:
			"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", // WhatsApp logo
		Unstopicon: unstop,
		backgroundUrl: benefitImage2,
		whatsAppLink: "https://chat.whatsapp.com/F07PevjevGMDJ4fEsoWT0b", // Add your WhatsApp link here
		unstopLink:
			"https://unstop.com/p/innovate-x-optima-2025-iit-kharagpur-1390456", // Add your Unstop link here
		driveLink: null,
	},
	{
	  id: "1",
	  title: "HackTank",
	  subTitle: "by Hire3x", // New subtitle added
	  text: "The BizTech Hackathon",
	  path: "/HackTank",
	  pathToWhatsApp: "/HackTank/Whatsapp",
	  pathToPS: "/HackTank/PS",
	  photoUrl: '/assets/competitions-card-images/hacktank-image.png', // Added photo URL
	  whatsppicon:
	    "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", // WhatsApp logo
	  Unstopicon: unstop,
	  backgroundUrl: benefitImage2,
	  whatsAppLink: "https://wa.me/1234567890", // Add your WhatsApp link here
	  unstopLink: "https://unstop.com/hackathons/hacktank-the-biztech-hackathon-iit-kharagpur-1392094", // Add your Unstop link here
	  driveLink: null,
	},
];
