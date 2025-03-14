import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto" ref={containerRef}>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start a conversation</p>
      )}
    </div>
  );
};
export default Messages;

// STARTER CODE SNIPPET
// import Message from "./Message";

// const Messages = () => {
// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 		</div>
// 	);
// };
// export default Messages;
