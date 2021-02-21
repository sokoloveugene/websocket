import React, { useEffect, useState } from "react";
import { emitMessageSend } from "../../redux/socketSaga";

const CreateMessage = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const name = window.prompt("Enter your name");
    setName(name);
  }, []);

  const messageCreatedCallback = ({ res }) => {
    console.log(res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emitMessageSend({ name, message }, messageCreatedCallback);
    setMessage("");
  };

  const handleChange = ({ target: { value } }) => {
    return setMessage(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="message"
        name="message"
        type="text"
        value={message}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default CreateMessage;
