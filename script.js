class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Car {
    constructor(brand, year) {
      this.brand = brand;
      this.year = year;
    }
  }
  
  class Book {
    constructor(title, publicationDate) {
      this.title = title;
      this.publicationDate = publicationDate;
    }
  }
  
  function createObjects() {
    const people = [];
    const cars = [];
    const books = [];
  
    for (let i = 0; i < 3; i++) {
      const name = prompt("Введите имя человека: ");
      const age = parseInt(prompt("Введите возраст человека: "), 10);
      const person = new Person(name, age);
      people.push(person);
    }
  
    for (let i = 0; i < 3; i++) {
      const brand = prompt("Введите марку машины: ");
      const year = parseInt(prompt("Введите год выпуска машины: "), 10);
      const car = new Car(brand, year);
      cars.push(car);
    }
  
    for (let i = 0; i < 3; i++) {
      const title = prompt("Введите название книги: ");
      const publicationDate = prompt("Введите дату публикации книги: ");
      const book = new Book(title, publicationDate);
      books.push(book);
    }
  
    return [people, cars, books];
  }
  
  const [people, cars, books] = createObjects();
  
  document.writeln("Массив людей:");
  people.forEach((person) => {
    document.writeln(`Имя: ${person.name}, Возраст: ${person.age}`);
  });
  
  document.writeln("\nМассив машин:");
  cars.forEach((car) => {
    document.writeln(`Марка: ${car.brand}, Год выпуска: ${car.year}`);
  });
  
  document.writeln("\nМассив книг:");
  books.forEach((book) => {
    document.writeln(`Название: ${book.title}, Дата публикации: ${book.publicationDate}`);
  });
      