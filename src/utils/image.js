const URL = window.URL || window.webkitURL || window.mozURL

/**
 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
 * @param dataURI
 */
export const dataURItoBuffer = (dataURI) => {
  var byteString = atob(dataURI.split(',')[1])
  var buffer = new ArrayBuffer(byteString.length)
  var view = new Uint8Array(buffer)
  for (var i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i)
  }
  return buffer
}
export const dataURItoBlob = (dataURI) => {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  var buffer = dataURItoBuffer(dataURI)
  return new Blob([buffer], {
    type: mimeString
  })
}

export const dataURItoObjectURL = (dataURI) => {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  // var mimeString = 'application/zip'
  var buffer = dataURItoBuffer(dataURI)
  var blob = new Blob([buffer], {
    type: mimeString
  })
  return URL.createObjectURL(blob)
}
