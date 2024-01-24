# javascript-rookie
```
[1,2,3].forEach(
    function test(v,i,a) { console.log(`${v} - ${i} - ${a} - ${this}`); }, 
    [8,8,8] 
);
[8,8,8] è il this che viene usato dentro alla funzione.
```
Output:
```
1 - 0 - 1,2,3 - 8,8,8
2 - 1 - 1,2,3 - 8,8,8
3 - 2 - 1,2,3 - 8,8,8
```