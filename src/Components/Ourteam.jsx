
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// === team images ===
import Ansh from "../assets/OurTeamImages/Ansh.jpg";
import shivam from "../assets/OurTeamImages/Shivam .jpg";
import Umeesh from "../assets/OurTeamImages/Umeesh.jpg";
import founder from "../assets/OurTeamImages/Founder.jpeg";
import Ravir from "../assets/OurTeamImages/Ravi rai.jpeg";
import Ankit from "../assets/OurTeamImages/Ankit.jpg";

const cards = [
  {
    name: "Ram Pratap Sharma",
    role: "(Founder & CEO)",
    image: founder,
    message:
      "Our strength is our team. Your passion, dedication, and innovation drive everything we do.",
  },
  {
    name: "Umeesh Kumar",
    role: "(Team Leader)",
    image: Umeesh,
    message:
      "Great things happen when we work together. Proud to lead a team that turns ideas into reality.",
  },
  {
    name: "Ankit Bisht",
    role: "(Full‑Stack Developer)",
    image: Ankit,
    message:
      "Turning ideas into scalable, user‑friendly solutions across front‑end and back‑end.",
  },
  {
    name: "Shivam Sharma",
    role: "(Software Developer)",
    image: shivam,
    message:
      "From planning to deployment — we build scalable, secure, and reliable software solutions.",
  },
  {
    name: "Ansh Agarwal",
    role: "(Full‑Stack Developer)",
    image: Ansh,
    message:
      "Creating user-focused solutions through smart design and solid programming.",
  },
  {
    name: "Ravi Rai",
    role: "(Software Developer)",
    image: Ravir,
    message: "Smart software built to solve real‑world problems efficiently.",
  },
];

export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);

  const base =
    "transition-all duration-300 transform-gpu px-6 py-8 rounded-2xl bg-white shadow-lg flex flex-col items-center text-center";
  const activeCls = "blur-none scale-100 opacity-100";
  const inactiveCls = "filter blur-sm scale-90 opacity-70";

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-10 select-none">
        Our&nbsp;Team
      </h2>

      <Swiper
        className="max-w-4xl mx-auto"
        loop
        centeredSlides
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 3 } }} // ≥768 px ⇒ 3 slides
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[ Autoplay]}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
      >
        {cards.map((m, idx) => (
          <SwiperSlide key={idx}>
            <article
              className={`${base} ${
                idx === activeIndex ? activeCls : inactiveCls
              }`}
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-40 h-40 rounded-full object-cover object-top mb-5"
              />
              <h3 className="text-xl font-semibold text-gray-800">{m.name}</h3>
              <p className="text-gray-500 font-medium mb-2">{m.role}</p>
              <p className="text-gray-600 text-sm">{m.message}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
