function promiseCreator(label){
	return new Promise(function(resolve, reject){
		setTimeout(() => resolve(label), 100);
  });
}

let promise = promiseCreator("When done!");


promise.
	then((result1) => new Promise((resolve, reject) =>  
		setTimeout(() => resolve(result1 + " " + 1), 200)))
  
  .then((result2) => new Promise((resolve, reject) =>
		setTimeout(() => resolve(result2 + " " + 2), 300)))
  
  
  .then((result3) => new Promise((resolve, reject) =>
		setTimeout(() => resolve(result3 + " " + 3), 400)))
    
	.then((result4) => console.log(result4 + " " + 4));
