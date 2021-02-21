import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  emitMessageDelete,
  emitMessageOpen,
  emitMessageClose,
} from "../../redux/socketSaga";
import Modal from "../Modal/Modal";
import * as s from "./Messages.styled";

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const messages = useSelector((state) => state.messages);
  const handleDelete = (id) => {
    emitMessageDelete(id);
  };

  const handleSelectMessage = (data) => {
    setSelectedMessage(data);
    emitMessageOpen(data.id);
  };

  const handleUnselectMessage = () => {
    emitMessageClose(selectedMessage.id);

    setSelectedMessage(null);

    console.log("TESt");
  };

  return (
    <>
      {selectedMessage && (
        <Modal data={selectedMessage} onClose={handleUnselectMessage} />
      )}
      <s.Container>
        <s.Header>
          {["Name", "Message", "Created at"].map((i) => (
            <s.TextItem key={i}>{i}</s.TextItem>
          ))}
        </s.Header>

        {messages.map((m) => (
          <s.Row key={m.id}>
            <s.TextItem>{m.name}</s.TextItem>
            <s.TextItem>{m.message}</s.TextItem>
            <s.TextItem>{m.createdAt}</s.TextItem>
            <s.Controls>
              <s.BlueButton
                disabled={m.opened}
                onClick={() => handleSelectMessage(m)}
              >
                Open
              </s.BlueButton>
              <s.RedButton onClick={() => handleDelete(m.id)}>
                Delete
              </s.RedButton>
            </s.Controls>
          </s.Row>
        ))}
      </s.Container>
    </>
  );
};

export default Messages;
