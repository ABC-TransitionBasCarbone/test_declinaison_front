import type { DottedName } from '@abc-transitionbascarbone/test_declinaison_modele'

export function getSubcatsOfCategory(
  category: DottedName,
  subcategories: DottedName[] | undefined
): DottedName[] {
  return (
    subcategories?.filter((subcategory) => subcategory?.startsWith(category)) ??
    []
  )
}
