function classNames(...array: Array<any>) {
  const [a] = array;

  if (Array.isArray(a)) {
    return a.filter(Boolean).join(' ');
  }

  return array.filter(Boolean).join(' ');
}

export default classNames;
