// components/SkillsCarousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { FC } from "react";

interface SkillItem {
  image: string;
  alt: string;
  rating: "2" | "2-5" | "3" | "3-5" | "4" | "4-5" | "5";
}

const skills: SkillItem[] = [
  { image: "/images/HTML5.png", alt: "HTML5", rating: "3-5" },
  { image: "/images/CSS.png", alt: "CSS3", rating: "3-5" },
  { image: "/images/Bootstrap.png", alt: "Bootstrap", rating: "3-5" },
  { image: "/images/JS.png", alt: "JavaScript", rating: "3" },
  { image: "/images/TypeScript.png", alt: "TypeScript", rating: "3" },
  { image: "/images/React.png", alt: "React", rating: "3" },
  { image: "/images/Next.png", alt: "Next.js", rating: "2-5" },
  { image: "/images/SQL.png", alt: "SQL", rating: "2-5" },
  { image: "/images/API.webp", alt: "API", rating: "3" },
  { image: "/images/Firebase.jpg", alt: "Firebase", rating: "2-5" },
  { image: "/images/GitHub.webp", alt: "GitHub", rating: "3" },
  { image: "/images/Scrum.png", alt: "Scrum", rating: "4" },
  { image: "/images/AutoCad.png", alt: "AutoCAD", rating: "3" },
  { image: "/images/Figma.png", alt: "Figma", rating: "3" },
  { image: "/images/Affinity Photo.png", alt: "Affinity Photo", rating: "3" },
];

const SkillsCarousel: FC = () => {
  return (
    <section
      className="skills-section"
      data-aos="fade-up"
      data-aos-anchor=".projects-section"
      data-aos-anchor-placement="bottom-top"
      data-aos-offset="0"
    >
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-carousel">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          speed={900}
          breakpoints={{
            320: { slidesPerView: 1, centeredSlides: true },
            640: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="skill-slide">
                <img src={skill.image} alt={skill.alt} />
                <div className="skill-meta">
                  <span className={`skill-stars skill-stars-${skill.rating}`}></span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SkillsCarousel;
