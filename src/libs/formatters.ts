import { Duration } from 'luxon';

export const formatMillisToMinutesSeconds = (millis: number) => {
  const duration = Duration.fromMillis(millis);
  const minutes = Math.floor(duration.as('minutes'));
  const seconds = Math.floor(duration.as('seconds') % 60);

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
