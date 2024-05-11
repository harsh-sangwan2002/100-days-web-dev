import FireAuth from './Components/FireAuth';
import FireStore from './Components/FireStore';
import Storage from './Components/Storage';
import './App.css';

function App() {
  return (
    <div className='container'>
      <FireAuth />
      <FireStore/>
      <Storage/>
    </div>
  );
}

export default App;
