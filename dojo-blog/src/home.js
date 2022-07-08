import { useState } from 'react';

const Home = () => {

  const [name, setName] = useState('Mario');
  const [age, setAge] = useState('30')

  const handleClick = () => {
    setName("Luigi");
    setAge(99);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age }</p>
      <button onClick={handleClick}>Click me</button>
    </div>
   );
}
 
export default Home;