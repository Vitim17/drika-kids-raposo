const FloatingElements = () => {
  const balloons = [
    { emoji: "🎈", left: "10%", delay: "0s", duration: "3s" },
    { emoji: "🎈", left: "20%", delay: "0.5s", duration: "3.5s" },
    { emoji: "🎈", left: "80%", delay: "1s", duration: "4s" },
    { emoji: "🎈", left: "90%", delay: "1.5s", duration: "3.2s" },
    { emoji: "🎉", left: "30%", delay: "0.3s", duration: "3.8s" },
    { emoji: "🎊", left: "70%", delay: "0.8s", duration: "3.3s" },
    { emoji: "⭐", left: "50%", delay: "1.2s", duration: "4.2s" },
    { emoji: "✨", left: "15%", delay: "0.6s", duration: "3.6s" },
    { emoji: "🎁", left: "85%", delay: "1.4s", duration: "3.9s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className="absolute text-4xl animate-float opacity-60"
          style={{
            left: balloon.left,
            top: "100%",
            animationDelay: balloon.delay,
            animationDuration: balloon.duration,
          }}
        >
          {balloon.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
