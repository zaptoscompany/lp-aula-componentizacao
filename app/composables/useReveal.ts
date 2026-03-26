import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

export function useReveal(el: Ref<HTMLElement | null>, threshold = 0.15): Ref<boolean> {
  const visible = ref(false)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer?.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el.value)
  })

  onUnmounted(() => observer?.disconnect())

  return visible
}
