import "./styles/panel.css";

export default function Panel() {
  return (
    <div className="panel">
      <div className="panelHeader">
        <i className="fas fa-database"></i>
        <p> E-COMMERCE DATABASE </p>
      </div>

      <div className="dbTable">
        <table>
          <thead style={{ backgroundColor: "#F9FCFE" }}>
            <tr>
              <th>TABLES </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="fas fa-border-all"></i> Employees
              </td>
            </tr>
            <tr>
              <td>
                <i className="fas fa-border-all"></i> Customers
              </td>
            </tr>
            <tr>
              <td>
                <i className="fas fa-border-all"></i> Orders
              </td>
            </tr>
            <tr>
              <td>
                <i className="fas fa-border-all"></i> Products
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="savedQuery">
        SAVED QUERYS
        <p>
          <i className="fas fa-angle-right"></i> All Order{" "}
        </p>
        <p>
          <i className="fas fa-angle-right"></i> Shipped
        </p>
        <p>
          <i className="fas fa-angle-right"></i> In Transit
        </p>
      </div>
    </div>
  );
}
