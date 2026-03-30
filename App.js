import Button from './Button';
import './App.css';

function App() {
  return (

 <div style={{padding: '20px'}}>
<h2>Variants</h2>
<div style={{display: 'flex', gap: '10px'}}>

  <Button text="Primary" variant="primary" size="medium" onClick={() => alert('clicked!')} />
  <Button text="Secondary" variant="secondary" size="medium" onClick={() => alert('clicked!')} />
  <Button text="Danger" variant="danger"  size="medium" onClick={() => alert('alert')} />

</div>


<h2>Sizes</h2>
<div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>

    <Button text="Small" variant="primary" size="small" onClick={() => alert('clicked!')} />
    <Button text="Medium" variant="secondary" size="medium" onClick={() => alert('clicked!')} />
    <Button text="Large" variant="danger"  size="large" onClick={() => alert('alert')} />

</div>


<h2>States</h2>
<div style={{display: 'flex', gap: '10px'}}>

  <Button text="Disabled" variant="primary" size="medium" disabled={true} onClick={() => alert('clicked!')} />
  <Button text="Submit" variant="secondary" size="medium" isLoading={true} onClick={() => alert('clicked!')} />

</div>


<h2>Icons</h2>
<div style={{display: 'flex', gap: '10px'}}>

    <Button text="Delete" variant="danger" size="medium" icon="🗑️" onClick={() => alert('clicked!')} />

</div>


    </div>
  );
}

export default App;
