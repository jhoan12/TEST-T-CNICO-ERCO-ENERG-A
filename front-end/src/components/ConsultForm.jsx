import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SetTable from "./SetTable";

const ConsultForm = () => {
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:4000/${type}/${name}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Buscar por</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Escriba el tipo de busqueda"
            onChange={(e) => setType(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Escriba el nombre"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      {data && <SetTable data={data} />}
    </>
  );
};

export default ConsultForm;
