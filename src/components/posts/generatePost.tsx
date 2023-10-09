import axios from 'axios';
import faker from 'faker';

const generatePost = () => {
  const title = faker.lorem.sentence();
  const content = faker.lorem.paragraphs();
  const images = [];
  for (let i = 0; i < 2 + Math.floor(Math.random() * 5); i++) {
    const imageUrl = faker.image.imageUrl();
    const imageAlt = faker.lorem.words();
    images.push({ url: imageUrl, alt: imageAlt });
  }
  return { title, content, images };
};

const generatePosts = async () => {
  const posts = [];
  for (let i = 0; i < 200; i++) {
    const post = generatePost();
    posts.push(post);
  }
  await axios.post('/api/posts/bulk', { posts });
};

generatePosts();