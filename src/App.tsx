import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'

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
      <Greet name='sathish'
      //  msgCount={10} 
       isLoggedIn={true} />
      {/*  <Person name = {personName} />
      <PersonList names = {nameList} /> */}
      <Status status='success' /> 
      <Oscar>
      <Heading>
        PlaceHolder text
      </Heading>
      </Oscar>
    </div>
  );
}

export default App;
