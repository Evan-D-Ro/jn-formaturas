import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-graduation.webp";
import logo from "@/assets/logo-jn-formaturas.png"

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/554499243080?text=Olá! Gostaria de saber mais sobre os álbuns de formatura.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-b from-[#0B2C65] to-[#081B3A]"
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${heroImage})` }} />


      <div className="container mx-auto px-4 pb-4 relative z-10 text-center animate-fade-in">
        <div className="flex w-full justify-center align-center py-6">
          <img
            src={logo}
            alt="JN Formaturas Logo"
            className="h-48 w-auto transition-transform hover:scale-105"
          />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Transformando <span className="text-[#FFD447]">memórias</span> em{" "}
          <span className="text-[#EB3F5B]">lembranças</span> que duram para sempre
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
          A <strong>JN Formaturas</strong> eterniza momentos únicos com emoção, qualidade e um toque de brilho em cada detalhe.
        </p>

        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-[#EB3F5B] hover:bg-[#d5344f] text-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all"
        >
          Fazer Orçamento via WhatsApp
        </Button>
      </div>
    </section>

  );
};

export default Hero;
