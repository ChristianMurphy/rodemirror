import { useMemo, useState, useCallback } from 'react'
import { basicSetup } from '@codemirror/basic-setup'
import { oneDark } from '@codemirror/theme-one-dark'
import { javascript } from '@codemirror/lang-javascript'
import CodeMirror, { CodeMirrorProps } from 'rodemirror'
import type { Extension } from '@codemirror/state'

export default function Home() {
  const extensions = useMemo<Extension[]>(
    () => [basicSetup, oneDark, javascript()],
    []
  )

  const defaultValue = "console.log('Hello world!')"
  const [, setValue] = useState(defaultValue)

  const onUpdate = useCallback<Exclude<CodeMirrorProps['onUpdate'], undefined>>(
    (v) => setValue(v.state.doc.toString()),
    []
  )

  return (
    <CodeMirror
      value={defaultValue}
      onUpdate={onUpdate}
      extensions={extensions}
    />
  )
}
