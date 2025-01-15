import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";

const About = () => {
  const aboutSections = [
    {
      id: 1,
      tagline: "Our Mission",
      icon: "/path/to/mission-icon.png",
      imageUrl: "/path/to/mission-image.jpg",
      title: "Creating a Better Future",
      description:
        "Our mission is to drive innovation and make the world a better place.",
      highlighted: true,
    },
    {
      id: 2,
      tagline: "Our Vision",
      icon: "/path/to/vision-icon.png",
      imageUrl: "/path/to/vision-image.jpg",
      title: "Empowering Communities",
      description:
        "We envision a world where technology connects and uplifts everyone.",
      highlighted: false,
    },
    {
      id: 3,
      tagline: "Meet the Team",
      icon: "/path/to/team-icon.png",
      imageUrl: "/path/to/team-image.jpg",
      title: "The People Behind the Magic",
      description:
        "Our diverse team brings creativity, expertise, and passion to every project.",
      highlighted: false,
    },
  ];

  return (
    <Section className="overflow-hidden" id="about">
      <div className="container md:pb-10">
        <Heading
          tag="Get to know us"
          title="Who we are and what we believe in"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {aboutSections.map(({ id, tagline, icon, imageUrl, title, description, highlighted }) => (
            <div
              key={id}
              className={`p-0.25 rounded-[2.5rem] ${
                highlighted ? "bg-conic-gradient" : "bg-n-6"
              } md:flex even:md:translate-y-[4rem]`}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{tagline}</Tagline>
                    <img
                      className="ml-4 w-10 h-10"
                      src={icon}
                      alt={tagline}
                    />
                  </div>

                  <div className="mb-8 -my-10 -mx-15">
                    <img
                      className="w-full rounded-lg"
                      src={imageUrl}
                      alt={title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{title}</h4>
                  <p className="body-2 text-n-4">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/about">Learn more about us</Button>
        </div>
      </div>
    </Section>
  );
};

export default About;
