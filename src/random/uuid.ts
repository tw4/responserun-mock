export function generateUuid4() {
  const hexChars = '0123456789abcdef';
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  for (let i = 0; i < 36; i++) {
    const placeholder = uuid[i];
    if (placeholder === 'x') {
      const randomIndex = Math.floor(Math.random() * 16);
      uuid = uuid.replace('x', hexChars[randomIndex]);
    } else if (placeholder === 'y') {
      const randomIndex = Math.floor(Math.random() * 4) + 8; // 8, 9, A, B
      uuid = uuid.replace('y', hexChars[randomIndex]);
    }
  }

  return uuid;
}
