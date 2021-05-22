
import background from './images/background.jpg'
import Glasscard from './glasscard/glasscard'


function App() {
  return (
    <div className="App"
    style={{
       width: '100vw',
       height: '100vh',
       backgroundImage: `url(${background})`,
       backgroundPosition: 'center',
       backgroundSize: 'cover', 
       backgroundRepeat: 'no-repeat',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center'
     }}
    >
    <Glasscard />
      
    </div>
  );
}

export default App;
