import { courses } from "./data/courses";
import Course from "./Course";

export default function Courses() {
  return (
    <>
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
          .map((el, index) => {
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
    </>
  );
}
