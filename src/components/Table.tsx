const Table = () => {
  return (
    <>
      <div className="container-fluid m-4 px-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Owner Name</th>
              <th scope="col">Establishment Name</th>
              <th scope="col">Contac No. ("Estb")</th>
              <th scope="col">Address</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
