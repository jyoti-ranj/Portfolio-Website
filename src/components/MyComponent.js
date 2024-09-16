import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap

const MyComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/your-endpoint');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Data from Backend</h1>
      {data.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Field 1</th>
              <th>Field 2</th>
              <th>Field 3</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.field1}</td>
                <td>{item.field2}</td>
                <td>{item.field3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
