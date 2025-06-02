export default function Message() {
  return (
    <div>
      <div className="chat chat-end">
        <div className="chat-header">
          Pankaj
          <time className="text-xs opacity-50">2 hours ago</time>
        </div>
        <div className="chat-bubble">i love you ❤️</div>
        <div className="chat-footer opacity-50">Seen</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">2 hour ago</time>
        </div>
        <div className="chat-bubble">I loved you.</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
}
