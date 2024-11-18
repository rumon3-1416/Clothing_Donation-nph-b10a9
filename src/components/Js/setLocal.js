const setLocal = (k, v) => {
  const getLocal = JSON.parse(localStorage.getItem(k));

  if (!getLocal) {
    localStorage.setItem(k, JSON.stringify([v]));

    return 'succeed';
  } else if (getLocal) {
    let totalCartPrice = 0;
    let isAlready = false;

    getLocal.forEach(gl => {
      gl.productId === v.productId && (isAlready = true);
      totalCartPrice += gl.price;
    });

    if (isAlready) {
      return 'failed';
    } else if (k === 'cart' && totalCartPrice + v.price > 10000) {
      return 'max';
    } else {
      const newLocal = [...getLocal, v];

      localStorage.setItem(k, JSON.stringify(newLocal));

      return 'succeed';
    }
  }
};

export default setLocal;
