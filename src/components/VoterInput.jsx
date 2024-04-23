import React, { useState } from "react";
import { constituencies } from "../data/constituency.js";

const VoterInput = () => {
  // console.log(phase_2_contituency);
  const [state, setState] = useState("-- Select State --");
  const [seat, setSeat] = useState(0);
  const [constituency, setConstituency] = useState([]);
  const changeState = (e) => {
    setState(e.target.value);
    setSeat(
      constituencies.find((st) => st.state === e.target.value)
        .constituencyDetail.seats,
    );
    setConstituency(
      constituencies.map((st) => st.state === e.target.value).constituencyDetail
        .constituencies,
    );
  };

  return (
    <div className=" bg-red-200 rounded-lg col-span-12 sm:col-span-6 items-center">
      <span className="h3">Setect State</span>
      <select value={state} onChange={changeState}>
        <option>-- State --</option>
        {constituencies.map((st) => (
          <option value={st.state} key={st.state}>
            {st.state}
          </option>
        ))}
      </select>
      <span className="h3">Setect Constituency</span>
      <select>
        <option>-- Constituency --</option>
        {constituency.forEach((cst) => (
          <option value={cst}>{cst}</option>
        ))}
      </select>

      <h1>{seat}</h1>
    </div>
  );
};

export default VoterInput;
