// components/SkillsCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { FC } from "react";

interface SkillItem {
  image: string;
  alt: string;
  text: string;
}

const skills: SkillItem[] = [
  {
    image: "/images/AutoCad.png",
    alt: "AutoCAD",
    text: "I have solid experience in AutoCAD and master both 2D and 3D modeling. I create precise technical drawings and design solutions with focus on detail and accuracy. Through efficient layer management and dimensioning, I ensure quality and clarity in my projects, while adapting to client requirements and industry standards.",
  },
  {
    image: "/images/HTML5.png",
    alt: "HTML5",
    text: "I have strong skills in HTML5 and use it to build structured, semantic websites that follow modern web standards. By utilizing HTML5 elements and APIs, I can develop responsive, accessible, and SEO-optimized websites that perform effectively across all devices.",
  },
  {
    image: "/images/CSS.png",
    alt: "CSS3",
    text: "I master CSS3 and use it to craft stylish, responsive, and user-friendly web interfaces. Through advanced techniques such as flexbox, grid, and animations, I design aesthetically pleasing websites that function flawlessly across platforms.",
  },
  {
    image: "/images/JS.png",
    alt: "JavaScript",
    text: "I have strong skills in JavaScript and use it to build dynamic and interactive websites. By writing clean and efficient code, I enhance the user experience with features like form validation, animations, and real-time updates.",
  },
  {
    image: "/images/React.png",
    alt: "React",
    text: "I use React to build fast, scalable, and interactive user interfaces. With a component-based approach, I ensure code reusability and maintainability across projects while utilizing hooks and state management for dynamic web apps.",
  },
  {
    image: "/images/API.webp",
    alt: "API",
    text: "I handle APIs efficiently, both RESTful and third-party, to fetch, manipulate, and display data in real-time. I am familiar with tools like Axios and Fetch, ensuring smooth and secure integration between frontend and backend.",
  },
  {
    image: "/images/GitHub.webp",
    alt: "GitHub",
    text: "I use GitHub for version control and collaboration. Through pull requests, branches, and commits, I manage code efficiently in both individual and team-based projects, ensuring traceability and team transparency.",
  },
  {
    image: "/images/Scrum.png",
    alt: "Scrum",
    text: "I have experience working with Scrum in agile environments. I participate in sprint planning, daily stand-ups, and retrospectives to ensure continuous delivery and improvement of software projects.",
  },
];

const SkillsCarousel: FC = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-carousel">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          speed={3000} 
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="skill-slide">
                <img src={skill.image} alt={skill.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SkillsCarousel;
