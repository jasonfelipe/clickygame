//Uses webpack's require.context to go through our images folder and uses regex to find files ending with image context.
//Maps over them to create an array, and then replaces the array number with the context. 

function importAll(r) {
    let images = [];

    //See that item.replace?
    //In this case, it replaces the item name (the image name), with the index, I don't know why it was made like this...
    //I sort of refactored and copy-pasta'd it.
    r.keys().map((item, index) => { images[item.replace(item, index)] = r(item); });
    return images;
  }
  
  const Images = importAll(require.context('../../public/images/characters', false, /\.(png|jpe?g|svg|gif)$/));
  
  export default Images; 