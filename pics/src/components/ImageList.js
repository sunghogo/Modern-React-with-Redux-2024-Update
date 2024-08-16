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
    
    Requirements for Keys:
        - Use whenever we have a list of elements (so every time we do a 'map')
        - Add the key to the TOP-MOST JSX element in the list (like wrapping divs)
        - Must be a string or number (objects will automatically converted to a string)
        - Should be unique for THIS LIST
        - Should be consistent across rerenders (don't randomly regenerate keys)
    
    IDs:
        - Generally reuse unique 'id' fetched from database 
        - If no ID:
            - Use index of the record (will lead to bugs when you update the list)
            - Generate a unique ID yourself
*/
import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
