/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const woman ={
    species:'human',
    name:'Nika',
    legs:2,
    hands:2,
    gender: 'female',
    saying:'I love my cat',
};
const man = {
    species: 'human',
    name:'Kurt',
    legs:2,
    hands:2,
    gender:'male',
    saying:'I love my dog',
};
const dog = {
    species: 'dog',
    name: 'Grey',
    legs: 4,
    hands : 0,
    gender:'male',
    saying: 'wooooof',
};
const cat = {
    species: 'cat',
    name: 'Assol',
    legs: 4,
    hands: 0,
    gender: 'female',
    saying: 'murrr',
};

const catwoman ={
    species:'catwoman',
    name:'Catwoman',
    legs:2,
    hands:2,
    gender:'female',
    saying: cat.saying,
}
function printObject(obj){
    print('<em> ' + obj.species + '</em> - <strong>' + obj.name + '</strong>; ' + obj.gender + '; ' +
    obj.legs + '; ' + obj.hands + '; ' + obj.saying + '; ');
}
// ======== OUTPUT ========
printObject(dog);
printObject(cat);
printObject(woman);
printObject(man);
printObject(catwoman);
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
