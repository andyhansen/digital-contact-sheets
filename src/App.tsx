import React from 'react';
import ContactPhoto from './components/ContactPhoto';
import './styles/App.scss';
import Photo from './models/Photo';

function App() {
  const photos = [1,2,3,4,5,6,7,8].map((elm, index) => <ContactPhoto key={index} />)

  return (
    <div className="App">
      {photos}
    </div>
  );
}

export default App;
