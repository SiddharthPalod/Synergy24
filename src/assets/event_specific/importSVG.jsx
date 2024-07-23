export const importSVG = async (svgName) => {
    switch (svgName) {
      case 'bgmi':
        return import('./bgmi.webp');
      case 'bidbuild':
        return import('./bidbuild.webp');
      case 'bitsBots':
        return import('./bits&Bots.webp');
      case 'cipherChase':
        return import('./cipherChase.webp');
      case 'codeQuest2':
        return import('./codeQuest2.webp');
      case 'codm':
        return import('./codm.webp');
      case 'cr':
        return import('./cr.webp');
      case 'cryptoCraft':
        return import('./cryptoCraft.webp');
      case 'dataDrive':
        return import('./dataDrive.webp');
      case 'deepReality':
        return import('./deepReality.webp');
      case 'digitalDavinci':
        return import('./digitalDavinci.webp');
      case 'eafc':
        return import('./eafc.webp');
      case 'lensFlare':
        return import('./lensFlare.webp');
      case 'lockoutDuel':
        return import('./lockoutDuel.webp');
      case 'mathSprint':
        return import('./mathSprint.webp');
      case 'memeFrenzy':
        return import('./memeFrenzy.webp');
      case 'mernify':
        return import('./mernify.webp');
      case 'mlFiesta':
        return import('./mlFiesta.webp');
      case 'pitchingPixels':
        return import('./pitchingPixels.webp');
      case 'pixelFlow':
        return import('./pixelFlow.webp');
      case 'profitPursuit':
        return import('./profitPursuit.webp');
      case 'reelRiot':
        return import('./reelRiot.webp');
      case 'synMun':
        return import('./synMun.webp');
      case 'techFeud':
        return import('./techFeud.webp');
      case 'theHireGame':
        return import('./theHireGame.webp');
      case 'triviaVerse':
        return import('./triviaVerse.webp');
      case 'valo':
        return import('./valo.webp');
      default:
        throw new Error(`Unknown SVG: ${svgName}`);
    }
};