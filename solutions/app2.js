const HU = {
  date(date) {return date.toLocaleDateString('hu')},
  curreny(price) {return new Intl.NumberFormat('hu-HU', {style: 'currency', currency: 'HUF' }).format(price)},
  list(arr) {return `${arr[0]}, ${arr[1]} és ${arr[2]}`}
};
export default HU
