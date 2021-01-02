// const isEven = n => !(n % 2);
// function isEven(n) {
// 	return (n % 2 === 0)
// }
// const isEven = n => n % 2 ? false : true; (edited) 

// function comp(str1, str2) {
// 	return str1.length === str2.length;
// }
// const comp = (str1, str2) => str1.length === str2.length;
// function comp(str1, str2) {
// 	if(str1.length === str2.length){
// 		return true;
// 	} else{
// 		return false;
// 	}
// }
function divisible(num) {
	return num % 100 === 0;
}
// function divisible(num) {
// 	if(num % 100 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// const divisible = num => num % 100 === 0;
// function divisible(num) {
// 	return num%100 == 0? true: false;
// }


// const divisibleByB = (a, b) =>{
//     while(a % b !== 0) a += 1;
//     return a;
// }
// function divisibleByB(a, b) {
// 	 for(i= a+1; i>a; i++){
// 		 if(i % b === 0){
// 			 return i;
// 		 }
// 	 }
// }


// function helloWorld(num) {
// 	return num % 15 === 0 ? "Hello World" : num % 3 === 0 ? "Hello" : "World";
// }
// function helloWorld(num) {
// 	if(num %5 == 0 && num %3 == 0) return "Hello World";
// 	else if(num %3 == 0) return "Hello";
// 	else if(num %5 == 0) return "World";
// }


// const wordLengths = arr => arr.map(word => word.length);
// function wordLengths(arr) {
// 	return arr.map(x => x.length);
// }
// function wordLengths(arr) {
// 	for(i=0; i< arr.length; i++){
// 		arr[i]=arr[i].length;
// 	}
// 	return arr;
// }


// const getFilename = p => p.split('/').slice(-1)[0]
// function getFilename(path){
// 		return path.split('/').pop();
// }
// function getFilename(path) {
// 	let name = path.split('/')
// 	let pop = name.pop()
// 			return pop
												
// }
// function getFilename(path) {
// 	const words = path.split('/');
// 	return words.pop();
// }





