export const TEST_CONFIGURATIONS = {
  '2-one-time': {
    bottles: 2,
    purchaseType: 'one-time',
    itemCode: 'SULTL035',
    description: '2 bottles + One-time purchase',
    testName: '2-onetime'
  },
  '2-recurring': {
    bottles: 2,
    purchaseType: 'recurring',
    itemCode: 'SRULTL029',
    description: '2 bottles + Subscribe & Save',
    testName: '2-recurring'
  },
  '3-one-time': {
    bottles: 3,
    purchaseType: 'one-time',
    itemCode: 'SULTL007',
    description: '3 bottles + One-time purchase',
    testName: '3-onetime'
  },
  '3-recurring': {
    bottles: 3,
    purchaseType: 'recurring',
    itemCode: 'SRULTL005', // Updated based on actual website behavior
    description: '3 bottles + Subscribe & Save',
    testName: '3-recurring'
  },
  '6-one-time': {
    bottles: 6,
    purchaseType: 'one-time',
    itemCode: 'SULTL008',
    description: '6 bottles + One-time purchase',
    testName: '6-onetime'
  },
  '6-recurring': {
    bottles: 6,
    purchaseType: 'recurring',
    itemCode: 'SRULTL006',
    description: '6 bottles + Subscribe & Save',
    testName: '6-recurring'
  }
};

export const ALL_COMBINATIONS = Object.values(TEST_CONFIGURATIONS);