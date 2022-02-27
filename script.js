const wrapper = document.querySelector('.container');
const ul = document.createElement('ul');
wrapper.append(ul);


list = [
  {
    name: 'Ivan',
    surname: 'Ivanov',
    quantity: 5,
  },
  {
    name: 'Georgy',
    surname: 'Georgiev',
    quantity: 3,
  },
  {
    name: 'Todor',
    surname: 'Todorov',
    quantity: 2,
  },
  {
    name: 'Monica',
    surname: 'Ivailova',
    quantity: 7,
  },
]

function createList(list, value) {
  
  list.forEach( item => {
    let li = document.createElement('li');
    let i = item.quantity;
    li.innerHTML = item.name + ' ' + item.surname + ' : ' + i;

    li.addEventListener('click', e => {
      e.target.innerHTML = item.name + ' ' + item.surname;
      e.target.innerHTML = e.target.textContent + ' : ' + i;
      i++;
      if(i > +value) {
        let box = document.createElement('div');
        box.style.color = 'red';

        box.textContent = `Gift for this buyer: ${item.name + ' ' + item.surname}`;
        discountApp(list, `${item.name + ' ' + item.surname}`);
        li.append(box);
      }
      return
    })
    ul.append(li);

  })
}
createList(list, '5');

function discountApp(list, winner) {
  if(winner != undefined) {
    console.log(`${winner} receives a gift`);
  }
  list.forEach( item => {
    if(list.quantity > 3) {
      console.log(`${item.name} + ${item.surname} receives discount 10%`);
    }
    if(list.quantity > 10) {
      console.log(`${item.name} + ${item.surname} receives discount 20%`);
    }

  })
}
discountApp(list)