import Switcher from 'components/Switcher';
import { AppContextProvider } from 'contexts/AppContext';
import { AuthContextProvider } from 'contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <Switcher />
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default App;
