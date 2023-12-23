function getKeyByValue(obj: { [key: string]: any }, targetValue: any): string | undefined {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === targetValue) {
        return key;
      }
    }
    return undefined;
  }

export { getKeyByValue };

