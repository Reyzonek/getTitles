const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  },
  {
    title: 'Book3',
    author: 'Name3'
  }
]



function getTheTitles() {
  let result = [];
  for (let i = 0; i < books.length; i++){   
    //let next = books[i].title;
    result.push(books[i].title);  
  }
  return result;
};
console.log(getTheTitles());
// Do not edit below this line
//module.exports = getTheTitles;