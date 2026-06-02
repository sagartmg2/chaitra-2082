export let courses = [
  {
    featured:true,
    title: "MERN Stack Training in Nepal",
    image: "/static/Images/courses/banner/mern-banner-min_nplbrgN.jpg",
  },
  {
    featured:true,
    title: "Python with Django Training in Nepal",
    image: "/static/Images/courses/banner/python-banner-min_7hCoIdR.jpg",
  },
  {
    featured:false,
    title: "Digital Marketing Training in Nepal",
    image:
      "/static/Images/courses/banner/DIGITAL-MARKETING-banner-min_JBHENk4.webp",
  },
  {
    featured:false,
    title: "Quality Assurance Training in Nepal",
    image: "/static/Images/courses/banner/qa-banner-min_l0DzbAP.jpg",
  },
  {
    featured:true,
    title: "Graphic Design Training in Nepal",
    image: "/static/Images/courses/banner/banner11-min_6ANDad7.png",
  },
  {
    featured:false,
    title: "Flutter Training in Nepal",
    image: "/static/Images/courses/banner/flutter-banner-min_DUDTPdH.jpg",
  },
  {
    featured:false,
    title: "DevOps Training in Nepal",
    image: "/static/Images/courses/banner/DevOps_Training.png",
  },
];


let featuredCourses = courses.filter((el) => {
  if (el.featured) {
    return true;
  }
});

//  featuredCourses = courses.filter((el) => false);
 featuredCourses = courses.filter((el) => el.featured);
console.log(featuredCourses);


// export courses;

// export default courses