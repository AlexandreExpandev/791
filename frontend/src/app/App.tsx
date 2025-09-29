import { AppProviders } from './providers';

/**
 * @component App
 * @summary Root application component that wraps the entire application with necessary providers.
 * @type ui-component
 * @category core
 */
function App() {
  return <AppProviders />;
}

export default App;
