function trimLongText(text: string, length = 200) {
  return text.length > length ? `${text.substring(0, length - 3)}...` : text;
}

export default trimLongText;
