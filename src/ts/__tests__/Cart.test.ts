import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('test add method of class Cart', () => {
  const buyableArray = [
    new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225),
    new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900),
    new Movie(1010, 'The Avengers', 1500, 'Мстители',
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/300x450',
      '2012', 'США', 'Avengers Assemble!', ['фантастика,боевик,фэнтези,приключения'], 137, true)
  ];

  const cart = new Cart();
  buyableArray.forEach((value => {
    cart.add(value);
  }));

  expect(cart.items).toEqual(buyableArray);
});

test('test calculateTotalCost method of class Cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 1500, 'Мстители',
    'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/300x450',
    '2012', 'США', 'Avengers Assemble!', ['фантастика,боевик,фэнтези,приключения'], 137, true));

  expect(cart.calculateTotalCost()).toBeCloseTo(4400);
});

test('test calculateTotalCostWithDiscount method of class Cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 1500, 'Мстители',
    'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/300x450',
    '2012', 'США', 'Avengers Assemble!', ['фантастика,боевик,фэнтези,приключения'], 137, true));

  expect(cart.calculateTotalCostWithDiscount(5)).toBeCloseTo(4180);
});

test('test delete method of class Cart', () => {
  const sourceCart = new Cart();
  sourceCart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  sourceCart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  sourceCart.add(new Movie(1010, 'The Avengers', 1500, 'Мстители',
    'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/300x450',
    '2012', 'США', 'Avengers Assemble!', ['фантастика,боевик,фэнтези,приключения'], 137, true));

  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  sourceCart.delete(1001);
  sourceCart.delete(1010);

  expect(sourceCart).toEqual(cart);
});


