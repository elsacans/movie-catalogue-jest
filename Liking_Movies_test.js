Feature('Liking Movies');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('Showing empty liked movies', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
});
