import Global from './styles/global';
import { RoutesMain } from './routes';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Global/>
      <RoutesMain/>
    </AuthProvider>
  );
}

export default App;
