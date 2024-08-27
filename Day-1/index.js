(function() {
const containerDropdowns = document.querySelector('.flex-container-controls')
                               .querySelectorAll('select');
const containerInputs = document.querySelector('.flex-container-controls')
                            .querySelectorAll('input');
const itemDropdowns =
    document.querySelector('.flex-item-controls').querySelectorAll('select');
const itemInputs =
    document.querySelector('.flex-item-controls').querySelectorAll('input');

const flexContainer = document.querySelector('.flex-container');
const flexItems = document.querySelectorAll('.flex-item');

let activeItemIndex = 0;

const handleContainerControlOptionChange = (e) => {
  const property = e?.currentTarget?.id;
  const value = e?.currentTarget?.value;

  if (property && value) {
    switch (property) {
    case 'gap':
      flexContainer.style[property] = `${value}rem`;
      break;
    default:
      flexContainer.style[property] = value;
      break;
    }
  }
};

const handleItemControlOptionChange = (e) => {
  const property = e?.currentTarget?.id;
  const value = e?.currentTarget?.value;

  if (property && value) {
    switch (property) {
    case 'flex-basis':
      flexItems[activeItemIndex].style[property] = `${value}px`;
      break;
    default:
      flexItems[activeItemIndex].style[property] = value;
      break;
    }
  }
};

const handleItemClick = (index) => { activeItemIndex = index; };

containerDropdowns.forEach((dropdown) => dropdown.addEventListener(
                               'change', handleContainerControlOptionChange));
containerInputs.forEach((input) => input.addEventListener(
                            'change', handleContainerControlOptionChange));
itemDropdowns.forEach((dropdown) => dropdown.addEventListener(
                          'change', handleItemControlOptionChange));
itemInputs.forEach(
    (input) => input.addEventListener('change', handleItemControlOptionChange));
flexItems.forEach((item, index) => item.addEventListener(
                      'click', () => handleItemClick(index)));
})()