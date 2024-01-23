module.exports.index = (req, res) => {
  res.render('client/pages/home/index', {
    titlePage: 'Trang Chủ',
    messagePage: 'Nội Dung Trang Chủ',
  });
};
