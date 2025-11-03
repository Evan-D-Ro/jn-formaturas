import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import albumDetailImage from "@/assets/album-detail.jpg";
import { GraduationCap } from "lucide-react";

const Quality = () => {
  const principles = [
    "Produtos de qualidade superior",
    "Atendimento diferenciado e personalizado",
    "Equipe treinada e dedicada",
    "Cada projeto tratado com exclusividade",
    "Melhoria contínua e inovação",
    "Transparência em todas as relações",
  ];

  return (
    <section id="quality" className="pt-12 bg-[#F9FAFB] relative text-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Política de Qualidade
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Card className="border-none shadow-medium rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={albumDetailImage}
                  alt="Detalhe de álbum de formatura aberto com fotos de alta qualidade"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-foreground text-justify">
                Nosso foco é oferecer aos formandos <strong className="text-primary">produtos de qualidade superior</strong> e
                um atendimento diferenciado. Para isso, contamos com uma equipe treinada e dedicada em cada
                setor — produção, vendas e cobrança — garantindo que cada álbum chegue perfeito até o cliente final.
              </p>
              <p className="text-lg leading-relaxed text-foreground text-justify">
                Acreditamos que cada formatura é única e, por isso, tratamos cada projeto com exclusividade.
                Buscamos constantemente melhoria contínua, inovação nos materiais e processos, e transparência
                em todas as nossas relações.
              </p>
              <p className="text-lg leading-relaxed text-primary font-semibold text-justify">
                Nossa satisfação está em ver o sorriso de quem recebe o álbum e revive um dos momentos
                mais marcantes da vida acadêmica.
              </p>
            </div>

            <div className="grid gap-3">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-center gap-3 bg-muted p-4 rounded-2xl">
                  <CheckCircle2 className="w-6 h-6 text-[#EB3F5B] flex-shrink-0" />
                  <span className="text-foreground font-medium text-left">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex items-center justify-center mt-16">
        {/* Linhas à esquerda e à direita */}
        <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-primary rounded-full" />

        {/* Ícone central */}
        <div className="mx-4 bg-background rounded-full p-3 shadow-md border border-primary/20">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>

        <div className="flex-grow h-[2px] bg-gradient-to-l from-transparent via-primary/60 to-primary rounded-full" />
      </div>
    </section>
  );
};

export default Quality;
