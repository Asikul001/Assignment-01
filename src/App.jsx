import { useState } from 'react'

function App() {
  const [data, setdata] = useState()
  const [Error, setError] = useState(null)

async function collect_data(){
  try {
    const response = await fetch('https://catfact.ninja/fact'); 
    if (!response.ok) throw new Error('Network response was not ok');
    const data=await response.json();
    setdata(data);
  } catch (err) {
    setError(err.message);
  }
}
  return <div>
  <div>
  <button onClick={()=>collect_data()} style={{ width: 180, height: 80, fontSize:30}}>
    Click Me
  </button>
    </div>
    <div>
      {data && (<div>
          <h2 >FACT: {data.fact}</h2>
          <h2 >Length :{data.length}</h2>
          </div>
      )}
      </div>
      
    </div>
}

export default App
