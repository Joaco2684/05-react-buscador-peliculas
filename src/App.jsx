import './App.css'
import { Movies} from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  const hanldeSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(
      new window.FormData(event.target)
    )
    
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={hanldeSubmit}>
          <input name="query" placeholder='Avenger, Star Wars ...' />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
