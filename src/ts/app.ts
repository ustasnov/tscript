import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'The Avengers', 1500, 'Мстители',
  'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/300x450',
  '2012', 'США', 'Avengers Assemble!', ['фантастика,боевик,фэнтези,приключения'], 137, true));

console.log(cart.items);
console.log(cart.calculateTotalCost()); //4400
console.log(cart.calculateTotalCostWithDiscount(5)); //4180
cart.delete(1001);
cart.delete(1010);
console.log(cart.items);
