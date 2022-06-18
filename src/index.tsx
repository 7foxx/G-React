const React = {
  createElement: (tag: any, attrs: any, ...children: any) => ({
    tag,
    attrs,
    children,
  }),
};

function fun<T>(val: T): T {
  console.log(val);
  return val;
}

const sum: number = 1;

fun(sum);

const ele = <div>hello</div>;
console.log(ele);
