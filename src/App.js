import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import './App.css';

function App() {
  return (
    <div >
      <Header/>
      <main className='py-3'>
        <Container>
          {/* add ref for whoever is logged in */}
          <h4>Welcome Brooks</h4>
          <HomeScreen/>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
