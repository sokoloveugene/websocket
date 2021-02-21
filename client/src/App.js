import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import Messages from "./components/Messages/Messages";
import CreateMessage from "./components/CreateMessage/CreateMessage";

const App = () => {
  useEffect(() => {
    store.dispatch({ type: "INITIALIZE_SOCKET" });
  }, []);

  return (
    <Provider store={store}>
      <CreateMessage />
      <Messages />
    </Provider>
  );
};

export default App;
