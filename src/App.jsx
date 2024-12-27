import axios from 'axios';
import './App.css'

function App() {

  const url = "https://roadmapper-backend-1.onrender.com/"; // Replace with your Render URL
      const interval = 60000; // Interval in milliseconds (30 seconds)
  
      function reloadWebsite() {
        axios.get(url)
          .then(response => {
            console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
          })
          .catch(error => {
            console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
          });
      }
      setInterval(reloadWebsite, interval);

  return (
    <>
      <div>
       
      </div>
      <p className="read-the-docs">
        Pinging
      </p>
    </>
  )
}

export default App
