import { useState } from 'react'
import './App.css'

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>
    
    <button onClick={() => setHasLiked(true)}>
      Like
    </button>
    </div>
  )
}

const App = () => {


  return (
    <div className="card-container">
      <Card title="Dune Part One" />
      <Card title="American Fiction"/>
      <Card title="Wolfs"/>
    </div>
  )
}

export default App
