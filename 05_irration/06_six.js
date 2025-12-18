// const coding = ['JavaScript', 'JAVA', 'Ruby'];
// const value=coding.forEach((item)=> {
//     //console.log(item); 
//     return item;
// });
// console.log(value);

// const mynum=[1,2,3,4,5,6,7,8,9,10];
// const newnum=mynum.filter((num)=>num>4);
// console.log(newnum)


const books=[
    { title: 'Book One', author: 'Author A', genre: 'Fiction', year: 2001 },
    { title: 'Book Two', author: 'Author B', genre: 'Non-Fiction', year: 2005 },
    { title: 'Book Three', author: 'Author C', genre: 'Fiction', year: 2010 },
    { title: 'Book Four', author: 'Author D', genre: 'Science', year: 2015 },
    { title: 'Book Five', author: 'Author E', genre: 'Non-Fiction', year: 2020 },
    { title: 'Book Six', author: 'Author F', genre: 'Fiction', year: 2025 },
    { title: 'Book Seven', author: 'Author G', genre: 'Science Fiction', year: 2030 },
    { title: 'Book Eight', author: 'Author H', genre: 'Fiction', year: 2035 },
    { title: 'Book Nine', author: 'Author I', genre: 'Non-Fiction', year: 2040 },
]
// const fictionBooks=books.filter((book)=>book.genre==='Science');
// console.log(fictionBooks);
// const recentBooks=books.filter((book)=>{ return book.year>=2015});
// console.log(recentBooks);
const authorABooks=books.filter((book)=>{ return book.author.startsWith('Author A')});
console.log(authorABooks);