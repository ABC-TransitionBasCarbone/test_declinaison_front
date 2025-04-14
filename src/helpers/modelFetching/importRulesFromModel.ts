import { captureException } from '@sentry/nextjs'

export async function importRulesFromModel({ fileName }: { fileName: string }) {
  console.log('dynamically importing rules', fileName)
  try {
    return await import(
      `@abc-transitionbascarbone/test_declinaison_modele/public/${fileName}`
    ).then((module) => module.default)
  } catch (e) {
    captureException(e)
    return {}
  }
}
