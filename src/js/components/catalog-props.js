const catalogColumnsList = document.querySelector('.catalog-columns__list');
const catalogGridContent = document.querySelector('.catalog-grid__content');
const catalogColumnsBtns = [...document.querySelectorAll('.catalog-columns__btn')];
const customSelects = document.querySelectorAll('.custom-select');

catalogColumnsList.addEventListener('click', (e) => {
  if (e.target.classList.contains('catalog-columns__btn') || e.target.closest('catalog-columns__item')) {
    let count = e.target.textContent ?? e.target.currentTarget.dataset.columns;
    catalogGridContent.dataset.gridColumns = count;
    catalogColumnsBtns.forEach(item => {
      item.classList.remove('main-products__btn--current');
      e.target.classList.add('main-products__btn--current');
    })
  }
})

customSelects.forEach(item => {
  item.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('custom-select--open');
    if (e.target.matches('.custom-select__item')) {
      let text = e.target.textContent;
      e.currentTarget.querySelector('.custom-select__top').textContent = text;
    }
  })
})

customSelects.forEach(item => {
  item.addEventListener('focus', (e) => {
    e.currentTarget.classList.add('custom-select--open');
  })
})

customSelects.forEach(item => {
  item.addEventListener('blur', (e) => {
    e.currentTarget.classList.remove('custom-select--open');
  })
})