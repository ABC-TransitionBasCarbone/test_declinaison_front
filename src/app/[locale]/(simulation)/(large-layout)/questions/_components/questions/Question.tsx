'use client'

import { useRule } from '@/publicodes-state'
import type { DottedName } from '@abc-transitionbascarbone/test_declinaison_modele'

type Props = { question: DottedName }

export default function Question({ question }: Props) {
  const { label } = useRule(question)
  return <li>{label}</li>
}
