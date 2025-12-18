import { formatDateKey } from './utils/date.js';

const RECORDS_PREFIX = 'ep_records_';

export function getDayRecord(userId, date = new Date()) {
  const key = recordKey(userId, date);
  const raw = localStorage.getItem(key);
  if (!raw) {
    return { dateKey: formatDateKey(date), status: 'Absent' };
  }
  try {
    return JSON.parse(raw);
  } catch {
    return { dateKey: formatDateKey(date), status: 'Absent' };
  }
}

export function saveDayRecord(userId, record) {
  const key = recordKey(userId, new Date(record.dateKey));
  localStorage.setItem(key, JSON.stringify(record));
}

export function clockIn(userId, now = new Date()) {
  const rec = getDayRecord(userId, now);
  if (!rec.loginTime) {
    rec.loginTime = now.toISOString();
    rec.status = 'Present';
    saveDayRecord(userId, rec);
  }
  return rec;
}

export function clockOut(userId, now = new Date()) {
  const rec = getDayRecord(userId, now);
  if (!rec.logoutTime) {
    rec.logoutTime = now.toISOString();
    if (!rec.loginTime) {
      rec.status = 'Partial';
    }
    saveDayRecord(userId, rec);
  }
  return rec;
}

function recordKey(userId, date) {
  return `${RECORDS_PREFIX}${userId}_${formatDateKey(date)}`;
}
