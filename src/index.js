import './index.scss';
// import RangeInput from './components/RangeInput';
// import TextInput from './components/TextInput';
// import Result from './components/Result';

// const allData = {
//   '#flat-square-range': 0,
//   '#flat-restroom-square': 0,
// }

// const flSquareRange = new RangeInput(10, 200, 30, '#flat-square-range', result);
// flSquareRange.setCurrentValue();
// flSquareRange.setEventListenters();

// const restRoomSquareRange = new RangeInput(2, 20, 5, '#flat-restroom-square', result);
// restRoomSquareRange.setCurrentValue();
// restRoomSquareRange.setEventListenters();

// const result = new Result({
//   data: allData,
//   setData: () => {
//     const flatSq = flSquareRange.setCurrentValue();
//     return {
//       '#flat-square-range': flatSq['#flat-square-range'],
//     }
//   }
// }, '.calculate__footer-result-common_type_number');

// result.showData();


// const flSquareInput = new TextInput(10, 200, flSquareRange.getInputValues(), '#flat-square-input');
// flSquareInput.setEventListenters();

// action-block__range

document.querySelector('.myinput').oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
};

const flSquareRange = document.querySelector('#flat-square-range');
const flSquareInput = document.querySelector('#flat-square-input');
const restRoomSquareRange = document.querySelector('#flat-restroom-square');
const flatType = document.querySelector('#flat-type');
const flatElectricity = document.querySelector('#flat-electricity');
const constructionType = document.querySelector('#flat-constr-type');

const total = document.querySelector('.calculate__footer-result-common_type_number');



flSquareRange.addEventListener('input', (evt) => {
  showResult();
  flSquareInput.value = evt.target.value;
});
flSquareInput.addEventListener('input', (evt) => {
  showResult();
  flSquareRange.value = evt.target.value;
});
restRoomSquareRange.addEventListener('input', showResult);
flatType.addEventListener('input', showResult);
flatElectricity.addEventListener('input', showResult);
constructionType.addEventListener('input', showResult);

function totalCount() {
  console.log('flat sqaure', Number(flSquareRange.value));
  console.log('flatType', Number(flatType.value));
  console.log('toilet sqaure', Number(restRoomSquareRange.value));
  console.log('constr type', Number(constructionType.value) * Number(flSquareRange.value));


  const result 
    = (Number(flSquareRange.value) * Number(flatType.value)) // Тип помещения (+8500 / +6500 за м кв)
    + (Number(flatElectricity.value) * Number(flSquareRange.value))
    + (Number(constructionType.value) * Number(flSquareRange.value));

    // + Number(restRoomSquareRange.value)

    return result;
}

function showResult() {
  const result = totalCount();
  total.textContent = numberWithSpaces(result);
}


function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

showResult();