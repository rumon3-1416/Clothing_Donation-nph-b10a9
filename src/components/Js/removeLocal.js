const removeLocal = (k, id) => {
  const getLocal = JSON.parse(localStorage.getItem(k));

  const filteredLocal = getLocal.filter(product => product.productId !== id);

  localStorage.setItem(k, JSON.stringify(filteredLocal));
};

export default removeLocal;
