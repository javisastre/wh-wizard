import React from "react";
import { IMessage } from "../../utils/interfaces";

const Message = ({ content }: IMessage) => {
  return (
    <div className='message'>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
    </div>
  );
};

export default Message;
