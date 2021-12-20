import { useState } from 'react';
import './App.css';

function App() {
  const [note, setNote] = useState({
      content: '', author: ''
  });
function onNoteValueChange(event){
    const {name, value} = event.target;
    setNote((prevNote) => {
        return {
            ...prevNote,
            name:[value]
        }

    })
}
  return (
    <section className="app-section">
      <div className="app-container">
        <h3>กรอกข้อมูล</h3>
        <p>
            <textarea className="app1"
                rows="2"
                type= "text"
                placeholder='หมายเหตุ'
                value={note.Content}
                onChange={onNoteValueChange}
            />
        </p>
        <p>
            <input className="app2"
                type= "text"
                placeholder='โน๊ต'
                value={note.Author}
                onChange={onNoteValueChange}
            />
        </p>
      </div>

    </section>
  );
}

export default App;