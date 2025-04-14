import type { SupportedRegions } from '@abc-transitionbascarbone/test_declinaison_modele'
import supportedRegions from '@abc-transitionbascarbone/test_declinaison_modele/public/supportedRegions.json'

/**
 * This function is used to get the supported regions. It can be called directly from a server component.
 */
export function getSupportedRegions(): SupportedRegions {
  return supportedRegions
}
