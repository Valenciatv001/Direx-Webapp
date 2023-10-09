import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';



interface Post {
  title: string;
  content: string;
  author: string;
}

const Post = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.alt}
          onClick={() => handleImageClick(index)}
        />
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={post.images[photoIndex].url}
          nextSrc={post.images[(photoIndex + 1) % post.images.length].url}
          prevSrc={post.images[(photoIndex + post.images.length - 1) % post.images.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + post.images.length - 1) % post.images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % post.images.length)}
        />
      )}
    </div>
  );
};

export default Post;