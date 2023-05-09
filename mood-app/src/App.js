import { useState } from 'react';
import DisplayMood from './Components/DisplayMood/DisplayMood';
import MenuList from './Components/MenuList/MenuList';

function App() {
  // currentMood을 기준으로 setCurrentMood로 바꾼다
  const [currentMood, setCurrentMood] = useState('');

  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood} />
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;
