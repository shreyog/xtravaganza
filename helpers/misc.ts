export const arrayFiller = ({
  arr,
  arrLen,
}: {
  arr: string[];
  arrLen: number;
}) => {
  const newArr = [...arr];
  const currentArrayLen = arr.length;
  if (currentArrayLen < arrLen) {
    for (let i = arrLen - currentArrayLen - 1; i >= 0; i--) {
      newArr[i + currentArrayLen] = newArr[i % currentArrayLen];
    }
  }
  return newArr;
};
