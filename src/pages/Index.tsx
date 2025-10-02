import SpinWheel from "@/components/SpinWheel";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background relative overflow-hidden">
      <FloatingElements />
      
      <main className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 space-y-4">
          <h1 className="font-fredoka font-semibold text-3xl md:text-4xl lg:text-5xl text-kids-purple drop-shadow-lg">
            🏪 Drika Kids Raposo - Especial Dia das Crianças 🎉
          </h1>
          
          <div className="inline-block bg-gradient-to-r from-kids-pink via-kids-purple to-kids-blue p-1 rounded-2xl shadow-2xl animate-float">
            <div className="bg-card px-6 py-4 rounded-xl">
              <p className="font-poppins font-semibold text-xl md:text-2xl text-foreground">
                👶 Dia das Crianças é na Drika Kids Raposo, aproveite agora descontos exclusivos!
              </p>
            </div>
          </div>
        </div>


        {/* Wheel Section */}
        <div className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-kids-pink/30">
          <SpinWheel />
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-3xl">
            <span className="animate-spin">⭐</span>
            <span className="animate-bounce">🌟</span>
            <span className="animate-spin">✨</span>
            <span className="animate-bounce">💫</span>
            <span className="animate-spin">⭐</span>
          </div>
          
          <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada giro é uma surpresa! Descontos especiais de até <span className="text-kids-orange font-bold">35%</span> esperando por você! 🎯
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 text-4xl mt-6">
            <span>🧸</span>
            <span>🚀</span>
            <span>🎨</span>
            <span>⚽</span>
            <span>🎮</span>
            <span>🎪</span>
          </div>
        </div>
      </main>

      {/* Decorative Background Shapes */}
      <div className="fixed top-20 right-10 w-32 h-32 bg-kids-blue/20 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 left-10 w-40 h-40 bg-kids-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="fixed top-1/2 left-1/4 w-24 h-24 bg-kids-yellow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="fixed bottom-1/3 right-1/4 w-36 h-36 bg-kids-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
    </div>
  );
};

export default Index;
