const paper = '#FCFCFC'
const paperDark = '#2A2D35'
const paper2 = '#EBEBEB'
const paper2Dark = '#4F5462'
const paper3 = '#D0D0D0'
const paper3Dark = '#767C8B'
const paperPrimary = '#FADC4F'
const paperPrimaryDark = '#E2C438'
const paperSecondary = '#524FFA'
const paperSecondaryDark = '#5755CD'
const paperError = '#EC4E3D'
const paperErrorDark = '#D85243'
const paperSuccess = '#4FA762'
const paperSuccessDark = '#458052'
const paperWarning = '#E87C06'
const paperWarningDark = '#C6751C'
const paperInfo = '#4C9BE4'
const paperInfoDark = '#3B72A5'

const ink = '#414141'
const inkDark = '#FCFCFC'
const ink2 = '#7B8B99'
const ink2Dark = '#5B6772'
const inkPrimary = '#C7A713'
const inkPrimaryDark = '#DCCA76'
const inkSecondary = '#4F4CEA'
const inkSecondaryDark = '#8583FF'
const inkError = '#D74030'
const inkErrorDark = '#D45D50'
const inkSuccess = '#3B7D49'
const inkSuccessDark = '#6D9F78'
const inkWarning = '#E48D2E'
const inkWarningDark = '#B98A56'
const inkInfo = '#3784CB'
const inkInfoDark = '#5A86AF'
const inkBorder = '#29292916'
const inkBorderDark = '#FFFFFF16'

module.exports = {
  paper: {
    DEFAULT: paper,
    dark: paperDark,
    2: { DEFAULT: paper2, dark: paper2Dark },
    3: { DEFAULT: paper3, dark: paper3Dark },
    primary: { DEFAULT: paperPrimary, dark: paperPrimaryDark },
    secondary: { DEFAULT: paperSecondary, dark: paperSecondaryDark },
    error: { DEFAULT: paperError, dark: paperErrorDark },
    success: { DEFAULT: paperSuccess, dark: paperSuccessDark },
    warning: { DEFAULT: paperWarning, dark: paperWarningDark },
    info: { DEFAULT: paperInfo, dark: paperInfoDark }
  },

  ink: {
    DEFAULT: ink,
    dark: inkDark,
    2: { DEFAULT: ink2, dark: ink2Dark },
    primary: { DEFAULT: inkPrimary, dark: inkPrimaryDark },
    secondary: { DEFAULT: inkSecondary, dark: inkSecondaryDark },
    error: { DEFAULT: inkError, dark: inkErrorDark },
    success: { DEFAULT: inkSuccess, dark: inkSuccessDark },
    warning: { DEFAULT: inkWarning, dark: inkWarningDark },
    info: { DEFAULT: inkInfo, dark: inkInfoDark },
    border: { DEFAULT: inkBorder, dark: inkBorderDark }
  },

  link: {
    DEFAULT: '#120EED',
    dark: '#9C9AFF',
    hover: { DEFAULT: '#5F5CFF', dark: '#ACAAF0' },
    active: { DEFAULT: '#B92AFD', dark: '#CD63FF' },
    visited: { DEFAULT: '#8B2E9A', dark: '#BD9FC1' }
  },
  color: {
    1: { DEFAULT: '#FAD8C2', dark: '#4C474B' },
    2: { DEFAULT: '#FFE7CE', dark: '#48474B' },
    3: { DEFAULT: '#FFF6C0', dark: '#4D4F4A' },
    4: { DEFAULT: '#FFFDF1', dark: '#373A3F' },
    5: { DEFAULT: '#E9F2CE', dark: '#474E4F' },
    6: { DEFAULT: '#D6E8CF', dark: '#424B4F' },
    7: { DEFAULT: '#C3C9C4', dark: '#3D424C' },
    8: { DEFAULT: '#E8EEE9', dark: '#474D58' },
    9: { DEFAULT: '#D8EDEF', dark: '#424D5A' },
    10: { DEFAULT: '#ECF5F7', dark: '#3D434F' },
    11: { DEFAULT: '#F8FDFE', dark: '#2D323B' },
    12: { DEFAULT: '#C5E7F7', dark: '#3D4B5C' },
    13: { DEFAULT: '#C6E0F4', dark: '#3D495B' },
    14: { DEFAULT: '#B0B9BF', dark: '#373E4A' },
    15: { DEFAULT: '#E9DDEB', dark: '#474858' },
    16: { DEFAULT: '#F8E0EB', dark: '#4B4958' }
  },

  button: {
    'paper': {
      bg: { DEFAULT: paper, dark: paperDark },
      text: { DEFAULT: ink, dark: inkDark }
    },
    'paper-2': {
      bg: { DEFAULT: paper2, dark: paper2Dark },
      text: { DEFAULT: ink, dark: inkDark }
    },
    'paper-3': {
      bg: { DEFAULT: paper3, dark: paper3Dark },
      text: { DEFAULT: ink, dark: inkDark }
    },
    'primary': {
      bg: { DEFAULT: paperPrimary, dark: paperPrimaryDark },
      text: { DEFAULT: ink, dark: ink }
    },
    'secondary': {
      bg: { DEFAULT: paperSecondary, dark: paperSecondaryDark },
      text: { DEFAULT: inkDark, dark: inkDark }
    },
    'error': {
      bg: { DEFAULT: paperError, dark: paperErrorDark },
      text: { DEFAULT: inkDark, dark: inkDark }
    },
    'success': {
      bg: { DEFAULT: paperSuccess, dark: paperSuccessDark },
      text: { DEFAULT: inkDark, dark: inkDark }
    },
    'warning': {
      bg: { DEFAULT: paperWarning, dark: paperWarningDark },
      text: { DEFAULT: inkDark, dark: inkDark }
    },
    'info': {
      bg: { DEFAULT: paperInfo, dark: paperInfoDark },
      text: { DEFAULT: inkDark, dark: inkDark }
    }
  }
}
