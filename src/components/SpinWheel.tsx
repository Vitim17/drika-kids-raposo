import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SEGMENTS = [
  { discount: 20, color: "bg-kids-pink" },
  { discount: 25, color: "bg-kids-blue" },
  { discount: 30, color: "bg-kids-yellow" },
  { discount: 35, color: "bg-kids-green" },
  { discount: 15, color: "bg-kids-orange" },
];

const SpinWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [wonDiscount, setWonDiscount] = useState<number | null>(null);
  const [prizeMessage, setPrizeMessage] = useState("");

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    const segmentAngle = 360 / SEGMENTS.length;
    const randomSegment = Math.floor(Math.random() * SEGMENTS.length);
    const extraSpins = 5;
    
    // Calcular rotação para que o segmento sorteado fique exatamente sob a seta
    // A seta está no topo (0°), então giramos para trazer o meio do segmento para lá
    const targetRotation = extraSpins * 360 - (randomSegment * segmentAngle + segmentAngle / 2);
    
    const newRotation = rotation + targetRotation;
    setRotation(newRotation);

    // Definir o resultado baseado no segmento sorteado
    const winningDiscount = SEGMENTS[randomSegment].discount;
    setWonDiscount(winningDiscount);

    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      
      // Determinar se é primeira ou segunda peça
      const piece = winningDiscount <= 25 ? "primeira peça" : "segunda peça";
      const message = `Você ganhou ${winningDiscount}% de desconto na ${piece}!`;
      setPrizeMessage(message);
      
      toast.success(`🎉 Parabéns! ${message}`, {
        description: "Clique no botão abaixo para resgatar no WhatsApp!",
        duration: 5000,
      });
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-8 w-full max-w-md mx-auto px-4">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        {/* Pointer/Arrow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
          <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[32px] border-t-primary drop-shadow-lg sm:border-l-[20px] sm:border-r-[20px] sm:border-t-[40px]" />
        </div>

        {/* Wheel */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? "transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none",
          }}
        >
          {SEGMENTS.map((segment, index) => {
            const angle = (360 / SEGMENTS.length) * index;
            return (
              <div
                key={index}
                className={`absolute w-full h-full ${segment.color}`}
                style={{
                  clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin((Math.PI * 2) / SEGMENTS.length)}% ${50 - 50 * Math.cos((Math.PI * 2) / SEGMENTS.length)}%)`,
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: "50% 50%",
                }}
              >
                <div
                  className="absolute top-[20%] left-1/2 -translate-x-1/2 text-white font-fredoka font-bold text-2xl sm:text-3xl drop-shadow-lg"
                  style={{
                    transform: `rotate(${(360 / SEGMENTS.length) / 2}deg) translateX(17px)`,
                  }}
                >
                  {segment.discount}%
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {!hasSpun ? (
        <Button
          onClick={spinWheel}
          disabled={isSpinning}
          size="lg"
          className="font-fredoka font-bold text-xs sm:text-xl px-4 sm:px-12 py-3 sm:py-8 rounded-full shadow-2xl transform transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-kids-pink via-kids-purple to-kids-blue text-white border-2 sm:border-4 border-white w-full sm:w-auto text-center"
        >
          {isSpinning ? "🌟 Girando..." : "🎯 Gire a Roleta e Garanta seu Desconto"}
        </Button>
      ) : (
        <div className="space-y-4 sm:space-y-6 w-full">
          {/* Prize Message */}
          <div className="bg-gradient-to-r from-kids-pink via-kids-purple to-kids-blue p-1 rounded-2xl shadow-xl">
            <div className="bg-card px-4 sm:px-6 py-3 sm:py-4 rounded-xl">
              <p className="font-fredoka font-bold text-lg sm:text-2xl text-center text-foreground">
                🎉 {prizeMessage}
              </p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <Button
            onClick={() => {
              const piece = wonDiscount && wonDiscount <= 25 ? "primeira peça" : "segunda peça";
              const message = `Olá! Ganhei ${wonDiscount}% de desconto na ${piece} pela Roleta da Sorte da Drika Kids Raposo! 🎉`;
              const whatsappUrl = `https://wa.me/5522998937692?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            size="lg"
            className="w-full font-fredoka font-bold text-sm sm:text-xl px-4 sm:px-8 py-4 sm:py-8 rounded-full shadow-2xl transform transition-all hover:scale-105 bg-[#25D366] hover:bg-[#20BA5A] text-white border-2 sm:border-4 border-white"
          >
            📱 Resgatar Desconto no WhatsApp
          </Button>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;
