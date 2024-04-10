console.log('first');
setTimeout(() => {  //this is asynchronous it gets off loaded to the browser
  console.log('second')
}, 0)
console.log('third');