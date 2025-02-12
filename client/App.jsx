import fasteners from '../server/fasteners.js';
import { useEffect } from 'react';

function App() {

  const ip = "127.0.0.1:"
  const port = "3000"
  const url = 'http://'+ ip + port;

  function myFun() {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        console.log('Fetched data:', data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  return (
    <>
      <button onClick={myFun}>Hello there</button>
      <table className="w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Desc1</th>
            <th>length</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {fasteners.map((fasteners) => (
            <tr key={fasteners.id} className={fasteners.id % 2 === 0 ? 'bg-black' : 'bg-gray-900'}>
              <td className="text-center">{fasteners.id}</td>
              <td className="text-center">{fasteners.type}</td>
              <td className="text-center">{fasteners.desc1}</td>
              <td className="text-center">{fasteners.length}</td>
            </tr>
          ))}
        </tbody>

      </table></>)
}
export default App;