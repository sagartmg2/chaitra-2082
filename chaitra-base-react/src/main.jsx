import { createRoot } from "react-dom/client";
// import {courses} from "./data/courses"

let description =
  "Lorem ipsum dolor sit amet consectsequi quas fugit incidunt.";

let domain = "https://mindrisers.com.np";

let courses = [
  {
    featured: true,
    title: "MERN Stack Training in Nepal",
    image: "/static/Images/courses/banner/mern-banner-min_nplbrgN.jpg",
  },
  {
    featured: true,
    title: "Python with Django Training in Nepal",
    image: "/static/Images/courses/banner/python-banner-min_7hCoIdR.jpg",
  },
  {
    featured: true,
    title: "Digital Marketing Training in Nepal",
    image:
      "/static/Images/courses/banner/DIGITAL-MARKETING-banner-min_JBHENk4.webp",
  },
  {
    featured: false,
    title: "Quality Assurance Training in Nepal",
    image: "/static/Images/courses/banner/qa-banner-min_l0DzbAP.jpg",
  },
  {
    featured: true,
    title: "Graphic Design Training in Nepal",
    image: "/static/Images/courses/banner/banner11-min_6ANDad7.png",
  },
  {
    featured: false,
    title: "Flutter Training in Nepal",
    image: "/static/Images/courses/banner/flutter-banner-min_DUDTPdH.jpg",
  },
  {
    featured: false,
    title: "DevOps Training in Nepal",
    image: "/static/Images/courses/banner/DevOps_Training.png",
  },
];


createRoot(document.getElementById("root")).render(
  <div>
    <h1>FEATURED</h1>

    <br />
    <h1>Courses</h1>
    <p>{description}</p>
    <ul>
      <li>
        <img height="100" src="https://mindrisers.com.np/static/Images/courses/banner/python-banner-min_7hCoIdR.jpg" />
        <p>MERRRRNNNN</p>
        <p>feature: yes</p>
      </li>

      <li>
        <img height="100" src={domain + courses[0].image} />
        <p>{courses[0].title}</p>
        <p>feature: {courses[0].featured ? "yes" : "no"}</p>
      </li>

      <li>
        <img height="100" src={domain + courses[1].image} />
        <p>{courses[1].title}</p>
        <p>feature: {courses[1].featured ? "yes" : "no"}</p>
      </li>

      <li>
        <img height="100" src={`${domain}${courses[2].image}`} />
        <p>{courses[2].title}</p>
        <p>feature: {courses[2].featured ? "yes" : "no"}</p>
      </li>

      <li>
        <img height="100" src={`${domain}${courses[3].image}`} />
        <p>{courses[3].title}</p>
        <p>feature: {courses[3].featured ? "yes" : "no"}</p>
      </li>
    </ul>

    <h2></h2>
  </div>,
);
