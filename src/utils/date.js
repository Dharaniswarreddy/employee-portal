export function formatDateKey(date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const d = `${date.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function formatPrettyTime(iso) {
  if (!iso) return '--:--';
  const d = new Date(iso);
  const hh = `${d.getHours()}`.padStart(2, '0');
  const mm = `${d.getMinutes()}`.padStart(2, '0');
  return `${hh}:${mm}`;
}

export function formatPrettyDate(date) {
  return date.toDateString();
}

export function getISTNow() {
  // For simplicity, use local browser time.
  return new Date();
}
