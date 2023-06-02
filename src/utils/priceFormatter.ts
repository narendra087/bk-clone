function priceFormatter(value: number) {
  if (!value) return 'Rp. -'
  
  const stringValue = value.toString()

  stringValue.replace(/[^,\d]/g, '')
  const split = stringValue.split(',')
  const sisa = split[0].length % 3
  const ribuan = split[0].substring(sisa).match(/\d{3}/gi)
  let rupiah = split[0].substring(0, sisa)

  if (ribuan) {
    const separator = sisa ? '.' : ''
    rupiah += separator + ribuan.join('.')
  }

  rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah
  return 'Rp. ' + rupiah
}

export default priceFormatter