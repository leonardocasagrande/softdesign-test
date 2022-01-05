import Switcher from 'components/Switcher';
import { AppContextProvider } from 'contexts/AppContext';

function App() {
  return (
    <AppContextProvider>
      <Switcher />
    </AppContextProvider>
  );
}

export default App;
