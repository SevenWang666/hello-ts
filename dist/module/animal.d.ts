declare class animal {
    name?: string;
    constructor();
    setName(name: string): void;
    getName(): string | undefined;
}
declare class pig extends animal {
    constructor(name: string);
}
export default pig;
