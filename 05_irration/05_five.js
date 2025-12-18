//================================using forEach with functions========================//
const coding = ['JavaScript', 'JAVA', 'Ruby'];
//     coding.forEach(function(lang){
//         //console.log(lang);
//     }
//     );

//     //coding.forEach(lang => console.log(lang));

// function printme(lang){
//     console.log(lang);
// }
//     coding.forEach(printme);

coding.forEach(function(lang, index, arr){
    //console.log(lang, index, arr);
}
);
const coding2 = [
    {
    lang: 'JavaScript', 
     file: 'js'
    },
    {
    lang: 'JAVA', 
     file: 'java'
    },
    {
    lang: 'Ruby', 
     file: 'rb'
    },
]
// coding2.forEach(function(item)
// {
//     console.log(item.lang,item.file);

// });
coding2.forEach(item =>{

     console.log(item.lang, item.file)
    }
    );
