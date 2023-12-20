function Message() {
  //this is known as JSX: JavaScript XML
  //...this code will be converted down to JS
  //...Dont get confused because it looks like HTML

  //because this is typescript/javascript we can write basic code
  const name = "Parsa";

  return <h1>Hello {name}</h1>;
}

export default Message;
