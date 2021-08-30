import "./styles/result.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { arr1, arr2, arr3, arr4 } from "./constants";
import Table from "react-bootstrap/Table";

export default function Result() {
  var Arr = [];

  arr1.forEach((element, i) => {
    Arr.push(
      <tr>
        <td>{arr1[i]}</td>
        <td>{arr2[i]}</td>
        <td>{arr3[i]}</td>
        <td>{arr4[i]}</td>
      </tr>
    );
  });

  return (
    <div className="result" style={{ overflow: "scroll" }}>
      <div className="resultheader">
        <p className="rowCount">
          {" "}
          <i className="far fa-check-circle"></i> 20 Rows{" "}
        </p>
        <p className="time">3.4ms</p>
      </div>

      <Table bordered>
        <thead style={{ backgroundColor: "#F9FCFE" }}>
          <tr>
            <th>OrderID</th>
            <th>CustomerID</th>
            <th>ShipCity</th>
            <th>ShipCountry</th>
          </tr>
        </thead>
        <tbody>{Arr}</tbody>
      </Table>
    </div>
  );
}
