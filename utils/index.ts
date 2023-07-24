import validator from 'validator'

export const isObjectEmpty = (obj: object) => Object.keys(obj).length === 0

export const hasEmptyProperty = (obj: { [key: string]: any }): boolean => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !obj[key]) {
      return true
    }
  }
  return false
}

export const checkPasswordStrength = (password: string): boolean => {
  const strongPassword: boolean = validator.isStrongPassword(password, {
    minSymbols: 0,
  })

  return strongPassword
}

export const capitalizeFirstLetter = (str: string): string => {
  const words = str.split(' ');
  if (words.length > 1) {
    const capitalizedWords = words.map(word => capitalizeFirstLetter(word));
    return capitalizedWords.join(' ');
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

export const prioritizedCountries = ['Canada', 'Nigeria', 'Kenya', 'United States']