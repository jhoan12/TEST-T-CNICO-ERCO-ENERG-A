import { useEffect } from "react";
import Table from "react-bootstrap/Table";

const SetTable = ({ data }) => {
  useEffect(() => {
    console.log("table", data);
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        {data.message === "country" && (
          <tr>
            <th>Pais</th>
            <th>Estados</th>
            <th>Ciudades</th>
            <th>Poblacion</th>
          </tr>
        )}
        {data.message === "state" && (
          <tr>
            <th>Pais</th>
            <th>Estados</th>
            <th>Ciudades</th>
            <th>Poblacion</th>
          </tr>
        )}
        {data.message === "city" && (
          <tr>
            <th>Ciudades</th>
            <th>Poblacion</th>
          </tr>
        )}
      </thead>
      <tbody>
        {data.message === "city" && (
          <tr>
            <td>{data.data.NAME}</td>
            <td>{data.data.POPULATION}</td>
          </tr>
        )}
        {data.message === "country" && (
          <>
            <tr>
              <td>{data.data.country.NAME}</td>
              {data.data.states.map((item, i) => (
                <div key={i}>
                  <td>{item.NAME}</td>
                  {data.data.states.cities?.map((city, i)=> (
                    <td key={i}>{city.NAME}</td>
                  ))}
                </div>
              ))}
            </tr>
          </>
        )}
      </tbody>
    </Table>
  );
};

export default SetTable;
