class FavoriteMovieSearchPresenter {
    constructor({ favoriteMovies }) {
        this._listenToSeacrhRequestByUser();
        this._favoriteMovies = favoriteMovies;
    }

    _listenToSeacrhRequestByUser() {
        this._queryElement = document.getElementById('query');
        this._queryElement.addEventListener('change', (event) => {
            this._latestQuery = event.target.value;
            this._favoriteMovies.searchMovies(this._latestQuery);
        });
    }

    get latestQuery() {
        return this._latestQuery;
    }
}

export default FavoriteMovieSearchPresenter;