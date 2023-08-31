//Задание: Сохранение имени пользователя

//Создайте страницу, которая приветствует пользователя по имени.
//При первом посещении пользователю будет предложено ввести свое имя. 
//После ввода имени страница должна сохранить его в localStorage. 
//При последующих посещениях страницы имя пользователя должно автоматически подставляться в приветствие.

// let formData = {}
// const form = document.querySelector('form')

// const L = localStorage

// form.addEventListener('input', function (event) {
//     formData[event.target.name] = event.target.value
//     console.log(formData);

//     L.setItem('formData', JSON.stringify(formData))
// })

// if(L.getItem('formData')) {
//     formData = JSON.parse(L.getItem('formData'))
    
//     console.log(formData);
    
//     for(let name in formData) {
//         form.elements[name].value = formData[name]
//     }
// }


// Задание: Счетчик нажатий

// Создайте веб-страницу с кнопкой "Увеличить счетчик". 
// При каждом нажатии на кнопку счетчик должен увеличиваться на единицу
// и новое значение счетчика должно отображаться на странице.
// Используйте localStorage, чтобы счетчик сохранялся между посещениями страницы.

document.addEventListener("DOMContentLoaded", () =>{
    const clickBtn = document.getElementById('clickBtn')

    let clickBtnValue = parseInt(localStorage.getItem('clickBtn')) || 0
    clickBtn.textClickBtn = clickBtnValue

    L.addEventListener('click', () => {
        clickBtnValue++
        clickBtn.textClickBtn = clickBtnValue
    })

    localStorage.setItem('clickBtn', clickBtnValue)
})

//Задание: Создание списка покупок

//Создайте веб-страницу для списка покупок.
//Пользователь должен иметь возможность ввести продукты в текстовое поле и добавить их в список. 
//По нажатию на кнопку "Добавить" введенный продукт должен быть добавлен к списку, отображаемому на странице.
//Используйте localStorage, чтобы сохранять список покупок между посещениями страницы.


document.addEventListener('DOMContentLoaded', function () {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const shoppingList = document.getElementById('shoppingList');
  
    const List = JSON.parse(localStorage.getItem('shoppingList')) || [];
    renderList(List);
  
    addButton.addEventListener('click', function () {
      const newItem = itemInput.value.trim();
      if (newItem !== '') {
        List.push(newItem);
        localStorage.setItem('shoppingList', JSON.stringify(List));
        renderList(List);
        itemInput.value = '';
      }
    });
  
    function renderList(list) {
      shoppingList.innerHTML = '';
      list.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        shoppingList.appendChild(listItem);
      });
    }
  });
  