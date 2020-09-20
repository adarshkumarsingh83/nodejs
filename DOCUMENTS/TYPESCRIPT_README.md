


### To install Type script 
* $ npm i typescript -g 

### to init the node 
* $ npm init

### to init typescirpt config 
* $ tsc --init 

### To compoile and run 
* $ npm run compile-typescript


---
## Basic Types

* Boolean
	* let varName: boolean = false;

* Number
	* let varDecimal: number = 6;
	* let varHex: number = 0xf00d;
	* let varBinary: number = 0b1010;
	* let varOctal: number = 0o744;
	* let varBig: bigint = 100n;

* String
	* let varName: string = "xxxx";
	* let varName: string = `xxxxxx`;

* Array
	* let numList: number[] = [1, 2, 3];
	* let list: Array<number> = [1, 2, 3];

* Tuple
	* let x: [string, number];
		* eg => x = ["xxx", 10];
		* x[0] => xxx
		* x[1] => 10


* Enum
	```
	enum Color {
	  Red = 1,
	  Green,
	  Blue,
	}
	let c: Color = Color.Green;
	let colorName: string = Color[2];
	```


* Any
```
 declare function funName(key:string):any;
 * function can reutn any vvalue 
```

* Void
```
function xxXX(): void {
  console.log("xxxxx");
}
```

* Never
	*  Function returning never must not have a reachable end point
```
function error(message: string): never {
  throw new Error(message);
}

```

* Object
	* object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined
```
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
```

* Type
```
let varName: unknown = "xxxxxxx";
let strLength: number = (varName as string).length;
or 
let strLength: number = (<string>varName).length;
```

---

# Interfaces
```
interface User{
	id: number;
	name: string;
}

function display(user: User){
	console.log(user.id);
	console.log(user.name);
}

let userObject ={10,'xxx'};

display(userObject);
```

## Interfaces Optional Properties
```
interface User{
	id: number;
	name: string;
	email?: string;
}

function display(user: User){
	console.log(user.id);
	console.log(user.name);
	if(user.email){
		console.log(user.email);
	}
}

let userObject ={10,'xxx'};
display(userObject);

let userObject ={10,'xxx','xxx@xxx'};
display(userObject);
```
## Interfaces Readonly Properties
```
interface Xxxx {
  readonly x: number;
  readonly y: number;
}
let p1: Xxxx = { x: 10, y: 20 };
p1.x = 5; // error!
```


## Interface Excess Property Checks
```
interface XxxxConfig {
  color?: string;
  width?: number;
  height?: number;
  [propName: string]: any;
}

let XxxxConfig = { width: 100 };
let XxxxConfig = { width: 100, opacity: 0.5 };
```

## Interface Extending Interfaces
```
interface Parent {
  var: string;
}

interface Child extends Parent {
  var2: number;
}

let child = {} as Child;
child.var1 = "xxx";
child.var2 = 10;
```

## Interface Extending Multiple Interfaces
```
interface Parent1 {
  var1: string;
}

interface Parent2 {
  var2: string;
}

interface Child extends Parent1, Parent2 {
  var3: number;
}

let child = {} as Child;
child.var1 = "xxx";
child.var2 = "xxx";
child.var3 = 10;
```

---

# Function 

##  Named function
```
function xxXxx(x, y) {
  return x + y;
}
```

## Anonymous function
```
let xxXxx = function (x, y) {
  return x + y;
};
```

## Function Types
```
function xxXxx(x: number, y: number): number {
  return x + y;
}

let xxXxx = function (x: number, y: number): number {
  return x + y;
};
```

## Optional Parameters
```
function xxXxx(firstName: string, lastName?: string) {
  if (lastName) {
  	return firstName + " " + lastName;	
  }
  else 
  	return firstName;
}
```

## Default Parameters
```
function xxXxx(firstName: string, lastName = "xxXxxx") {
  return firstName + " " + lastName;
}
```

## Rest Parameters
```
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Adarsh", "kumar", "singh", "Thankur");
or 
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
```

## this 
```
let varName = {

	arrayVar : ["xxx","xxx"],
	varArray: Array(size),
	functionName: function(){
		return () => {
			return { xxx: this. arrayVar[index]}
		}
	}
}

let xxxXxx = varName.functionName();
let yy = xxxXxx();
```

---

## Classes 
```
class Xxxx{
	varName: stirng;
	constructor(varName:jstring){
		this.varName=varName;
	}

	methodName(){
		return `some ${varName}`;
	}
}

let varObject = new Xxxx("xxxx");

```

## Inheritance
```
class Parent{
	varNameP: stirng;
	constructor(varName:jstring){
		this.varNameP=varName;
	}

	methodNameP(){
		return `P ${varNameP}`;
	}
}

class Child{

	varNameC: stirng;
	constructor(varName:jstring){
		super(varName);
		this.varNameC=varName;
	}

	methodNameC(){
		return `C ${varNameC}`;
	}
}

const varObject = new Child("xxx");
varObject.methodNameP();
varObject.methodNameC();
```


## Public, private, and protected modifiers
### Public by default

```
class Xxxx{
	public varName: stirng;
	constructor(varName:jstring){
		this.varName=varName;
	}

	methodName(){
		return `some ${varName}`;
	}
}

let varObject = new Xxxx("xxxx");
varObject.varname;
```
### Private 
```
class Xxxx{
	private varName: stirng;
	constructor(varName:jstring){
		this.varName=varName;
	}

	methodName(){
		return `some ${varName}`;
	}
}

let varObject = new Xxxx("xxxx");
varObject.varname; // not accessable 
```

### Protected 
```
class Parent{
	protected varNameP: stirng;
	constructor(varName:jstring){
		this.varNameP=varName;
	}

	methodNameP(){
		return `P ${varNameP}`;
	}
}

class Child{

	varNameC: stirng;
	constructor(varName:jstring){
		super(varName);
		this.varNameC=varName;
	}

	methodNameC(){
		return `P ${varNameP} C ${varNameC}`;
	}
}

const varObject = new Child("xxx");
varObject.methodNameP();
varObject.methodNameC();
varObject.varNameP; // not accessabel
```

## Readonly
```
class Xxxx{
	readonly varName: stirng;
	constructor(varName:jstring, readonly xxxVar: string){
		this.varName=varName;
	}

	methodName(){
		return `some ${varName}`;
	}
}

let varObject = new Xxxx("xxxx","xxxxx");
varObject.varname = 'xxxxx' // not possible
```

## Accessors
```
class Xxxx{
    
     _varName: string="xxx";
     
      get varName(): string {
      	  return this._varName;
      } 

      set varName(varName: string ){
      	 this._varName= varName;
      }

}

```

## Static 
```
class Xxxx{

	static  varName= { x: 0, y:0};

	constructor(varName: {x: number; y: number}){
		Xxxx.varName=varName;
	}

	methodName(){
		return `some ${Xxxx.varName}`;
	}
}
```

## Abstract Classes
