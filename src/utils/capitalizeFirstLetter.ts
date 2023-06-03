export const capitalizeFirstLetter = (str: string) => {
  if (!str) return
  
  const arr = str.split(' ');
  arr.forEach((x, i) => {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  })
  return arr.join(' ');
}