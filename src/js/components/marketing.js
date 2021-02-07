const marketing = document.querySelector('.macketing');
let counter = 0;
let delay = 20000;
const data = [
  {
    title: 'title on product one',
    where: 'Moscow, Russia'
  },
  {
    title: 'title on product two',
    where: 'Kiev, Ukraine'
  },
  {
    title: 'title on product thri',
    where: 'Rome, Italy'
  }
]
if (marketing) {
  marketing.addEventListener('click', (e) => {
    if (e.target.classList.contains('macketing__btn')) {
      closeMacketing();
    }
  });

  const closeMacketing = () => {
    marketing.classList.remove('macketing--visible')
  };

  const changeMacketing = () => {
    closeMacketing();
    setTimeout(() => { marketing.classList.add('macketing--visible') }, delay - 15000)
    const stringTitle = `${data[counter].title} `;
    const stringWhere = `15 minutes ago ${data[counter].where}<br> Great Britain`;
    marketing.querySelector('.macketing__title').innerHTML = stringTitle;
    marketing.querySelector('.macketing__when-from').innerHTML = stringWhere;
    counter++;
    if (counter >= data.length) {
      counter = 0;
    }
  }

  setInterval(changeMacketing, delay);
}
