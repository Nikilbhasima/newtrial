console.log("hello world")
console.log(2+2)
console.log(2+2+4)
num=2+2
console.log(num)
console.log(num+10)
let name="nikil bhasima"
console.log(name)
let radius=10
const pi=3.14
radius=9
let area
area=pi*radius*radius
console.log(area)
console.log(typeof area)
let b=0xa
console.log(b)
let a=1e10
console.log(a)
console.log(Number.MAX_VALUE)
let r=33333333333333333333333333333333333
console.log(r)

let word="nik\ni\tl"
let word2="bhas\bima"
console.log(word2)
console.log(word+" "+word2)
let bool=5>9
console.log(bool)

let mmm="ni\"k\"il"
console.log(mmm)

let s=2;

console.log(s,typeof s)
 let d= String(10)
 console.log(typeof d)
  let f=Number("time")
  console.log(typeof f)

  let jk=10
  let result
   result=jk%2===0? "even" :"odd"
   console.log(result)
//creating object,it is similar to structure in c programming but till bit different while declareing
   let yeah={
     name:'nikil',
     surname:'nabin',
     math:10,
     laptop:{
        brand:'dell',
        cpu:'i9 11th gen',
        gpu:'rtx 4090',
     }
   }
   for(let key in yeah){
    console.log(key,yeah[key])
   }


    // console.log(yeah.laptop.brand);
    let detail={
      name:'salman khan',
      age:50,
      status:'randi bhadwa',
      crush:'ashwarya katrina jackleen',
      film:{
        best:'tere naam',
        flop:"kisika vai kisika jan",
        favourate:'wanted',
      }

    }
console.log('\n')
  console.log(detail.crush)
  //using loop to print all the value of object
  for(let key in detail){
    console.log(key,detail[key])
  }

  function use(num5){
   return(num5)
  }
let num5=89;
let result0=  use(num5);
console.log(result0)
  
//function return
function greet(){
  return("hello univers");

}

let str=greet();
console.log(str);

//passing argument
function multiplicationTable(n){
  for(let i=1;i<=10;i++){
    console.log('${i}*${n}='+i*n);
  }
}

multiplicationTable(8);

//function expression
let add=function(num1,num2){
  return num1+num2;
}
//  let value2=add(4,5);
let value2=add;
let value=value2(2,3);
console.log(value);

//local variable
//those variable which are declared outside of the function is called local variable which cant be access outside the funcition
//gobal variable
//gobal variable are those type of variable which can be access from any place.it has no boundary

//arrow  (=>)
 
/*let zenitsu=function(num10,num11){  
  return num10+num11;
}

let nejuko=zenitsu;
console.log(nejuko(7,9));

*/

let inosuke=(tanjiro)=>tanjiro*10;//if you have only one statement we dont have to use curly bracket and even return if the function is returning something
let giyu=inosuke;
console.log(giyu(8));

//method
//if the function is defined inside the object is called method or method is simply a fucntion
 let computer={
  cpu:'i9',
  brand:'asus',
  ram:'16gb',
  affordable:function(){
    console.log('tere aukat se bahar hey');
  }
 }
//since the function is inside the object so it should be called with respect to object"computer"
 computer.affordable();

