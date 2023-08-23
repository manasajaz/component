function Button(props) {
  //console.log(props);
  return <button onClick={props.btnfun}>{props.btnValue}</button>;
}

export default Button;
