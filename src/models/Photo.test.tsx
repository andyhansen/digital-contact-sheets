import Edge from './Edge'
import Photo from './Photo'

test('can initalize', () => {
  const contactPhoto = new Photo()
  expect(contactPhoto).not.toBeNull()
});

test('calculates an aspect ratio', () => {
  const contactPhoto = new Photo()
  expect(contactPhoto.aspectRatio()).toBe(1.5)
});

test('calculates the long edge', () => {
  const contactPhoto = new Photo()
  expect(contactPhoto.longEdge()).toBe(Edge.Width)
})