const zf = (s: string, len: number, fillChar = '0') => {
  return s?.length > len ? s : fillChar.repeat(len - s?.length) + s;
};

export default zf;
