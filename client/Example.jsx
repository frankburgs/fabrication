function App() {

    function sayIt() { // fetch here
      console.log("said it")
    }
  
    return (<>
      <button onClick={sayIt}>
        ohWEll
      </button>
    </>
    )
  }
  export default App;