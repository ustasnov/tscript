import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly ruName: string,
    readonly posterUrl: string,
    readonly year: string,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string[],
    readonly duration: number,
    readonly imax: boolean,
  ) { }
}