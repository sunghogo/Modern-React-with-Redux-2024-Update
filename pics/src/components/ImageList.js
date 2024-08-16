/*
    Applying (State) Update to Lists:
        A) Delete and recreate entire list
            - Can be computationally expensive for long lists
        B) Modify existing list
            - Apply a "Key" to each element during mapping
            - Apply minimal set of change sto existing DOM elements
    
    Steps for Applying Update (Option B):
        0) Apply a "Key" to each elemnt during mapping step (We do this)
            - If we don't give key prop to elements in a list, React will show an error
        1) After re-rendering, compare the keys on each ImageShow to the keys from the previous render (React does this)
        2) Apply minimal set of changes to existing DOM elements (React does this)
    
*/

import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />;
  });

  return <div>{renderedImages}</div>;
}

export default ImageList;
