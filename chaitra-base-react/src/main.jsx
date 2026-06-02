import { createRoot } from "react-dom/client";
import "./index.css";
import { todos } from "./data/todos";

// import {courses} from "./data/courses"

let description =
  "Lorem ipsum dolor sit amet consectsequi quas fugit incidunt.";

let domain = "https://mindrisers.com.np";

let courses = [
  {
    featured: true,
    title: "MERN Stack Training in Nepal",
    description:
      "Build full-stack web apps with MongoDB, Express, React, Node.",
    image: "/static/Images/courses/banner/mern-banner-min_nplbrgN.jpg",
  },
  {
    featured: true,
    title: "Python with Django Training in Nepal",
    description: "Create powerful web applications using Python and Django.",
    image: "/static/Images/courses/banner/python-banner-min_7hCoIdR.jpg",
  },
  {
    featured: true,
    title: "Digital Marketing Training in Nepal",
    description: "Master SEO, social media, and online advertising strategies.",
    image:
      "/static/Images/courses/banner/DIGITAL-MARKETING-banner-min_JBHENk4.webp",
  },
  {
    featured: false,
    title: "Quality Assurance Training in Nepal",
    description: "Learn software testing techniques and QA best practices.",
    image: "/static/Images/courses/banner/qa-banner-min_l0DzbAP.jpg",
  },
  {
    featured: true,
    title: "Graphic Design Training in Nepal",
    description:
      "Design stunning visuals using industry-standard creative tools.",
    image: "/static/Images/courses/banner/banner11-min_6ANDad7.png",
  },
  {
    featured: false,
    title: "Flutter Training in Nepal",
    description:
      "Build cross-platform mobile apps with Google's Flutter framework.",
    image: "/static/Images/courses/banner/flutter-banner-min_DUDTPdH.jpg",
  },
  {
    featured: false,
    title: "DevOps Training in Nepal",
    description:
      "Automate deployments and streamline software development pipelines.",
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

let featuredCourses = [];

courses.forEach((el) => {
  if (el.featured) {
    featuredCourses.push(el);
  }
});

featuredCourses = courses.filter((el) => {
  if (el.featured) {
    return true;
  }
});

featuredCourses = courses.filter((el) => el.featured);

/* COMPONENTs 
    - it must be capitalized.
    - it must return html 
*/

// function Course(title, description, price) {
// console.log({ title });

// props = {title:"",description:"",description}
function Course(props) {
  return (
    <li className="course">
      <img height="100" src={domain + props.image} />
      <p style={{ fontWeight: "bold", fontSize: "22px" }}>{props.title}</p>
      <p>{props.description}</p>
      <p>feature: {props.featured ? "yes" : "no"}</p>
      <p>Rs:10000</p>
    </li>
  );
}

createRoot(document.getElementById("root")).render(
  <div>
    {/* <h1 style="color:red;" >Featured</h1> */}
    <h1 style={{ textTransform: "uppercase", textDecoration: "underline" }}>
      Featured
    </h1>
    <ul className="courses">
      {/* <li className="course">
        <img height="100" src={domain + courses[0].image} />
        <p>{courses[0].title}</p>
        <p>feature: {courses[0].featured ? "yes" : "no"}</p>
      </li>
     */}

      {/* {courses.map((el) => {
        if (el.featured) {
          return (
            <li className="course">
              <img height="100" src={domain + courses[0].image} />
              <p>{courses[0].title}</p>
              <p>feature: {courses[0].featured ? "yes" : "no"}</p>
            </li>
          );
        }
      })} */}

      {/* {featuredCourses.map((el) => {
        return (
          <li className="course">
            <img height="100" src={domain + el.image} />
            <p>{el.title}</p>
            <p>feature: {el.featured ? "yes" : "no"}</p>
          </li>
        );
      })} */}

      {/* {courses
        .filter((el) => el.featured)
        .map((el) => {
          return (
            <li className="course">
              <img height="100" src={domain + el.image} />
              <p style={{ fontWeight: "bold", fontSize: "22px" }}>{el.title}</p>
              <p>{el.description}</p>
              <p>Rs:10000</p>
              <p>feature: {el.featured ? "yes" : "no"}</p>
            </li>
          );
        })} */}

      {courses
        .filter((el) => el.featured)
        .map((el) => {
          return (
            <Course
              key={index}
              title={el.title}
              description={el.description}
              featured={el.featured}
              image={el.image}
            />
          );
        })}

      {/* { Course() } */}
      {/* We can call a component like below */}
      <Course
        image={courses[2].image}
        title="QA"
        description="QA description"
        price={10000}
        featured={false}
      />
    </ul>

    <br />
    <h1>Courses</h1>
    <p>{description}</p>

    <ul className="courses">
      {/* {mappedCourses} */}

      {courses.map((el, index) => {
        return (
          <Course
            key={index}
            title={el.title}
            description={el.description}
            featured={el.featured}
            image={el.image}
          />
        );
      })}
      {/* {courses.map((el, index) => {
        return (
          <li className="course" key={index}>
            <img height="100" src={domain + el.image} />
            <p style={{ fontWeight: "bold", fontSize: "22px" }}>{el.title}</p>
            <p>{el.description}</p>
            <p>feature: {el.featured ? "yes" : "no"}</p>
            <p>Rs: 10000</p>
          </li>
        );
      })} */}

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

    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>{todos[0].todo}</td>
          <td>true</td>
        </tr>
        <tr>
          <td>{todos[1].todo}</td>
          <td>true</td>
        </tr>
        <tr>
          <td>{todos[2].todo}</td>
          <td>true</td>
        </tr> */}
        {todos.map((el, index) => {
          return (
            <tr key={el.id}>
              <td>{el.todo}</td>
              <td>{el.completed ? "yes" : "no"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>

    <ul>
      {/* <li>one</li>
      <li>one</li>
      <li>one</li>
      <li>one</li>
      <li>one</li>
      <li>one</li> */}
      {todos.map((el) => {
        return (
          <li key={el.id}>
            {el.todo} ( {el.completed ? "yes" : "no"} ){" "}
          </li>
        );
      })}
    </ul>
  </div>,
);
