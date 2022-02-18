function setTitle() {
  var host = (location.host || '').replace(/www./, '')
  var title = {
    'zezur.com': 'ZEZUR HOME'
  }[host] || 'UZZK.COM 独立站'
  title && (document.title = title)
}
setTitle()