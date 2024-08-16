/*
    State as Props:
        - When you update state, the component and ALL OF ITS CHILDREN are rerendered
        - From perspective of parent component, 'images' is state
        - From the perspective of child component, 'images' is prop
*/

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    // const result = await searchImages(term);
    const result = [];
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
