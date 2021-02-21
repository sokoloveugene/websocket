import { put, call, take } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import io from "socket.io-client";

export let socket;

export const emitMessageSend = (messageBody, callback) => {
  socket && socket.emit("message", messageBody, callback);
};

export const emitMessageDelete = (id) => {
  socket && socket.emit("delete_message", id);
};

export const emitMessageOpen = (id) => {
  socket && socket.emit("open_message", id);
};

export const emitMessageClose = (id) => {
  socket && socket.emit("close_message", id);
};

const createEventChannel = function* () {
  return eventChannel((emit) => {
    // call emit when a message is received
    socket = io.connect("http://localhost:4000");

    socket.on("message", (message) =>
      emit({ type: "ADD_MESSAGE", payload: message })
    );

    socket.on("delete_message", (id) => {
      emit({ type: "DELETE_MESSAGE", payload: id });
    });

    socket.on("open_message", (id) => {
      emit({ type: "OPEN_MESSAGE", payload: id });
    });

    socket.on("close_message", (id) => {
      emit({ type: "CLOSE_MESSAGE", payload: id });
    });

    // Return a function to be called when done listening
    return () => {
      emit(END);
      socket.close();
    };
  });
};

export const socketInitializeWorker = function* () {
  const channel = yield call(createEventChannel);

  while (true) {
    // 2- wait for the next message from the server
    const action = yield take(channel);
    // 3- Send the message payload to the reducer
    yield put(action);
  }
};
