import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'

function App() {
  const personName = {
    fName : 'Sathish',
    lName : 'Madhavan'
  }
  const nameList = [
    {fName : 'Sathish', lName : 'Madhavan'},
    {fName : 'Ram', lName : 'Kumar'},
    {fName : 'Ragu', lName : 'Raj'}
  ]
  return (
    <div className="App">
      <Greet name='sathish' msgCount={10} isLoggedIn={false} />
      <Person name = {personName} />
      <PersonList names = {nameList} />
    </div>
  );
}

export default App;
