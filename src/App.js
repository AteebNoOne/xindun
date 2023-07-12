import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import RocketGif from './components/RocketGif/RocketGif';

function App() {
  return (
    <div className='bg'>
    <div className="App">
      <Header />
      <News />
        <RocketGif />
      </div>
    </div>
  );
}

export default App;
