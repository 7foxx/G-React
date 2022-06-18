// 解决jsx类型检测不通过
// https://www.tslang.cn/docs/handbook/jsx.html
declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}