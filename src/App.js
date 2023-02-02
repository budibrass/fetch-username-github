import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterCustomer from "./routers";
import { Provider } from 'react-redux';
import store from "./store/store";

function App() {

  return (
    <>
    <Provider store={store}>
      <Router>
        <RouterCustomer />
      </Router>
    </Provider>
    </>
    );
}

export default App;
