import './index.scss';

import { menuButton, menuCloseButton, menuContainer, searchButton, 
  searchMobileForm, searchFormClose, flSquareRange, flSquareInput, flatRestRoomRangeBlock, 
  flatRestRoom, flatRestRoomSquareRange, flatRestRoomSquareInput, flatType, flatElectricity, 
  constructionType, flatCeilings, flatFloor, flatDoors, flatEntranceDoor, flatEntranceDoorConfirm, total
} from './utils/constants';


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


showResult();


searchFormClose.addEventListener('click', () => {
  searchMobileForm.classList.remove('header__search-form_type_visible');
});
searchButton.addEventListener('click', () => {
  searchMobileForm.classList.add('header__search-form_type_visible');
});
menuCloseButton.addEventListener('click', () => {
  menuContainer.classList.add('menu_type_hidden');
});
menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('menu_type_hidden');
});

flatRestRoom.addEventListener('input', (evt) => {
  if(evt.target.value != '0') {
    showResult();
    flatRestRoomRangeBlock.classList.remove('action-block_type_hidden');
  } else {
    flatRestRoomRangeBlock.classList.add('action-block_type_hidden');
    showResult();
  }
});
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
