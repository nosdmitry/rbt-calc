class TextInput {
  constructor(minValue, maxValue, defaultValue, selector) {
    this._minValue = minValue;
    this._maxValue = maxValue;
    this._selector = document.querySelector(selector);
    this._currentValue = defaultValue;
  }

  getInputValues() {
    console.log(this._currentValue);
    return this._currentValue;
  }

  setEventListenters() {
    this._selector.addEventListener('input', (evt) => {
      this._currentValue = evt.target.value;
      this.getInputValues();
    })
  }
}

export default TextInput;