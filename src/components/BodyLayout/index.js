import './style.css';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import { CentralPanel } from './CentralPanel';

function App() {
  return (
    <div className="MainApp">
      <LeftPanel />
      <CentralPanel />
      <RightPanel />
    </div>
  );
}

export default App;