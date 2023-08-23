function Input(props) {
  const { type, onChange } = props;
  return <input type={props.type} onChange={props.onChange} />;
}
export default Input;
