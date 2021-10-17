import { from, map, merge, of } from 'rxjs';

const persons = [
  { name: 'Alaa', job: 'Frontend Developer', age: 30 },
  { name: 'Ahmed', job: 'Backed Developer', age: 25 },
  { name: 'Mohab', job: 'Fullstack Developer', age: 32 },
];
const newPerson = [{ name: 'Sara', job: 'Frontend Developer', age: 27 }];
const anotherNewPerson = [
  { name: 'Ayman', job: 'Frontend Developer', age: 21 },
];

const persons$ = from(persons);
const newPerson$ = from(newPerson);
const anotherNewPerson$ = from(anotherNewPerson);

merge(persons$, newPerson$, anotherNewPerson$).subscribe(console.log);
