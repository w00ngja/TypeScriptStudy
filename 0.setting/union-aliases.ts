// 20231004

function addType(n1: number, n2: number) {
  const result = n1 + n2;
  return result;
}

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
  let result;

  if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
