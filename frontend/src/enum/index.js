export const kdbxFilters = [{name: '*.kdbx file', extensions: ['kdbx']}]
export const textFilters = [
  {name: 'Text File', extensions: ['txt', 'md']},
  {name: 'All File', extensions: ['*']},
]

export const KEE_DIARY_VUE_LOGIN = 'KEE_DIARY_VUE_LOGIN'

export const palette = [
  {name: 'red', color: '#f44336'},
  {name: 'pink', color: '#e91e63'},
  {name: 'purple', color: '#9c27b0'},
  {name: 'deep-purple', color: '#673ab7'},
  {name: 'indigo', color: '#3f51b5'},
  {name: 'blue', color: '#2196f3'},
  {name: 'light-blue', color: '#03a9f4'},
  {name: 'cyan', color: '#00bcd4'},
  {name: 'teal', color: '#009688'},
  {name: 'green', color: '#4caf50'},
  {name: 'light-green', color: '#8bc34a'},
  {name: 'lime', color: '#cddc39'},
  {name: 'yellow', color: '#ffeb3b'},
  {name: 'amber', color: '#ffc107'},
  {name: 'orange', color: '#ff9800'},
  {name: 'deep-orange', color: '#ff5722'},
  {name: 'brown', color: '#795548'},
  {name: 'grey', color: '#9e9e9e'},
  {name: 'blue-grey', color: '#607d8b'},
  {name: 'white', color: '#ffffff'},
  {name: 'black', color: '#000000'},
  {name: 'none', color: null},
]

export const META_NAME = '__keenote_meta__'
export const NOTE_TYPE = {
  binary: 'binary',
  text: 'text',
}
export const META_DEFAULT = {
  noteType: NOTE_TYPE.text
}
