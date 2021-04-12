// class RangeInput {
//   constructor(minValue, maxValue, defaultValue, selector, result) {
//     this._minValue = minValue;
//     this._maxValue = maxValue;
//     this._selector = document.querySelector(selector);
//     this._currentValue = defaultValue;
//     this._result = result;
//     this._id = selector;
//   }

//   setCurrentValue() {
//     this._selector.value = this._currentValue;
//   }

//   getInputValues() {
//     return this._currentValue;
//   }

//   setEventListenters() {
//     this._selector.addEventListener('input', (evt) => {
//       this._currentValue = evt.target.value;
//       this.getInputValues();
//       console.log({
//         [this._id]: this._currentValue
//       })
//       return {
//         [this._id]: this._currentValue
//       }
//     })
//   }

// }

// export default RangeInput;