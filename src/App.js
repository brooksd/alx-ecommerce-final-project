import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          {/* add ref for whoever is logged in */}
          <h4>Welcome Brooks</h4>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
