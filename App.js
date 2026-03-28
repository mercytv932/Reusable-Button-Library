import Button from './Button';
import './App.css';

function App() {
  return (
    <div style={{padding: '20px', display: 'flex', gap: '10px'}}>
      <Button text="Click me" onClick={() => alert('clicked!')}/>
       <Button text="Primary" variant="primary" onClick={() => alert('clicked')} />
       <Button text="Secondary" variant="secondary" onClick={() => alert('clicked')} />
       <Button text="Danger" variant="danger" onClick={() => alert('alert')} /> 
    </div>
  );
}

export default App;
