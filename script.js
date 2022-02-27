const wrapper = document.querySelector('.container');
const ul = document.createElement('ul');
wrapper.append(ul);


list = [
  {
    name: 'Nikolay',
    surname: 'Shopov',
    quantity: 1,
  },
  {
    name: 'Gergana',
    surname: 'Stoicheva',
    quantity: 1,
  },
  {
    name: 'Stoicho',
    surname: 'Ivanchev',
    quantity: 4,
  },
  {
    name: 'Helena',
    surname: 'Denkova',
    quantity: 11,
  },
]

function createList(list, value) {
  
  list.forEach( item => {
    let li = document.createElement('li');
    let i = item.quantity;
    li.innerHTML = item.name + ' ' + item.surname + ' : ' + i;
    if(i > +value) {
      let box = document.createElement('div');
      box.style.color = 'red';

      box.textContent = `Gift for this buyer: ${item.name + ' ' + item.surname}`;
      
      discountApp(list, `${item.name + ' ' + item.surname}`);
      li.append(box);
    }

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
  
  for(let j = 0; j < list.length; j++) {
    if(list[j].quantity > 3 && list[j].quantity < 10) {
      console.log(`${list[j].name} ${list[j].surname} receives discount 10%`);
    }
    if(list[j].quantity > 10) {
      console.log(`${list[j].name} ${list[j].surname} receives discount 20%`);
    }
  }
}