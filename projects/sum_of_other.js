function sumOfOther(arr) {
  return arr.map((elem, i, arr) => {
    return (
      arr.reduce((acc, val) => {
        return (acc + val);
      }, 0) - elem
    );
  });
}
