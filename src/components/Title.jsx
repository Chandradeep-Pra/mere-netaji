import "./styles.css";
const Title = (props) => {
  return (
    <div className="flex justify-center align-center">
      <h1 id="title">{props.name}</h1>
      {/* <h1 id="title">मेरे नेता जी</h1> */}
    </div>
  );
};

export default Title;
