export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const secouds = duration % 60;

  const timeString = [hours, minutes, secouds].map(unit => String(unit).padStart(2, '0')).join(':');

  return timeString;
}