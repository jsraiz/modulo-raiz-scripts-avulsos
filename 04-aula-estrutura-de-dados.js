const lista = ['arroz', 'feijão', 'sal'];
const collection = [
  { id: '123', name: 'Ayrton' },
  { id: '223', name: 'José' }
];

const user = { name: 'Ayrton' };

console.log(collection.find(function(u) {
  return u.id === '223'
}));

const users = {
  '123': { id: '123', name: 'Ayrton' },
  '223': { id: '223', name: 'José' }
};

users['213'] = { id: '213', name: 'Maria' };

users['223']

const m = new Map
const wp = new WeakMap
const s = new Set;
const ws = new WeakSet


