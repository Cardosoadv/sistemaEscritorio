import { LocaleInput } from '../index.js'

export default {
  code: 'lv',
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4, // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Iepr.',
    next: 'Nāk.',
    today: 'Šodien',
    month: 'Mēnesis',
    week: 'Nedēļa',
    day: 'Diena',
    list: 'Dienas kārtība',
  },
  weekText: 'Ned.',
  allDayText: 'Visu dienu',
  moreLinkText(n) {
    return '+vēl ' + n
  },
  noEventsText: 'Nav notikumu',
} as LocaleInput
