/**
 * Envia notificações ao sistema
 * @param {Object} message Mensagem {title: '', description: ''}
 */
export function notify (message) {
  browser.notifications.create({
    type: 'basic',
    iconUrl: browser.extension.getURL('icons/seipp.png'),
    title: message.title,
    message: message.description
  })
}