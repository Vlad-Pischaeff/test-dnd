import './App.css';
import MainApp from './components/MainApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        test application
      </header>
      <main className="App-main">
        <MainApp />
      </main>
      <footer className="App-footer">
        <a href="https://github.com/Vlad-Pischaeff/test-dnd">
          <div class="App-footer-banner"></div>
        </a>
        vladislav pischaeff 2022 &copy;
      </footer>
    </div>
  );
}

export default App;