import { useRef } from "react";
import confetti from "canvas-confetti";
export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = ["#bb0000", "#ffffff"];
  const handleButtonClick = () => {
    const myCanvas = canvasRef.current;
    if (myCanvas) {
      const myConfetti = confetti.create(myCanvas, { resize: true });

      myConfetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      myConfetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
    }
  };

  return (
    <div>
      {/* <button onClick={handleButtonClick}>Throw Confetti</button> */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 10,
          position: "absolute",
          pointerEvents: "none",
        }}
      ></canvas>
    </div>
  );
}
