
import './App.css';
import { useState } from 'react';
import data from'./data';


function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>
          {people.length}birthday today</h3>
          <list people={people}/>
          <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
   
    
  );
}

export default App;
