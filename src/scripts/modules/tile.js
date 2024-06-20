"use strict";

const tileTwo = 2;
const tileFour = 4;
const chanceToGetOneOfTiles = 0.9;

export class Tile {
  constructor(gridElement) {
    this.tileElement = document.createElement("div");
    this.tileElement.classList.add("tile");

    this.setValue(Math.random() >= chanceToGetOneOfTiles ? tileFour : tileTwo);
    gridElement.append(this.tileElement);
  }

  setXY(x, y) {
    this.x = x;
    this.y = y;
    this.tileElement.style.setProperty("--x", x);
    this.tileElement.style.setProperty("--y", y);
  }

  setValue(value) {
    this.value = value;
    this.tileElement.textContent = this.value;
    this.tileElement.classList.add(`tile--${value}`);
  }

  removeFromDOM() {
    this.tileElement.remove();
  }

  removeClassList() {
    this.tileElement.classList.remove(`tile--${this.value / 2}`);
  }

  getTileValue() {
    return this.value;
  }

  waitForTransitionEnd() {
    return new Promise((resolve) => {
      this.tileElement.addEventListener("transitionend", resolve, {
        once: true,
      });
    });
  }
}
