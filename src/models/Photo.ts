import Edge from "./Edge";

class Photo {
  width: number;
  height: number;
  image: HTMLImageElement;

  constructor(width: number = 6000, height: number = 4000) {
    this.width = width;
    this.height = height;
    this.image = new Image(this.width, this.height);
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

export default Photo;