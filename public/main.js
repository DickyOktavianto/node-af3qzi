// console.info('hai js');

// buat sebuah array yang meanampung banyak objek

let noteData = [
  {
    id: 1,
    note: 'ini adalah note pertama',
  },
  {
    id: 2,
    note: 'ini adalah note kedua',
  },
  {
    id: 3,
    note: 'ini adalah note ketiga',
  },
  {
    id: 4,
    note: 'say hello',
  },
  {
    hi: 78,
    ne: 'ggd',
  },
];
console.info(noteData);

//tangkap elemen root dari html
let root = document.getElementById('root');

//buat element dengan string
let Card = function (content) {
  return `
    <div class="card"> ${content}</div>`;
};

let Card2 = function (id, content) {
  return `
    <div class="card">  ${(id, content)}</div>`;
};

let Card3 = function (id, ne, content) {
  return `
    <div class="card"> ${(id, ne, content)}</div>`;
};

// render object padda array ke halaman html
noteData.forEach((elem) => {
  // console.info(elem);

  root.innerHTML += Card3(elem.ne, elem.id, elem.note);
});
