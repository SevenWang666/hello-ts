1. 初始化项目
2. 安装核心依赖
typescript tslint @types/node
```shell
npm init
npm install --save-dev typescript tslint @types/node
```
3. 配置tsconfig.json
```
{
    "compilerOptions": {
        "lib": ["ES2015"],
        "module": "commonjs",
        "outDir": "dist",
        "sourceMap": true,
        "strict": true,
        "target": "es2015"
    },
    "include": [
        "src"
    ]
}
```
```shell
npx tsc --init
tsc --init #如果全局安装了tsc模块，可以直接运行这个
```
4. tslint.json配置ts 语言检测
```
{
    "defaultSeverity":"error",
    "extends":[
        "tslint:recommended"
    ],
    "jsRules":{},
    "rules":{
        "no-console":false
    },
    "rulesDirectory":[]
}
```
或者
```shell
npx tslint --init
```
5. 新建src文件夹并创建index.ts文件
6. 在package.json scripts下增加脚本命令
```shell
"tsc":"tsc"
```