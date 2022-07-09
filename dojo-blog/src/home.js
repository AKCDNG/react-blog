import { useState, useEffect} from 'react';
import BlogList from './blogList';

const Home = () => {

  const [name, setName] = useState('Mario');

  const [blogs, setBlogs] = useState ([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]); 

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log("Use Effect Ran")
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="New Blogs" handleDelete={handleDelete} />
      <p>{ name }</p>
      <button onClick={() => setName('Luigi') }>click me</button>
    </div>
   );
}
 
export default Home;