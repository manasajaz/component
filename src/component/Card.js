function Card(props) {
  const { name, id, isactive } = props;
  return (
    <>
      <p>id:{id}</p>
      <p>name:{name}</p>
      <p>isactive:{isactive ? "true" : "false"}</p>
    </>
  );
}

export default Card;
