import { itActsAsFavoriteMovieModel } from "./contracts/favoriteMovieContract";

let favoriteMovies = [];

const FavoriteMovieArray = {
    getMovie(id) {
        if (!id) {
            return;
        }

        return favoriteMovies.find((movie) => movie.id == id);
    },

    getAllMovies() {
        return favoriteMovies;
    },

    putMovie(movie) {
        // eslint-disable-next-line no-prototype-builtins
        if (!movie.hasOwnProperty('id')) {
            return;
        }

        favoriteMovies.push(movie);
    },

    deleteMovie(id) {
        favoriteMovies = favoriteMovies.filter((movie) => movie.id !=id);
    },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
    // eslint-disable-next-line no-undef
    afterEach(() => {
        favoriteMovies = [];
    });

    itActsAsFavoriteMovieModel(FavoriteMovieArray);
});