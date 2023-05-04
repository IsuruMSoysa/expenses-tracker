import { Button, Modal, Space } from "antd";
const info = () => {
  Modal.info({
    title: "This is a notification message",
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
};
export const success = (message) => {
  Modal.success({
    content: message,
  });
};
const error = () => {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages...",
  });
};
const warning = () => {
  Modal.warning({
    title: "This is a warning message",
    content: "some messages...some messages...",
  });
};
