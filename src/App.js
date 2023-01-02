import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

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

  const [error, setError] = useState("");

  const klik = () => {
    // number += 1;
    setNumber(number + 1);
    // console.log(number);
  };

  const handleSumbit = () => {
    // console.log(name);
    if (form.name === "") {
      setError("field nama tidak boleh kosong");
    } else if (form.tahunLahir === "") {
      setError("field tanggal tidak boleh kosong");
    } else {
      setForm({ ...form, usia: 2022 - form.tahunLahir });
    }
  };

  const handleChange = (e) => {
    setError();
    if (e.target.name === "name") {
      if (e.target.value.length < 3) {
        setError("Minimal 3 karakter");
      }
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // console.log(number);
  return (
    <>
      <p>Nilai : {number}</p>
      <Button onClick={klik}>Click me</Button>
      <p>Aplikasi Input data diri</p>
      <br />
      Name:
      <Input
        type="text"
        value={form.name}
        name="name"
        // onChange={(e) => setForm({ ...form, name: e.target.value })}
        handleChange={handleChange}
      />
      <br />
      Tahun Lahir:{" "}
      <Input
        type="number"
        value={form.tahunLahir}
        name="tahunLahir"
        // onChange={(e) => setForm({ ...form, tahunLahir: e.target.value })}
        handleChange={handleChange}
        // handleChange={handleChange}
      />
      <br />
      <br />
      Umur Saya :{form.usia}
      <br />
      <Button onClick={handleSumbit}> Submit </Button>
      <p style={{ color: "red" }}>{error}</p>
    </>
  );
}

export default App;
