import './index.css';
import Flashcard from './components/Flashcard';
import Flashcardv2 from './components/Flashcardv2';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
   <h1 className="text-3xl font-bold underline text-center">Hello Mom!</h1>
   {/* <Flashcard /> */}
   <Flashcardv2 front="What is the chemical formula of glucose?" back="C6H12O6"/>
   </div>);
}

export default App;
