// Orfeo zh-CN community patch v0.1
import { zhCN } from './orfeoZhCN'
// Compatible with Orfeo's existing tagged-template `t` API and extractor.
// Interpolations use {{vN}}; unknown phrases fall back to English.
export function t(strings: TemplateStringsArray, ...values: unknown[]): string {
  const msgid = strings.reduce((acc, piece, i) =>
    acc + piece + (i < values.length ? '{{v' + i + '}}' : ''), '')
  const translated = zhCN[msgid]
  if (translated !== undefined) {
    return translated.replace(/\{\{v(\d+)\}\}/g, (all, index: string) => {
      const n = Number(index)
      return n >= 0 && n < values.length ? String(values[n]) : all
    })
  }
  return strings.reduce((acc, piece, i) =>
    acc + piece + (i < values.length ? String(values[i]) : ''), '')
}
