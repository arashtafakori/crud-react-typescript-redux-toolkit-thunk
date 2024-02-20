import { Provider } from "react-redux";
import store from './apps/todo/redux/store';

const App = () => {
  return (
    <Provider store={store}>

    </Provider>
  );
};

export default App;
