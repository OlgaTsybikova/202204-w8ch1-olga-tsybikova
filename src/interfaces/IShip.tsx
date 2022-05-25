interface IShip {
  name: string;
}

class Ship implements IShip {
  constructor(public name: string) {}
}
export default IShip;
