import { createRoot } from "react-dom/client";
import "./index.css";
import {todos} from "./data/todos"

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

let mappedCourses = courses.map((el) => {
  return (
    <li className="course">
      <img height="100" src={domain + el.image} />
      <p>{el.title}</p>
      <p>feature: {el.featured ? "yes" : "no"}</p>
    </li>
  );
});

// [<li>courses....</li>, <li>course dteail...</li>];

createRoot(document.getElementById("root")).render(
  <div>
    {/* <h1 style="color:red;" >Featured</h1> */}
    <h1 style={{ textTransform: "uppercase", textDecoration: "underline" }}>
      Featured
    </h1>
    <ul className="courses">
      <li className="course">
        <img height="100" src={domain + courses[0].image} />
        <p>{courses[0].title}</p>
        <p>feature: {courses[0].featured ? "yes" : "no"}</p>
      </li>
      <li className="course">
        <img height="100" src={domain + courses[0].image} />
        <p>{courses[0].title}</p>
        <p>feature: {courses[0].featured ? "yes" : "no"}</p>
      </li>
      <li className="course">
        <img height="100" src={domain + courses[0].image} />
        <p>{courses[0].title}</p>
        <p>feature: {courses[0].featured ? "yes" : "no"}</p>
      </li>
    </ul>

    <br />
    <h1>Courses</h1>
    <p>{description}</p>

    <ul className="courses">
      {/* {mappedCourses} */}

      {courses.map((el) => {
        return (
          <li className="course">
            <img height="100" src={domain + el.image} />
            <p>{el.title}</p>
            <p>feature: {el.featured ? "yes" : "no"}</p>
            <p>Rs: 10000</p>
          </li>
        );
      })}

      {/* <li className="course">
        <img
          height="100"
          src="https://mindrisers.com.np/static/Images/courses/banner/python-banner-min_7hCoIdR.jpg"
        />
        <p>MERRRRNNNN</p>
        <p>feature: yes</p>
      </li>

      <li className="course">
        <img height="100" src={domain + courses[0].image} />
        <p>{courses[0].title}</p>
        <p>feature: {courses[0].featured ? "yes" : "no"}</p>
      </li>
      */}
    </ul>
    <br />
    <br />
    <br />
    <h1> TODOS list</h1>
    {/* FIXME : covert this to tabular form:  */}
    <ul>
      <li>one</li>
      <li>one</li>
      <li>one</li>
      <li>one</li>
      <li>one</li>
      <li>one</li>
    </ul>
  </div>,
);
