import test1 from './test01.js' ;

function test(){
	// Rest properties
	let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
	console.log(x); // 1
	console.log(y); // 2
	console.log(z); // { a: 3, b: 4 }
	// Spread properties
	let n = { x, y, ...z };
	console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
	
	test1() ;
}
//执行所有的测试
test() ;