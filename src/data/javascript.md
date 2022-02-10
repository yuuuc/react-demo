1. let 声明的范围是块作用域，而 var 声明的范围是函数作用域 ， const 声明块作用域，区别于let 是赋值后地址值不可再发生改变
 
```
var : 

 if (true) {
  var name = 'Matt';
  console.log(name); // Matt
 }
 console.log(name); // Matt
```

``` 
let :

 if(true){
     let age = 26;
     console.log(26);
 }
 console.log(age); // ReferenceError: age没有定义
```
2. 基本数据类型 Undefined、Null、Boolean、Number、String、Symbol(符号)，基本类型检查使用 typeof 
   1. Undefined 当 let 或 var 初始化了但未赋值就为 undefined
   2. Null 表示一个空的对象
   3. Boolean true 或 false ; Number 类型的 0，NaN 是false ; Undefined N/A(不存在) 是true ， undefined 为 false
   4. Number 类型 0开头为8进制 ，0x开头16进制；最小值得 Number.MIN_VALUE , 最大值为Number.MAX_VALUE ; 任何无法表示的正数为 Infinity(无穷)， 任何无法表示的负数为 ： -Infinity(负无穷大) ，要确定一个数是不是有限大小使用 isFinite() 函数
   5. String.raw 例子 
    ``` 
     console.log(`\u00A9\`) // ©
     console.log(String.raw`\u00A9\`) // \u00A9 
    ```
3. 复杂数据类型 Object，复杂类型检查对象名称 instanceof     
