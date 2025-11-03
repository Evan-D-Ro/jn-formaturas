import { Card, CardContent } from "@/components/ui/card";
import teamWorkImage from "@/assets/team-work.jpg";

const About = () => {
  return (
    <section id="about" className="pt-12 pb-20 bg-[#F9FAFB] relative text-center">
      <div className="container mx-auto px-4 relative z-10">
        {/* Título centralizado */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2C65] mb-4">
            Um pouco da nossa história
          </h2>
          <div className="w-24 h-1 bg-[#EB3F5B] mx-auto rounded-full" />
        </div>

        {/* Conteúdo centralizado (texto + imagem) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 animate-fade-in">

          {/* Card de texto */}
          <Card className="border-none shadow-xl rounded-3xl overflow-hidden bg-white max-w-xl text-left">
            <CardContent className="p-8 space-y-4 text-[#081B3A]/90">
              <p className="text-lg leading-relaxed text-justify">
                Fundada com o propósito de eternizar conquistas, a{" "}
                <strong className="text-[#EB3F5B]">JN Formaturas</strong> surgiu
                para atender formandos e comissões que buscam álbuns de alta
                qualidade, com design moderno e acabamento impecável.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                Atuando com transparência e dedicação, nossa equipe é formada
                por profissionais experientes em produção, vendas e cobrança,
                garantindo um atendimento ágil e eficiente em todas as etapas
                do processo.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                Ao longo dos anos, a JN se consolidou como uma empresa
                confiável e comprometida em entregar produtos que representam
                momentos únicos e inesquecíveis.
              </p>
              <p className="text-lg leading-relaxed text-justify font-semibold text-[#0B2C65]">
                Nossa missão é preservar histórias, transformando registros em
                lembranças duradouras.
              </p>
            </CardContent>
          </Card>

          {/* Imagem */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-xl w-full">
            <img
              src={teamWorkImage}
              alt="Equipe JN Formaturas trabalhando na produção de álbuns"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C65]/30 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
