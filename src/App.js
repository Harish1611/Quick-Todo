import './App.css';
import TodoMain from './components/Todo/TodoMain';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div className="main">
      <div className="gradient">
      
      </div>
      </div>
      <Nav />
      <main className="app">    
        <TodoMain />
        </main>
        
        <Footer />

        </>
  );

}

export default App;
