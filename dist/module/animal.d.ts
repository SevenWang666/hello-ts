interface Point {
    readonly x: number;
    readonly y: number;
}
declare type aliasString = String;
declare enum FileAccess {
    None = 0,
    Read = 2,
    Write = 4,
    ReadWrite = 6,
    G
}
declare class animal implements Point {
    name?: aliasString;
    private age?;
    fileType?: FileAccess;
    x: number;
    y: number;
    constructor();
    setFileType(value: FileAccess): void;
    isWrite(): boolean;
    static getStaticName(): string;
    setName(name: string): void;
    getName(): String | undefined;
}
declare class pig extends animal {
    constructor(name: string);
}
export default pig;
