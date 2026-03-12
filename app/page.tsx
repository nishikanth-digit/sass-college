import About from "./components/home/About";
import Academics from "./components/home/Academics";
import Departments from "./components/home/Departments";
import ExaminationCell from "./components/home/ExaminationCell";
import Facilities from "./components/home/Facilities";
import Hero from "./components/home/Hero";
import NotificationsSection from "./components/home/Notifications";
import Placements from "./components/home/Placements";
import Stats from "./components/home/Stats";
import StudentTestimonials from "./components/home/StudentTestimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <NotificationsSection />
      <About />
      <Academics />
      <Departments />
      <Placements />
      <ExaminationCell />
      <Facilities />
      <StudentTestimonials />

    </>
  );
}