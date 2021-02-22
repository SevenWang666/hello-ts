interface Point {
    readonly x: number;
    readonly y: number;
}
type aliasString =String;
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}
class animal implements Point {
    public name?:aliasString
    private age?:number
    public fileType?:FileAccess
    x:number
    y:number
    constructor(){
        this.name='name'
        this.age=123
        this.x=1
        this.y=2
        console.log('初始化动物')
    
    }
    setFileType(value:FileAccess){
        this.fileType=value
    }
    isWrite(){
        return this.fileType===FileAccess.Write
    }
    static getStaticName(){
        return 'pig'
    }
    setName(name:string){
        this.name=name
    }
    getName(){
        return this.name
    }
}
namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}

import polygons = Shapes.Polygons; //但它还适用于类型和导入的具有命名空间含义的符号。
// 重要的是，对于值来讲， import会生成与原始符号不同的引用，所以改变别名的var值并不会影响原始变量的值。
class pig extends animal{
    constructor(name:string){
        super()
        this.setName(name)
        this.setFileType(FileAccess.Write)
        console.log(this.isWrite())
        console.log(this.getName())
    }
}

//module.exports=pig
export default pig