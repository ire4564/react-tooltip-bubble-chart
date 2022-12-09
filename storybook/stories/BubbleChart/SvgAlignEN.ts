//tspan dy, dx value return - en
const svgAlignEN = (idx: number, txt: string, content: string) => {
  if (content.split("\n").length === 1) {
    return { dy: 0, dx: 0 };
  } else if (idx === 0) {
    if (txt.length < 5) {
      return { dy: -4, dx: -10 };
    }
    if (txt.length <= 10) {
      return { dy: -4, dx: 2 };
    }
    if (txt.length <= 20) {
      return { dy: -4, dx: 20 };
    } else {
      return { dy: -4, dx: 0 };
    }
  } else if (idx === 1) {
    if (content.split("\n")[0].length <= 5) {
      if (txt.length <= 8) {
        return { dy: 14, dx: -45 };
      }
    }
    if (txt.length <= 5) {
      return { dy: 14, dx: -40 };
    } else if (txt.length === 8) {
      return { dy: 14, dx: -60 };
    } else if (txt.length <= 10) {
      return { dy: 14, dx: -62 };
    } else if (txt.length <= 15) {
      return { dy: 14, dx: -58 };
    } else if (txt.length <= 20) {
      return { dy: 14, dx: -58 };
    }
  }
  return { dy: 0, dx: 0 };
};

export default svgAlignEN;
