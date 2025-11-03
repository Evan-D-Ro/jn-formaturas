import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Package, MessageCircle } from "lucide-react";
import albumDetailImage from "@/assets/album-detail.jpg";
import customerServiceImage from "@/assets/customer-service.jpg";
import deliveryServiceImage from "@/assets/delivery-service.jpg";
import whatsapp from "@/assets/whatsapp.webp";

const Services = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/554499243080?text=Olá! Gostaria de solicitar atendimento sobre os serviços da JN Formaturas.", "_blank");
  };

  const services = [
    {
      icon: BookOpen,
      title: "Produção de Álbuns de Formatura",
      description: "Álbuns personalizados, com acabamento premium e impressão de alta definição.",
      image: albumDetailImage,
      alt: "Álbum de formatura personalizado com acabamento premium",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: Users,
      title: "Vendas e Atendimento ao Cliente",
      description: "Equipe especializada em oferecer suporte e condições acessíveis aos formandos e comissões.",
      image: customerServiceImage,
      alt: "Atendimento especializado ao cliente",
      gradient: "from-secondary to-secondary/80",
    },
    {
      icon: Package,
      title: "Gestão de Cobrança e Entrega",
      description: "Processos transparentes e acompanhamento completo do pedido até a entrega final.",
      image: deliveryServiceImage,
      alt: "Gestão de entrega de álbuns de formatura",
      gradient: "from-accent to-destructive",
    },
  ];

  return (
    <section id="services" className="pt-12 pb-12 bg-[#F9FAFB] relative text-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-celebration mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Oferecemos soluções completas para tornar sua formatura inesquecível
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-xl rounded-3xl overflow-hidden bg-white max-w-xl text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`} />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-[#EB3F5B] hover:bg-[#d5344f] text-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all"
          >
            <img src={whatsapp} alt="Ícone do WhatsApp" className="w-6 h-6 mr-2" />
            Solicitar Atendimento
          </Button>
        </div>
      </div >
    </section >
  );
};

export default Services;
