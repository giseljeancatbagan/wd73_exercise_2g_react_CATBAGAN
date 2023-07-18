import Navbar from './components/Navbar.jsx'
import mainContainer from './components/mainContainer.jsx'
import SongList from './components/SongList.jsx';
import Footer from './components/Footer.jsx'

function App() {
 const songs = [
  {
    id: 1,
    title: 'Ikaw',
    duration: '4:45',
    artist: 'Yeng Constantino',
  },
  {
    id: 2,
    title: 'Miss Independent',
    duration: '3:53',
    artist: 'Ne-Yo',
  },
  {
    id: 3,
    title: 'Rainbow',
    duration: '5:20',
    artist: 'South Border',
  },
  {
    id: 4,
    title: 'Ngayoy Naririto',
    duration: '4:46',
    artist: 'Jay R',
  },
];

const songCardList = songs.map((song) => (
  <SongList key={song.id} title={song.title} duration={song.duration} artist={song.artist} />
));

   return ( 
      <>
    <Navbar />
    <mainContainer />
    { songCardList }
    <Footer />
    </>
   )
}

export default App
