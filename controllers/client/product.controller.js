module.exports.index = (req, res) => {
  res.render('client/pages/products/index', {
    titlePage: 'Trang Sản Phẩm',
    messagePage: 'Nội Dung Trang Sản Phẩm',
  });
};
