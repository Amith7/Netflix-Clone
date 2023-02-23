
import './App.css';
import Banner from './components/Banner/Banner';
import { action,comedy,original, trending} from './urls'
import NavBar from './components/Navbar/NavBar';
import RowPost from './components/RowPost/RowPost';
import YouTube from 'react-youtube';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>

      <RowPost  url={original}  title='Netflix Originals'/>
      <RowPost  url={trending}  title='Trending ' isSmall/>
      <RowPost   url={action} title='Action' isSmall/>
      <RowPost   url={comedy} title='comedy' isSmall/>
    </div>
  );
}

export default App;
