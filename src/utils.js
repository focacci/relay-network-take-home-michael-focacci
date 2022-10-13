export const segTitleMap = {
    "black": "Black",
    "hispanic": "Hispanic",
    "white": "White",
    "other_race": "Other Race",
    "male": "Male",
    "female": "Female",
    "unknown_sex": "Unknown Sex",
    "dem": "Democrat",
    "rep": "Republican",
    "other_party": "Other Party"
};

export function formatAsPercent(num) {
    return new Intl.NumberFormat('default', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num / 100);
};

