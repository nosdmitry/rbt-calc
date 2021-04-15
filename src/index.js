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

// document.querySelector('.myinput').oninput = function() {
//   var value = (this.value-this.min)/(this.max-this.min)*100
//   this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
// };

const flSquareRange = document.querySelector('#flat-square-range');
const flSquareInput = document.querySelector('#flat-square-input');
const flatRestRoom = document.querySelector('#flat-restroom');
const flatRestRoomSquareRange = document.querySelector('#flat-restroom-square-range');
const flatRestRoomSquareInput = document.querySelector('#flat-restroom-square-input');
const flatType = document.querySelector('#flat-type');
const flatElectricity = document.querySelector('#flat-electricity');
const constructionType = document.querySelector('#flat-constr-type');
const flatCeilings = document.querySelector('#flat-ceiling');
const flatFloor = document.querySelector('#flat-floor');
const flatDoors = document.querySelector('#flat-doors');
const flatEntranceDoor = document.querySelector('#flat-entrance-door');
const flatEntranceDoorConfirm = document.querySelector('.action-block__switch_type_confirm');

const total = document.querySelector('.calculate__footer-result-common_type_number');


/* menu */
const menuButton = document.querySelector('.header__button_type_menu');
const menuCloseButton = document.querySelector('.menu__close-button');
const menuContainer = document.querySelector('.menu');

const searchButton = document.querySelector('.header__button_type_search');
const searchMobileForm = document.querySelector('.header__search-form');
const searchFormClose = document.querySelector('.header__search-form-close');


/* menu */



function totalCount() {  

  let result 
    = (Number(flatType.value) * Number(flSquareRange.value)) // Тип помещения (+8500 || +6500 * S)
    + (Number(flatElectricity.value) * Number(flSquareRange.value)) // Электрика (+300 || +600 * S)
    + (Number(constructionType.value) * Number(flSquareRange.value)) // Тип ремонта (+1500 || +3000 * S)
    + (Number(flatRestRoom.value) * Number(flatRestRoomSquareRange.value)) // Санузел (+13000 * S санузла)
    + (Number(flatCeilings.value) * Number(flSquareRange.value)) // Потолки (+300 || +450 || +600 * S)
    + (Number(flatFloor.value) * Number(flSquareRange.value)) // Полы (+200 * S)
    + (Number(flatDoors.value) *8500); // Двери (+8500 шт)

    flatEntranceDoor.checked ? result += result / 100 * 5 : result; // Входная дверь +5% от общей суммы

    return result;
}

function showResult() {
  const result = totalCount();
  total.textContent = numberWithSpaces(result);
}

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}



searchFormClose.addEventListener('click', () => {
  searchMobileForm.classList.remove('header__search-form_type_visible');
});

searchButton.addEventListener('click', () => {
  searchMobileForm.classList.add('header__search-form_type_visible');
})

menuCloseButton.addEventListener('click', () => {
  menuContainer.classList.add('menu_type_hidden');
})

menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('menu_type_hidden');
});



flatRestRoom.addEventListener('input', showResult);
flatType.addEventListener('input', showResult);
flatElectricity.addEventListener('input', showResult);
constructionType.addEventListener('input', showResult);
flatCeilings.addEventListener('input', showResult);
flatFloor.addEventListener('input', showResult);
flatDoors.addEventListener('input', showResult);
flatEntranceDoor.addEventListener('input', (evt) => {
  evt.target.setAttribute('checked', false);
  if(flatEntranceDoor.checked) {
    flatEntranceDoorConfirm.textContent = "Да";
    showResult();
  } else {
    flatEntranceDoorConfirm.textContent = "Нет";
    showResult();
  }
});
flSquareRange.addEventListener('input', (evt) => {
  showResult();
  flSquareInput.value = evt.target.value;
});
flSquareInput.addEventListener('input', (evt) => {
  showResult();
  flSquareRange.value = evt.target.value;
});
flatRestRoomSquareInput.addEventListener('input', (evt) => {
  showResult();
  flatRestRoomSquareRange.value = evt.target.value;
});
flatRestRoomSquareRange.addEventListener('input', (evt) => {
  showResult();
  flatRestRoomSquareInput.value = evt.target.value;
});



showResult();