import "./css/App.css"

function App() {
    let currentDate = new Date();
    let date = currentDate.toLocaleString();
    
    return (
      <div className="App">
        <div className="banner">
          <img src={frameten.jpg} className='logo' alt="bobby.jpg"/>
        </div>
        <div className="date">
          {date}
        </div>    
      </div>
    );
  }