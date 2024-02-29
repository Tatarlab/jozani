import DineroFactory from 'dinero.js';

class Dinero {
  _dinero: DineroFactory.Dinero;

  constructor(public options?: DineroFactory.Options) {
    this._dinero = DineroFactory(this.options);
  }

  toString = () => this._dinero.toFormat('$ 0,0.0');
}

export default Dinero;
