import createLinearGradient from '../src'

// var gradient = colorMapper.createLinearGradient(0, 255)

// gradient.addColorStop(1.0, '#1ec38e')
// gradient.addColorStop(0.2, 'rgb(1, 134, 56)')
// gradient.addColorStop(0.15, 'rgba(1,222,93,70)')
// gradient.addColorStop(0.1, '#ef6')
// gradient.addColorStop(0.05, '#dc3b')
// gradient.addColorStop(0.0, '#9013342f')

// console.log(gradient.getHex(24))
// console.log(gradient.getHex(255))
// console.log(gradient.getHex(0))
// console.log(gradient.getHex(26))

// console.time('getAll')
// console.log(gradient.getAll().length)
// console.timeEnd('getAll')

it('', () => {
  const gradient = createLinearGradient(0, 255)
  gradient.addColorStop(0, 'rgba(0,0,0,0)')
  gradient.addColorStop(1, 'rgba(255,255,255,255)')

  const color0 = gradient.getColor(0)
  console.log(gradient.getAll())

  expect(color0).toEqual([0, 0, 0, 0])
})
