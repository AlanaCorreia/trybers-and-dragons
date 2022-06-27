import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static _instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 74;

    Orc._instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return this._instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}