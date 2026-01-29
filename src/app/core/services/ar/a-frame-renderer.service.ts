import { Injectable, ElementRef } from '@angular/core';
import { ArRenderer } from './ar-renderer.interface';

@Injectable({
  providedIn: 'root'
})
export class AFrameRendererService implements ArRenderer {

  constructor() { }

  initialize(container: ElementRef): void {
    console.log('[AFrameRenderer] Initialized. A-Frame logic is mostly declarative in HTML.');
    // Here we could inject entities dynamically if needed
  }

  render(): void {
    // A-Frame handles the render loop automatically
  }

  destroy(): void {
    console.log('[AFrameRenderer] Destroyed.');
  }
}
