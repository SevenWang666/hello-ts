"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
class animal {
    constructor() {
        this.name = 'name';
        this.age = 123;
        this.x = 1;
        this.y = 2;
        console.log('初始化动物');
    }
    setFileType(value) {
        this.fileType = value;
    }
    isWrite() {
        return this.fileType === FileAccess.Write;
    }
    static getStaticName() {
        return 'pig';
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class pig extends animal {
    constructor(name) {
        super();
        this.setName(name);
        this.setFileType(FileAccess.Write);
        console.log(this.isWrite());
        console.log(this.getName());
    }
}
//module.exports=pig
exports.default = pig;
//# sourceMappingURL=animal.js.map