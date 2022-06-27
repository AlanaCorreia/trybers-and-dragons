import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;

    Dwarf._instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return this._instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}