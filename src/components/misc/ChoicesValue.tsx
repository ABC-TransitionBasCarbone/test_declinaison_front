import { useRule } from '@/publicodes-state'
import type { DottedName, NodeValue } from '@abc-transitionbascarbone/test_declinaison_modele'

type Props = {
  value: NodeValue
  question: DottedName
}
export default function ChoicesValue({ value, question }: Props) {
  const { title, icons } = useRule((question + ' . ' + value) as DottedName)

  return (
    <>
      {icons} {title}
    </>
  )
}
