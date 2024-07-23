export const importSVG = async (svgName) => {
    switch (svgName) {
      case 'bgmi':
        return import('./bgmi.svg');
      case 'bidbuild':
        return import('./bidbuild.svg');
      case 'bitsBots':
        return import('./bits&Bots.svg');
      case 'cipherChase':
        return import('./cipherChase.svg');
      case 'codeQuest2':
        return import('./codeQuest2.svg');
      case 'codm':
        return import('./codm.svg');
      case 'cr':
        return import('./cr.svg');
      case 'cryptoCraft':
        return import('./cryptoCraft.svg');
      case 'dataDrive':
        return import('./dataDrive.svg');
      case 'deepReality':
        return import('./deepReality.svg');
      case 'digitalDavinci':
        return import('./digitalDavinci.svg');
      case 'eafc':
        return import('./eafc.svg');
      case 'lensFlare':
        return import('./lensFlare.svg');
      case 'lockoutDuel':
        return import('./lockoutDuel.svg');
      case 'mathSprint':
        return import('./mathSprint.svg');
      case 'memeFrenzy':
        return import('./memeFrenzy.svg');
      case 'mernify':
        return import('./mernify.svg');
      case 'mlFiesta':
        return import('./mlFiesta.svg');
      case 'pitchingPixels':
        return import('./pitchingPixels.svg');
      case 'pixelFlow':
        return import('./pixelFlow.svg');
      case 'profitPursuit':
        return import('./profitPursuit.svg');
      case 'reelRiot':
        return import('./reelRiot.svg');
      case 'synMun':
        return import('./synMun.svg');
      case 'techFeud':
        return import('./techFeud.svg');
      case 'theHireGame':
        return import('./theHireGame.svg');
      case 'triviaVerse':
        return import('./triviaVerse.svg');
      case 'valo':
        return import('./valo.svg');
      default:
        throw new Error(`Unknown SVG: ${svgName}`);
    }
  };

