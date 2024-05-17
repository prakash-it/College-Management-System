import logo from './logo.svg';
import './App.css';
import Studentdata from './Components/Student-data';
import Teacherdata from './Components/Teacher-data';

function App() {
  return (
    <div className="App">
      <Studentdata/>
      <Teacherdata/>
    </div>
  );
}

export default App;
