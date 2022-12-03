import ContactPhoto from './ContactPhoto';
import TestPhoto from '../fixtures/photos/image.jpg'
import Edge from './Edge'

test('can initalize', () => {
  const contactPhoto = new ContactPhoto()
});

test('calculates an aspect ratio', () => {
  const contactPhoto = new ContactPhoto()
  expect(contactPhoto.aspectRatio()).toBe(1.5)
});

test('calculates the long edge', () => {
  const contactPhoto = new ContactPhoto()
  expect(contactPhoto.longEdge()).toBe(Edge.Width)
})