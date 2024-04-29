//Функция генерирует контейнеры для фидов и постов и монтирует их в html
//Вынесена в отдельную функцию потому что может быть переиспользована с разными аргументами

//функция проверяет существует ли контейнер если нет то создает, и возвращает контейнер для элементов
export default (parantContainer ,content) => {

if(parantContainer.innerHTML !== '') return parantContainer.querySelector('ul');

const container = document.createElement('div');
container.classList.add('card' ,'border-0');

const title = document.createElement('div');
title.classList.add('card-body');

const heading = document.createElement('h2');
heading.classList.add('card-title' ,'h4');
heading.textContent = content; 
title.append(heading);

const list = document.createElement('ul');
list.classList.add('list-group','border-0' ,'rounded-0');

container.append(title, list);
parantContainer.append(container);

return list;
}