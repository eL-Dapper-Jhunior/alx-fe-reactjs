import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useRecipeStore from './components/recipeStore'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
omport 
import './App.css'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import EditRecipeForm from './components/EditRecipeForm'
import RecipeDetails from './components/RecipeDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>

  
      <AddRecipeForm />
      <DeleteRecipeButton />
      <EditRecipeForm />
      <RecipeDetails />
      <RecipeList />
      <useRecipeStore />
    </>
  )
}

export default App
