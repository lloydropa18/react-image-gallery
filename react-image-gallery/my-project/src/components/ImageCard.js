const ImageCard = ({image}) => {
    const tags = image.tags.split(',');
    console.log(tags)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="some random images" className="w-full" />
      <div className="px-6 py-4 font-bold text-purple-500 text-xl"> 
        Photo by {image.user}
      </div>
      <ul className="ml-6">
        <li>
          <strong>Views: </strong>
          {image.views}
        </li>
        <li>
          <strong>Downloads: </strong>
          {image.downloads}
        </li>
        <li>
          <strong>Likes: </strong>
          {image.likes}
        </li>
      </ul>
      <div className="px-6 py-4">
        {tags.map(tag => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
            </span>
        ))}

      </div>
    </div>
  )
}

export default ImageCard