import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsapp from "@/assets/whatsapp.webp";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/554499243080?text=Olá! Gostaria de saber mais sobre os álbuns de formatura da JN Formaturas.", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-large hover:scale-110 transition-transform p-0"
      aria-label="Abrir WhatsApp"
    >
      <img src={whatsapp} alt="Ícone do WhatsApp" className="w-10 h-10 m-auto" />
    </Button>
  );
};

export default WhatsAppButton;
