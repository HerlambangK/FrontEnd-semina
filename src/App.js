import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  // let number = 0;

  const [number, setNumber] = useState(0);
  // const [name, setName] = useState("");
  // const [tahunLahir, setTahunLahir] = useState("");
  // const [usia, setUsia] = useState("");

  const [form, setForm] = useState({
    name: "",
    usia: "",
    tahunLahir: "",
  });

  const klik = () => {
    // number += 1;
    setNumber(number + 1);
    // console.log(number);
  };

  const handleSumbit = () => {
    // console.log(name);
    setForm({ ...form, usia: 2022 - form.tahunLahir });
  };

  const handleChange = (e) => {};

  // console.log(number);
  return (
    <>
      <p>Nilai : {number}</p>
      <Button onClick={klik}>Click me</Button>
      <p>Aplikasi Input data diri</p>
      <br />
      Name:
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br />
      Tahun Lahir:{" "}
      <input
        type="number"
        value={form.tahunLahir}
        onChange={(e) => setForm({ ...form, tahunLahir: e.target.value })}
      />{" "}
      <br />
      Umur Saya :{form.usia}
      <br />
      <Button onClick={handleSumbit}> Submit </Button>
    </>
  );
}

export default App;
