import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Shield } from "lucide-react";

const MVV = () => {
  const values = [
    { icon: Award, title: "Comprometimento e responsabilidade", color: "text-primary" },
    { icon: Shield, title: "Ética e transparência", color: "text-secondary" },
    { icon: Heart, title: "Respeito com clientes e parceiros", color: "text-destructive" },
    { icon: Target, title: "Qualidade em cada detalhe", color: "text-accent" },
    { icon: Eye, title: "Trabalho em equipe e paixão pelo que fazemos", color: "text-primary" },
  ];

  return (
    <section id="mvv" className="pt-12 pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary md:pr-4 md:pl-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Missão, Visão e Valores
          </h2>
          <div className="w-24 h-1 bg-gradient-celebration mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Missão */}
          <Card className="border-none shadow-large rounded-3xl bg-card/95 backdrop-blur-sm animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl text-primary">Missão</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-card-foreground text-justify">
                Produzir e comercializar álbuns de formatura com excelência, transformando
                fotografias em memórias eternas, com responsabilidade e compromisso com cada cliente.
              </p>
            </CardContent>
          </Card>

          {/* Visão */}
          <Card className="border-none shadow-large rounded-3xl bg-card/95 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl text-primary">Visão</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-card-foreground text-justify">
                Ser reconhecida como referência no mercado de produção de álbuns de formatura,
                destacando-se pela qualidade, inovação e relacionamento com nossos clientes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-3xl font-bold text-center text-primary-foreground mb-8">Nossos Valores</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-none shadow-medium rounded-2xl bg-card/95 backdrop-blur-sm hover:shadow-large hover:scale-105 transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center ${value.color}`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <p className="font-semibold text-card-foreground leading-snug">
                    {value.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVV;
