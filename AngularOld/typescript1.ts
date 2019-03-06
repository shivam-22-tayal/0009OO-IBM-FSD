console.log('Hello');

const execute=(action:string,x:number,y:number){
switch(action){
   
    case 'ADD':
    result=_add(x,y)
    break
    case 'SUB':
    result=diff(x,y)
    break
    case 'MUL':
    result=mul(x,y)
    break

}
}
const _add=(x:number,y:number)=>{
    return  x+y
}
const diff=(x:number,y:number)=>{
    return  x-y
}
const mul=(x:number,y:number)=>{
    return  x*y
}
let _Action=
let _x=10
let _y=5

const result= execute(_action,_x,_y)
console.log('${_action} :: ${_result}')
