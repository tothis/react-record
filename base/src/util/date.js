export function now() {
    const date = new Date
    const y = date.getFullYear()
    const M = (date.getMonth() + 1).toString().padStart(2, '0')
    const d = date.getDate().toString().padStart(2, '0')
    const H = date.getHours().toString().padStart(2, '0')
    const m = date.getMinutes().toString().padStart(2, '0')
    const s = date.getSeconds().toString().padStart(2, '0')
    return `${y}-${M}-${d} ${H}:${m}:${s}`
}
