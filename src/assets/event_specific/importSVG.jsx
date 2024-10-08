export const importSVG = async (svgName) => {
    switch (svgName) {
      case 'bgmi':
        return import('./bgmi.webp');
      case 'bidbuild':
        return import('./bidbuild.webp');
      case 'cipherChase':
        return import('./cipherChase.webp');
      case 'codeQuest2':
        return import('./codeQuest2.webp');
      case 'codm':
        return import('./codm.webp');
      case 'cr':
        return import('./cr.webp');
      case 'deepReality':
        return import('./deepReality.webp');
      case 'eafc':
        return import('./eafc.webp');
      case 'lensFlare':
        return import('./lensFlare.webp');
      case 'lockoutDuel':
        return import('./lockoutDuel.webp');
      case 'mernify':
        return import('./mernify.webp');
      case 'mlFiesta':
        return import('./mlFiesta.webp');
      case 'pitchingPixels':
        return import('./pitchingPixels.webp');
      case 'pixelFlow':
        return import('./pixelFlow.webp');
      case 'reelRiot':
        return import('./reelRiot.webp');
      case 'synMun':
        return import('./synMun.webp');
      case 'valo':
        return import('./valo.webp');
      default:
        throw new Error(`Unknown SVG: ${svgName}`);
    }
};