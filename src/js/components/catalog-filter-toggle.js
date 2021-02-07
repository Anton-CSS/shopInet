const catalogFilters = [...document.querySelectorAll('.catalog-filter')];
const catalogFiltersTop = [...document.querySelectorAll('.catalog-filter__top')];
const hideFiltres = document.querySelector('.hide-filtres');
const catalogFilterItems = [...document.querySelectorAll('.catalog-filter__item')];
const catalogFilterQuantitys = [...document.querySelectorAll('.catalog-filter__quantity')];
const catalogChoice = document.querySelector('.catalog-choice');
const customCheckboxs = [...document.querySelectorAll('.custom-checkbox__input')];
const catalogChoiceClean = document.querySelector('.catalog-choice__clean');

catalogFiltersTop.forEach(item => {
  item.addEventListener('click', (e) => {
    e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
    hideFiltres.style.display = 'block';
    if (catalogFilters.every(item => !item.classList.contains('catalog-filter--open'))) {
      hideFiltres.style.display = 'none';
    };
  })
});

hideFiltres.addEventListener('click', (e) => {
  catalogFilters.forEach(item => {
    item.classList.remove('catalog-filter--open');
    hideFiltres.style.display = 'none';
  });
})

catalogFilterQuantitys.forEach(item => {
  item.style.display = 'none';
})



catalogFilterItems.forEach(item => {
  item.addEventListener('change', (e) => {
    const catalogFilterQuantity = item.closest('.catalog-filter').querySelector('.catalog-filter__quantity');
    catalogFilterQuantity.style.display = 'inline';
    e.currentTarget.closest('.catalog-filter').classList.add('catalog-filter--open');
    let checked = item.querySelector('input').checked;

    if (checked) {
      catalogChoiceClean.style.display = 'inline';
      item.querySelector('.custom-checkbox').classList.add('active');
      catalogChoice.style.display = 'block';
      catalogFilterQuantity.textContent = (isNaN(parseInt(catalogFilterQuantity.textContent))) ?
        1 : parseInt(catalogFilterQuantity.textContent) + 1;
      const elem = document.createElement('button');
      elem.classList.add('catalog-choice__item');
      elem.classList.add('btn-reset');
      elem.innerHTML = `
        ${e.target.nextElementSibling.textContent}
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;"
          xml:space="preserve">
          <g>
            <g id="close">
              <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		" />
            </g>
          </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
      `;
      catalogChoice.insertAdjacentElement('afterbegin', elem);
    } else {
      item.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
      let elem = [...catalogChoice.children].find(item => item.textContent.trim() == e.target.nextElementSibling.textContent);
      elem.remove();
      catalogFilterQuantity.textContent = parseInt(catalogFilterQuantity.textContent) - 1;

      if (customCheckboxs.every(item => item.checked === false)) {
        hideFiltres.style.display = 'none';
        catalogChoiceClean.style.display = 'none';
      }

    }

    if (catalogFilterQuantity.textContent == 0) {
      catalogFilterQuantity.style.display = 'none';
    }
  })
});

catalogChoice.addEventListener('click', (e) => {
  if (e.target.classList.contains('catalog-choice__item')) {
    e.target.remove();
    catalogFilterItems.forEach(el => {
      if (el.textContent.trim() === e.target.textContent.trim()) {
        el.children[0].classList.remove('active');
        el.children[0].children[0].checked = false;
        el.parentElement.parentElement.previousElementSibling.children[0].children[1].textContent = +el.parentElement.parentElement.previousElementSibling.children[0].children[1].textContent - 1;

        if (el.parentElement.parentElement.previousElementSibling.children[0].children[1].textContent == 0) {
          el.parentElement.parentElement.previousElementSibling.children[0].children[1].style.display = 'none';
          el.closest('.catalog-filter').classList.remove('catalog-filter--open');
          hideFiltres.style.display = 'none';
        }
      }
    })
  }
  if (e.target.classList.contains('catalog-choice__clean')) {
    [...catalogChoice.children].forEach(item => {
      if (item.classList.contains('catalog-choice__clean')) {
        item.style.display = 'none';
      } else {
        item.remove();
      }
    });
    customCheckboxs.forEach(item => item.checked = false);
    catalogFilterQuantitys.forEach(item => {
      item.textContent = '';
      item.style.display = 'none';
    })
    catalogFilters.forEach(item => item.classList.remove('catalog-filter--open'));
    hideFiltres.style.display = 'none';
  }
});

if ([...catalogChoice.children].length == 1) catalogChoiceClean.style.display = 'none';