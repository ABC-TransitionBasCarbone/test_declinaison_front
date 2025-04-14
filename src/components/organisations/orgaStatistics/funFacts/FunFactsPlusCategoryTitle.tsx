import Title from '@/design-system/layout/Title'
import { useRule } from '@/publicodes-state'
import type { DottedName } from '@abc-transitionbascarbone/test_declinaison_modele'

export default function FunFactsPlusCategoryTitle({
  category,
}: {
  category: DottedName
}) {
  const { title } = useRule(category)
  return <Title tag="h3">{title}</Title>
}
