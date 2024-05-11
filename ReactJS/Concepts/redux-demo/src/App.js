import Bat from './Components/Bat';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Bat />
    </Provider>
  );
}

export default App;
