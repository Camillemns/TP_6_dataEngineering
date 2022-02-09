import './App.css';
import useFetch from 'use-http';

function App() {
  const { loading, data } = useFetch("http://127.0.0.1:3000/", {}, [])

  if (loading) {
    return <div></div>
  }

  return <div>
    <h1>How many time have you been here ?</h1>
    <p>You have been here : {data.pageCount} times.</p>
  </div>

}

export default App;
