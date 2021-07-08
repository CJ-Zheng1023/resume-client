export const hex2rgba = (hex: string, opacity: number) => {
  if (hex.length === 4) {
    const [s, r, g, b] = hex
    return `rgba(${parseInt(`0x${r}${r}`)}, ${parseInt(`0x${g}${g}`)}, ${parseInt(`0x${b}${b}`)}, ${opacity})`
  } else if (hex.length === 7) {
    const [s, r1, r2, g1, g2, b1, b2] = hex
    return `rgba(${parseInt(`0x${r1}${r2}`)}, ${parseInt(`0x${g1}${g2}`)}, ${parseInt(`0x${b1}${b2}`)}, ${opacity})`
  } else {
    return 'transparent'
  }
}
