// Путь к файлу из public/ с учётом base сборки (vite.config.ts, VITE_BASE): '/' локально,
// '/TAU.WATER/' на GitHub Pages. BASE_URL заканчивается на '/', ведущий '/' у path срезается — без двойных слэшей.
export function publicUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
