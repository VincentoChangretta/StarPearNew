import { Header } from 'widgets/Header/ui/Header';
import { AppRouter } from './providers/router/AppRouter/AppRouter';
import './styles/App.css';
import './styles/Scroll.css';
import { Footer } from 'widgets/Footer';

function App() {
   return (
      <div className='app'>
         <Header />
         <main className='main'>
            <AppRouter />
         </main>
         <Footer />
      </div>
   );
}

export default App;
