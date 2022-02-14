# event loop 执行顺序:
  * 一开始整个脚本作为一个宏任务执行
  * 执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列
  * 当前宏任务执行完出队，检查微任务列表，有则一次执行，直到全部执行完
  * 执行浏览器UI线程的渲染工作
  * 检查是否有 ```Web Worker``` 任务，有则执行
  * 执行完本轮的宏任务，回到2，依次循环，直到红任务和微任务队列都为空

  微任务包括: ```MutationObserver``` ```Promise.then()或catch()``` 、```Promise为基础开发的其他技术，比如fetch API``` ```V8``` 的垃圾回收过程、```Node独有的process.nextTick```.
  
  宏任务包括: ```script```、```setTimeout```、```setInterval```、```setImmediate```、```I/O```、```UI rendering```.

  注意: 在所有任务开始的时候，由于宏任务中包括了 ```script```,所以浏览器会先执行一个宏任务，在这个过程中你看到的延迟任务(例如 ```setTimeout```) 将被放到下一轮宏任务中来执行

  ```
  setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
}, 0)
console.log('start')

'start'
'timer1'
'promise'
'timer2'
```