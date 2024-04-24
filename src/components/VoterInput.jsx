import React, { useState } from "react";
import { constituencies } from "../data/constituency.js";

const VoterInput = () => {
  // console.log(phase_2_contituency);
  const [state, setState] = useState("-- Select State --");
  const [seat, setSeat] = useState(0);
  const [constituency, setConstituency] = useState("--Select Constituency--");
  const [constituencyNames, setConstituencyNames] = useState([]);
  const changeState = (e) => {
    setState(e.target.value);
    setSeat(
      constituencies.find((st) => st.state === e.target.value)
        .constituencyDetail.seats,
    );
    console.log(e.target.value);
    setConstituencyNames(
      constituencies.find((st) => st.state === e.target.value)
        .constituencyDetail.names,
    );
    console.log(constituency);
    console.log(constituencyNames);
  };

  return (
    <div className="min-h-[100px] bg-red-200 rounded-lg col-span-12 sm:col-span-6 items-center grid px-3">
      <span className="h3">Setect State</span>
      <select value={state} onChange={changeState} className="form-control">
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
        {constituencyNames.forEach((cst) => (
          <option value={cst} key={cst}>
            {cst}
          </option>
        ))}
      </select>
      <span className="h3">What do you want ?</span>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <h1>{seat}</h1>
    </div>
  );
};

export default VoterInput;
