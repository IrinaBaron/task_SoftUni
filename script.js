const wrapper = document.querySelector('.container');
const ul = document.createElement('ul');
wrapper.append(ul);


list = [
  {
    name: 'Ivan',
    surname: 'Ivanov',
  },
  {
    name: 'Georgy',
    surname: 'Georgiev',
  },
  {
    name: 'Todor',
    surname: 'Todorov',
  },
  {
    name: 'Monica',
    surname: 'Ivailova',
  },
]

function createList(list, value) {
  
  list.forEach( item => {
    let li = document.createElement('li');
    let i = 1;
    li.innerHTML = item.name + ' ' + item.surname + ' '+ ' coffee';

    li.addEventListener('click', e => {
      
      e.target.innerHTML = item.name + ' ' + item.surname + ' '+ ' coffee';
      e.target.innerHTML = e.target.textContent + ' : ' + i;
      i++;
      if(i > +value) {
        let box = document.createElement('div');
        box.style.color = 'red';

        box.textContent = `Gift for this buyer: ${item.name + ' ' + item.surname}`;
        li.append(box);
      }

      return
    })
    ul.append(li);

    
  })
}
createList(list, '5');
