import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(()=> {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}+flowers&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
                setisLoading(false);
            })
            .catch(err => console.log(err))
    });
  return (
    <div className="container mx-auto">
        <ImageSearch searchText={(text) => setTerm(text)}/>
        {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
            {images.map(image => (
                <ImageCard image={image} key={image.id}/>
            ))}
        </div>}
    </div>
  );
}


export default App;
