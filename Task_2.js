const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
/*Получение данных*/
const data = JSON.parse(jsonString);
const list = data.list;

/*Запись данных в результирующий объект*/
const result = {
  name: list.name,
  age: list.age,
  prof: list.prof,  
};

for (var i = 0; i < data.list.length; i++) {
   var counter = data.list[i];
   console.log('list', counter);          }
