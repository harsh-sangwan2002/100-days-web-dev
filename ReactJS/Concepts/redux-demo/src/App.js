import Bat from './Components/Bat';
import { Provider } from 'react-redux';
import store from './redux/store';
import Ball from './Components/Ball';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Bat />
      <Ball />
    </Provider>
  );
}

export default App;
