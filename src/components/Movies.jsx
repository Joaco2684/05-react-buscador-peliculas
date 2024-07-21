/* eslint-disable react/prop-types */
export function ListOfMovies({ movies }) {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.Title} />
                    </li>
                ))
            }
        </ul>
    )
}

export function NoMovieResults () {
    return (
        <p>No se encontraron pelícuas para esta busqueda</p>
    )
}

export function Movies({movies}) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies 
            ? <ListOfMovies movies={movies}/>
            : <NoMovieResults />
    )
}