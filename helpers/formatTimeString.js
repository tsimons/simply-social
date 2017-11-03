const SECOND = 1000;
const MINUTE = 60000;
const HOUR = 3600000;
const DAY = 86400000;
const MONTH = 2592000000;
const YEAR = 31540000000;

export default function formatTimeString(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    if (diff < MINUTE) {
        return `${Math.floor(diff / SECOND)}s`;
    } else if (diff < HOUR) {
        return `${Math.floor(diff / MINUTE)}m`;
    } else if (diff < DAY) {
        return `${Math.floor(diff / HOUR)}h`;
    } else if (diff < MONTH) {
        return `${Math.floor(diff / DAY)}d`;
    }

    return `${Math.floor(diff / YEAR)}y`;
}