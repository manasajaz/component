import React, { useState } from "react";
import "./App.css";
// import Callback from "./callback";
import Card from "./component/Card";
import Button from "./component/Button";
import Table from "./component/Table";
import Input from "./component/Input";
import Select from "./component/Select";

export default function App() {
  const [UIColor, setUIColor] = useState(null);

  const getcolor = (color) => {
    setUIColor(color);
  };

  function name() {
    console.log("anas");
  }

  function fname() {
    console.log("aijaz");
  }

  let arr = [
    {
      name: "anas",
      id: "1",
      isactive: "false",
    },
    {
      name: "ali",
      id: "2",
      isactive: "true",
    },
  ];

  <table>
    <tr>
      <td>12</td>
      <td>14</td>
      <td>16</td>
    </tr>
  </table>;
  return (
    <>
      <div>
        <div
          className="App-color-container"
          style={{ backgroun: `${UIColor}` }}
        ></div>
        {/* <Callback getcolor={getcolor} /> */}
        <Button btnfun={name} btnValue="name" />
        <Button btnfun={fname} btnValue="fname" />
        {arr.map((x) => {
          return <Card id={x.id} name={x.name} isactive={x.isactive} />;
        })}
        <Table />
        <Select />
        <Input type="text" onChange={(e) => console.log(e.target.value)} />
      </div>
    </>
  );
}
