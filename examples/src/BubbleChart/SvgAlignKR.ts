//tspan dy, dx value return - kr
const svgAlignKR = (idx: number, txt: string, content: string) => {
  if (content.split("\n").length === 1) {
    return { dy: 0, dx: 0 };
  } else if (idx === 0 && content.split("\n").length >= 3) {
    return { dy: -8, dx: 0 };
  } //index 0
  else if (idx === 0) {
    if (txt.length === 2) {
      return { dy: -2, dx: 0 };
    } else if (txt.length > 2) {
      return { dy: -2, dx: 2 };
    } else {
      return { dy: -1, dx: 0 };
    }
  } //index 1
  else if (idx === 1) {
    if (content.split("\n")[0].length === 2) {
      if (txt.length === 1) {
        return { dy: 14, dx: -20 };
      } else if (txt.length === 2) {
        return { dy: 14, dx: -26 };
      } else if (txt.length === 3) {
        return { dy: 14, dx: -30 };
      } else if (txt.length > 5) {
        return { dy: 14, dx: -52 };
      } else {
        return { dy: 14, dx: -38 };
      }
    } else if (content.split("\n")[0].length === 3) {
      if (txt.length === 1) {
        return { dy: 14, dx: -25 };
      }
      if (txt.length === 2) {
        return { dy: 14, dx: -30 };
      }
      if (txt.length === 3) {
        return { dy: 14, dx: -35 };
      }
    } else if (content.split("\n")[0].length === 4) {
      if (txt.length === 2) {
        return { dy: 14, dx: -38 };
      }
      if (txt.length <= 3) {
        return { dy: 14, dx: -40 };
      } else {
        return { dy: 14, dx: -50 };
      }
    } else if (content.split("\n")[0].length <= 8) {
      if (txt.length === 2) {
        return { dy: 14, dx: -55 };
      } else if (txt.length <= 4) {
        return { dy: 14, dx: -70 };
      } else if (content.split("\n")[0].length > 8) {
        if (txt.length === 2) {
          return { dy: 14, dx: -34 };
        } else if (txt.length > 4) {
          return { dy: 14, dx: -40 };
        }
      } else {
        if (txt.length === 1) {
          return { dy: 14, dx: -30 };
        } else if (txt.length === 2) {
          return { dy: 14, dx: -24 };
        } else if (txt.length > 2) {
          return { dy: 14, dx: -46 };
        } else {
          return { dy: 14, dx: -40 };
        }
      }
    }
  } //index 2
  else if (idx === 2) {
    if (txt.length === 1) {
      return { dy: 14, dx: -20 };
    } else if (txt.length === 4) {
      return { dy: 14, dx: -35 };
    } else if (txt.length < 3) {
      return { dy: 14, dx: -24 };
    } else {
      return { dy: 14, dx: -38 };
    }
  }
  return { dy: 0, dx: 0 };
};

export default svgAlignKR;
