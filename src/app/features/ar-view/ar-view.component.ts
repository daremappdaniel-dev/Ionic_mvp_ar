import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Injector } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ARLauncherPage } from '../ar-launcher/ar-launcher.page';
import { ArStrategy } from '../../core/models/ar-strategy.enum';
import { ArRenderer } from '../../core/services/ar/ar-renderer.interface';
import { AFrameRendererService } from '../../core/services/ar/a-frame-renderer.service';
import { ThreeJsRendererService } from '../../core/services/ar/three-js-renderer.service';
import { HtmlOverlayRendererService } from '../../core/services/ar/html-overlay-renderer.service';

@Component({
  selector: 'app-ar-view',
  templateUrl: './ar-view.component.html',
  styleUrl: './ar-view.component.scss'
})
export class ArViewComponent implements OnInit, OnDestroy {

  // --- CONFIGURACIÓN DE UNA SOLA LÍNEA ---
  currentStrategy: ArStrategy = ArStrategy.AFRAME; // Cambia a .THREEJS o .HTML aquí
  // ----------------------------------------

  activeRenderer: ArRenderer | null = null;
  ArStrategy = ArStrategy; // Para usar el enum en el template

  @ViewChild('arContainer', { static: false }) arContainer!: ElementRef;

  constructor(private injector: Injector, private modalController: ModalController) {}

  ngOnInit(): void {
    // La inicialización real ocurre en ngAfterViewInit o cuando el template esté listo
    // Simulamos un pequeño retardo para asegurar que el DOM existe
    setTimeout(() => {
       this.cleanupArJsResidue(); // LIMPIEZA FORZOSA
       this.initializeStrategy();
    }, 100);
  }

  // Hack: AR.js inyecta video en el body y no lo limpia. Lo matamos nosotros.
  private cleanupArJsResidue() {
    console.log('[ArView] Cleaning up global AR.js video residue...');
    const videos = document.querySelectorAll('video');
    videos.forEach(v => {
      if (document.body.contains(v)) {
        v.pause();
        v.srcObject = null;
        document.body.removeChild(v);
      }
    });

    const arCanvas = document.querySelectorAll('.a-canvas');
    arCanvas.forEach(c => c.remove());
  }

  initializeStrategy() {
    console.log(`[ArView] Initializing Strategy: ${this.currentStrategy}`);

    switch (this.currentStrategy) {
      case ArStrategy.AFRAME:
        this.activeRenderer = this.injector.get(AFrameRendererService);
        break;
      case ArStrategy.THREEJS:
        this.activeRenderer = this.injector.get(ThreeJsRendererService);
        break;
      case ArStrategy.HTML:
        this.activeRenderer = this.injector.get(HtmlOverlayRendererService);
        break;
    }

    if (this.activeRenderer && this.arContainer) {
      this.activeRenderer.initialize(this.arContainer);
    }
  }

  ngOnDestroy(): void {
    this.cleanupArJsResidue(); // Asegurar limpieza al salir
    if (this.activeRenderer) {
      this.activeRenderer.destroy();
    }
  }

  async openAR() {
    const modal = await this.modalController.create({
      component: ARLauncherPage,
      // presentingElement: this.routerOutlet.nativeEl // Optional: check if routerOutlet is available or needed
    });

    return await modal.present();
  }
}
