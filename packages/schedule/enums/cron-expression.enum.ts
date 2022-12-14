export enum CronExpression {
  EVERY_SECOND = '* * * * * *',
  EVERY_5_SECONDS = '*/5 * * * * *',
  EVERY_10_SECONDS = '*/10 * * * * *',
  EVERY_30_SECONDS = '*/30 * * * * *',
  EVERY_MINUTE = '*/1 * * * *',
  EVERY_5_MINUTES = '0 */5 * * * *',
  EVERY_10_MINUTES = '0 */10 * * * *',
  EVERY_30_MINUTES = '0 */30 * * * *',
  EVERY_HOUR = '0 0-23/1 * * *',
  EVERY_2_HOURS = '0 0-23/2 * * *',
  EVERY_3_HOURS = '0 0-23/3 * * *',
  EVERY_4_HOURS = '0 0-23/4 * * *',
  EVERY_5_HOURS = '0 0-23/5 * * *',
  EVERY_6_HOURS = '0 0-23/6 * * *',
  EVERY_7_HOURS = '0 0-23/7 * * *',
  EVERY_8_HOURS = '0 0-23/8 * * *',
  EVERY_9_HOURS = '0 0-23/9 * * *',
  EVERY_10_HOURS = '0 0-23/10 * * *',
  EVERY_11_HOURS = '0 0-23/11 * * *',
  EVERY_12_HOURS = '0 0-23/12 * * *',
  EVERY_DAY_AT_1AM = '0 01 * * *',
  EVERY_DAY_AT_2AM = '0 02 * * *',
  EVERY_DAY_AT_3AM = '0 03 * * *',
  EVERY_DAY_AT_4AM = '0 04 * * *',
  EVERY_DAY_AT_5AM = '0 05 * * *',
  EVERY_DAY_AT_6AM = '0 06 * * *',
  EVERY_DAY_AT_7AM = '0 07 * * *',
  EVERY_DAY_AT_8AM = '0 08 * * *',
  EVERY_DAY_AT_9AM = '0 09 * * *',
  EVERY_DAY_AT_10AM = '0 10 * * *',
  EVERY_DAY_AT_11AM = '0 11 * * *',
  EVERY_DAY_AT_NOON = '0 12 * * *',
  EVERY_DAY_AT_1PM = '0 13 * * *',
  EVERY_DAY_AT_2PM = '0 14 * * *',
  EVERY_DAY_AT_3PM = '0 15 * * *',
  EVERY_DAY_AT_4PM = '0 16 * * *',
  EVERY_DAY_AT_5PM = '0 17 * * *',
  EVERY_DAY_AT_6PM = '0 18 * * *',
  EVERY_DAY_AT_7PM = '0 19 * * *',
  EVERY_DAY_AT_8PM = '0 20 * * *',
  EVERY_DAY_AT_9PM = '0 21 * * *',
  EVERY_DAY_AT_10PM = '0 22 * * *',
  EVERY_DAY_AT_11PM = '0 23 * * *',
  EVERY_DAY_AT_MIDNIGHT = '0 0 * * *',
  EVERY_WEEK = '0 0 * * 0',
  EVERY_WEEKDAY = '0 0 * * 1-5',
  EVERY_WEEKEND = '0 0 * * 6,0',
  EVERY_QUARTER = '0 0 1 */3 *',
  EVERY_6_MONTHS = '0 0 1 */6 *',
  EVERY_YEAR = '0 0 1 1 *'
}
