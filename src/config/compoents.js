const data = {
  banner: {
    title: '轮播',
    type: 'banner',
    option: {
      banners: [
        { imgUrl: '' }
      ]
    }
  },
  nav: {
    title: '导航',
    type: 'nav',
    option: {
      navs: [
        {
          title: '导航标题',
          icon: '',
          link: ''
        }
      ]
    }
  }
}
function getConfig () {
  // console.log(data);
  return data
}
module.exports = {
  getConfig: getConfig
}
