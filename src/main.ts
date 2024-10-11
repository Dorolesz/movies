import 'bootstrap/dist/css/bootstrap.css'

class Movie {
  constructor(
    public title: string,
    public duration: number,
    public genres: string[]
  ) {}
}

const movies: Movie[] = [
  new Movie("Inception", 148, ["Sci-Fi","Action"]),
  new Movie("The Godfather", 175, ["Crime","Drama"]),
  new Movie("Interstellar", 169, ["Adventure","Drama","Sci-Fi"])
];

function displayMovies(movies: Movie[]) {
  const tableBody = document.getElementById('tablazatBody');
  if (tableBody) {
    tableBody.innerHTML = '';
    movies.forEach(movie => {
      const tr = document.createElement('tr');

      const td1 = document.createElement('td');
      td1.textContent = movie.title;
      tr.appendChild(td1);
      
      const td2 = document.createElement('td');
      td2.textContent = movie.duration.toString();
      tr.appendChild(td2);
      
      const td3 = document.createElement('td');
      td3.textContent = movie.genres.join(', ');
      tr.appendChild(td3);
      
      tableBody.appendChild(tr);
    });
  }
}

function addMovie(event: Event) {
  event.preventDefault(); // Megakadályozza az űrlap alapértelmezett elküldését

  const titleInput = document.getElementById('movieTitle') as HTMLInputElement;
  const durationInput = document.getElementById('movieDuration') as HTMLInputElement;
  
  const title = titleInput.value;
  const duration = parseInt(durationInput.value);

  if (title && duration) {
      movies.push(new Movie(title, duration, [])); // Üres műfajok
      titleInput.value = '';
      durationInput.value = '';
      displayMovies(movies); // Újratölti a táblázatot
  }
}

window.onload = () => {
  displayMovies(movies);
  const form = document.getElementById('movieForm') as HTMLFormElement;
  form.addEventListener('submit', addMovie);
};