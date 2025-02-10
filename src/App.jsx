import fasteners from './fasteners.js'

function App() {

  function sayIt() { 
    // fetch the server here
    console.log("said it")
  }
  // The quantity is pulled from the id -> /fasteners/id.txt
  return (<table className="w-full">
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
  
  </table>)
}
export default App;