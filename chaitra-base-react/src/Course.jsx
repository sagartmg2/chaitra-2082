import Button from "./components/ui/Button";

let domain = "https://mindrisers.com.np";

export default function Course(props) {
  return (
    <li className="course">
      <img height="100" src={domain + props.image} />
      <p style={{ fontWeight: "bold", fontSize: "22px" }}>{props.title}</p>
      <p>{props.description}</p>
      <p>feature: {props.featured ? "yes" : "no"}</p>
      <p>Rs:10000</p>
      {/* <button className="btn">view more</button> */}
      <Button/>
    </li>
  );
}
