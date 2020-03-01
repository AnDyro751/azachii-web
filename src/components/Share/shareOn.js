/* eslint-disable import/prefer-default-export */

export function onFacebook(url, message) {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=https://azachii-develop.web.app${url}&quote=${encodeURI(message)}`,
    '',
    'width=400, height=400',
  );
}

export function onTwitter(url, message) {
  window.open(
    `https://twitter.com/intent/tweet?url=https://azachii-develop.web.app${url}&text=${encodeURI(message)}&via=Azachii1`,
    '',
    'width=400, height=400',
  );
}

export function onWhatsApp(url, message) {
  window.open(
    `https://api.whatsapp.com/send?text=${encodeURI(`${message}. https://azachii-develop.web.app${url}`)}`,
    '',
    'width=400, height=400',
  );
}

export function onLinkedin(url, title, message) {
  window.open(
    `https://www.linkedin.com/shareArticle?url=https://azachii-develop.web.app${url}&mini=true&title=${encodeURI(title)}&summary=${encodeURI(message)}`,
    '',
    'width=400, height=400',
  );
}
