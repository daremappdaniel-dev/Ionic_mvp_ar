import { ElementRef } from '@angular/core';

export interface ArRenderer {
  initialize(container: ElementRef): void;
  render(): void;
  destroy(): void;
}
