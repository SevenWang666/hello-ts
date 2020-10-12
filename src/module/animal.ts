class animal {
    name?:string;
    constructor(){
        console.log('初始化动物')
    
    }
    setName(name:string){
        this.name=name
    }
    getName(){
        return this.name
    }
}

class pig extends animal{
    constructor(name:string){
        super()
        this.setName(name)
       
        console.log(this.getName())
    }
}

//module.exports=pig
export default pig