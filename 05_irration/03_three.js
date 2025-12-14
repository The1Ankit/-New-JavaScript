
const arr=[1,2,3,4,5];
for(const n of arr)
{
  //  console.log(n);
}
//maps====
const map=new Map();
map.set('a',1);
map.set('b',2);
map.set('c',3);
for(const [key,value] of map)
{
    console.log(`${key} : ${value}`);
}