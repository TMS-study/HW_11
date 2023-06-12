//Task 1 

// У нас есть список постов на сервере ('https://jsonplaceholder.typicode.com/posts'). 
// И наша задача отрисовать текст этих постов на странице(вывести на консоль).

// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒 
// Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

// Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

// 15, 23, 7, 3

/* const url = 'https://jsonplaceholder.typicode.com/posts';


async function getPost() {
    const response = await fetch(url);
    return await response.json();
  }
  
  getPost().then((res) => console.log(res[15]));
  getPost().then((res) => console.log(res[23]));
  getPost().then((res) => console.log(res[7]));
  getPost().then((res) => console.log(res[3]));
  getPost().catch((res) => console.log('error'));

// */

const url = 'https://jsonplaceholder.typicode.com/posts';

async function getPost(index: any) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data[index];
  } catch (error: any) {
    console.log(new Error(error));
  }
}

(async () => {
  try {
    console.log(await getPost(15));
    console.log(await getPost(23));
    console.log(await getPost(7));
    console.log(await getPost(3));
  } catch (error: any) {
    console.log(new Error(error));
  }
})();

  //

 const url2 = 'https://jsonplaceholder.typicode.com/posts';

function getPost2() {
return fetch(url2)
.then(response => response.json());
}

getPost2()
.then(res => console.log(res[15]))
.catch(() => console.log('error'));

getPost2()
.then(res => console.log(res[23]))
.catch(() => console.log('error'));

getPost2()
.then(res => console.log(res[7]))
.catch(() => console.log('error'));

getPost2()
.then(res => console.log(res[3]))
.catch(() => console.log('error'));
 


//Task 2 

    // + Перейдите по ссылке `https://jsonplaceholder.typicode.com/`
    // + Во вкладке `Resources` лежит ключ `/todos` - Это именно те данные которые нам нужны
    // + Далее напишите две функции `getTodos` & `printTodos`
    //     + Функция `getTodos` делает запрос по указанному адресу и забирает данные. 
    //     + Функция `printTodos` создает список массив объектов, объект записывает id и title объекта с делом
    //     + Вывести полученный результат в консоль

const url3 = 'https://jsonplaceholder.typicode.com/todos';

async function getTodos() {
    const response2 = await fetch(url);
    return await response2.json();
}

function printTodos() {
  getTodos()
    .then((todos: { id: any; title: any; }[]) => {
      const todosList = todos.map((todo: { id: any; title: any; }) => ({
        id: todo.id,
        title: todo.title
      }));

      todosList.forEach((todo: { id: any; title: any; }) => {
        console.log(`ID: ${todo.id}, Title: ${todo.title}`);
      });
    });
}


printTodos();

