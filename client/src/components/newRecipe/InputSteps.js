import { useState, useEffect } from "react";

const InputSteps = ({ setForm }) => {
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState("");

  const onchange = (e) => {
    setStep(e.target.value);
  };
  const onclick = (e) => {
    e.preventDefault();
    setSteps((i) => [...i, step]);
  };
  useEffect(() => {
    setForm((e) => ({
      ...e,
      steps,
    }));
  }, [steps]);
  return (
    <>
      <input onChange={onchange} type="text" />
      <button onClick={onclick} type="submit">
        add
      </button>
    </>
  );
};

export default InputSteps;
