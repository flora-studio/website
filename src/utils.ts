import mitt from 'mitt'

export type Anchor = 'works' | 'members' | 'service'

export function scrollTo(anchor: Anchor) {
  const elem = document.getElementById(anchor)
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth' })
  }
}

const eventBus = mitt<{
  'toggle-work': string
}>()

export function onToggleWork(callback: (id: string) => void) {
  eventBus.on('toggle-work', callback)
}

export function offToggleWork(callback: (id: string) => void) {
  eventBus.off('toggle-work', callback)
}

export function toggleWork(id: string) {
  eventBus.emit('toggle-work', id)
  scrollTo('works')
}
