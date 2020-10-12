"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class animal {
    constructor() {
        console.log('初始化动物');
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
        console.log(this.getName());
    }
}
//module.exports=pig
exports.default = pig;
//# sourceMappingURL=animal.js.map