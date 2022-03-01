const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis']
};

console.log(obj);

// serializing
const json = JSON.stringify(obj);
console.log(typeof json, json);
// 들여쓰기
const json2 = JSON.stringify(obj, null, 2);
console.log(json2);

const json3 = JSON.stringify(obj, null, 2);
function filter(key, value) {
  return typeof value === 'number' ? undefined : value;
}
const filerShow = JSON.stringify(obj, filter, 2);
console.log(filerShow);

const todos =[
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JavaScript', completed: false },
];

const json4 = JSON.stringify(todos, null, 2);
console.log(json4);

// deserializing
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
const parsed2 = JSON.parse(json4);
console.log(typeof parsed2, parsed2);