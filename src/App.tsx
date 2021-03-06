import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { LoggedIn } from './components/state/LoggedIn'
import { User } from './components/state/User'
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
      {/* <Greet name='sathish'
      //  msgCount={10} 
       isLoggedIn={true} /> */}
      {/*  <Person name = {personName} />*/}
      {/* <PersonList names = {nameList} />  */}
      {/* <Status status='success' /> 
      <Oscar>
      <Heading>
        PlaceHolder text
      </Heading>
      </Oscar> */}
      {/* <Button handleClick = {(event,id)=> {console.log('Button Clicked', event, id)}} /> */}
      {/* <Input value='' handleChange={(event)=> console.log(event)} /> */}
      {/* <Container styles={{border : '1 px solid black', padding: '1rem'}}/> */}
      {/* <LoggedIn /> */}
      <User />
    </div>
  );
}

export default App;
