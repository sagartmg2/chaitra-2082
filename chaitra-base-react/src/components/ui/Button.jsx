// props  = {size:"xl" ,rounded:"true" ,label:"view more"}

export default function Button(props) {
  let { label, size, rounded, children,...rest } = props; // object desructuring

  let className = "btn ";

  if (size == "sm") {
    className += "btn-sm";
  } else if (size == "lg") {
    className += "btn-lg";
  }

  if (rounded) {
    className += " rounded";
  }

  //   return <button disabled={props.disabled} className={`btn ${props.rounded ? "rounded":""}  ${props.size == "sm" ? "btn-sm" : props.size =="lg" ? "btn-lg":""}`}>{props.label}</button>;
  return <button {...rest} className={className}>{label ? label : children}</button>;
}

export function ButtonOld(props) {
  let className = "btn ";

  if (props.size == "sm") {
    className += "btn-sm";
  } else if (props.size == "lg") {
    className += "btn-lg";
  }

  if (props.rounded) {
    className += " rounded";
  }

  //   return <button disabled={props.disabled} className={`btn ${props.rounded ? "rounded":""}  ${props.size == "sm" ? "btn-sm" : props.size =="lg" ? "btn-lg":""}`}>{props.label}</button>;
  return <button className={className}>{props.label}</button>;
}

export function SmallButton() {
  return <button className="btn btn-sm">view more</button>;
}

export function BigButton() {
  return <button className="btn btn-lg">view more</button>;
}
