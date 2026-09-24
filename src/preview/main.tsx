import { StrictMode, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'

type Module = { default?: ComponentType }

const modules = import.meta.glob<Module>([
  '/src/components/ui/*.tsx',
  '/src/components/graphics/*.tsx',
  '/src/components/sections/*.tsx',
  '/src/components/showcase/*.tsx',
])

const nameOf = (path: string) => path.split('/').pop()!.replace(/\.tsx$/, '')

async function render() {
  const root = createRoot(document.getElementById('root')!)
  const name = new URLSearchParams(location.search).get('c')

  if (!name) {
    const names = Object.keys(modules).map(nameOf).sort()
    root.render(
      <StrictMode>
        <ul>
          {names.map((n) => (
            <li key={n}>
              <a href={`?c=${encodeURIComponent(n)}`}>{n}</a>
            </li>
          ))}
        </ul>
      </StrictMode>,
    )
    return
  }

  const path = Object.keys(modules).find((p) => nameOf(p) === name)
  const Component = path ? (await modules[path]()).default : undefined

  root.render(
    <StrictMode>
      <div className="min-h-[220vh]">
        {Component ? <Component /> : <p>Компонент "{name}" не найден</p>}
      </div>
    </StrictMode>,
  )
}

render()
