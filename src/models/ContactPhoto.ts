import Edge from "./Edge";

class ContactPhoto {
  width: number;
  height: number;
  photo: HTMLImageElement;

  constructor(width: number = 6000, height: number = 4000) {
    this.width = width;
    this.height = height;
    this.photo = new Image(this.width, this.height)
  }

  aspectRatio() {
    const edges = [this.width, this.height]
    return Math.max(...edges) / Math.min(...edges)
  }

  longEdge() {
    if (this.width > this.height) return Edge.Width;
    return Edge.Height;
  }
}

export default ContactPhoto;