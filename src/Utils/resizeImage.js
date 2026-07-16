export function resizeImage(src, resize, defaultImage) {
  if (!src) {
    return defaultImage;
  }

  let newSrc = src.replace('hashnode.imgix.net', 'cdn.hashnode.com');
  if (newSrc.indexOf('//cdn.hashnode.com') === -1) {
    return newSrc;
  }

  let opts = '';
  Object.keys(resize).forEach((prop) => {
    if (prop === 'w' || prop === 'h' || prop === 'mask' || prop === 'corner-radius') {
      opts += `${prop}=${resize[prop]}&`;
    } else if (prop === 'fill') {
      opts += `fit=fill&fill=${resize[prop]}&`;
    } else if (prop === 'c') {
      opts += `fit=crop&crop=${resize[prop] === 'face' ? 'faces' : 'entropy'}&`;
    }
  });

  if (opts) {
    opts += src.indexOf('.gif') !== -1
      ? 'auto=format,compress&gif-q=60&format=webm'
      : 'auto=compress,format&format=webp';
  } else {
    opts = src.indexOf('.gif') !== -1
      ? 'auto=format,compress&gif-q=60&format=webm'
      : 'auto=compress,format&format=webp';
  }

  return `${newSrc}${newSrc.indexOf('?') !== -1 ? '&' : '?'}${opts}`;
}
