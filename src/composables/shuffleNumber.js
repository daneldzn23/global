const DIGITS = '0123456789'

let observer

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target._runShuffle?.()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 }
    )
  }
  return observer
}

function randomDigitFor(char) {
  return DIGITS[Math.floor(Math.random() * DIGITS.length)]
}

// Odometer-style reveal: scrambles only the digit characters of the final
// string, settling each into place left to right while punctuation/letters
// (",", ".", "B", "M", "+") stay put throughout.
function runShuffle(el, finalText, { duration = 900, stagger = 90 } = {}) {
  const chars = finalText.split('')
  const digitIndexes = chars.reduce((acc, c, i) => {
    if (/[0-9]/.test(c)) acc.push(i)
    return acc
  }, [])

  if (digitIndexes.length === 0) return

  const settleAt = digitIndexes.map((_, order) => {
    const share = digitIndexes.length === 1 ? 0 : order / (digitIndexes.length - 1)
    return duration - stagger + share * stagger
  })

  const start = performance.now()

  function tick(now) {
    const elapsed = now - start
    let allSettled = true

    digitIndexes.forEach((charIndex, order) => {
      if (elapsed >= settleAt[order]) {
        chars[charIndex] = finalText[charIndex]
      } else {
        allSettled = false
        chars[charIndex] = randomDigitFor(finalText[charIndex])
      }
    })

    el.textContent = chars.join('')

    if (!allSettled) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

export default {
  mounted(el, binding) {
    const finalText = binding.value ?? el.textContent

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      el.textContent = finalText
      return
    }

    el._runShuffle = () => runShuffle(el, finalText)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
