import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-jn-formaturas.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2C65] text-white py-10 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#081B3A] via-transparent to-transparent opacity-95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* LOGO + EMPRESA */}
          <div>
            <img
              src={logo}
              alt="JN Formaturas Logo"
              className="h-24 w-auto mb-4 transition-transform hover:scale-105"
            />
            <p className="text-sm leading-relaxed text-white/90">
              <strong>Razão Social: JN Formaturas Ltda.</strong>
              <br />
              CNPJ: 27.261.611/0001-40
            </p>

            {/* REDES SOCIAIS */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/jnformaturas/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#EB3F5B] hover:bg-[#d5344f] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/jnformaturas/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#EB3F5B] hover:bg-[#d5344f] transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* LINKS RÁPIDOS */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-[#FFD447]">
              Links Rápidos
            </h3>
            <nav className="space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "A Empresa", id: "about" },
                { label: "Missão, Visão e Valores", id: "mvv" },
                { label: "Política de Qualidade", id: "quality" },
                { label: "Serviços", id: "services" },
                { label: "Contato", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-white/90 hover:text-[#FFD447] transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* ENDEREÇO */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-[#FFD447]">Contato</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#FFD447] mt-1" />
              <p className="leading-relaxed">
                Rua Sertanópolis, 465 – Centro<br />
                Santa Fé/PR<br />
                CEP: 86770-000
              </p>
            </div>
            <br />
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#FFD447] mt-1" />
              <p className="leading-relaxed">
                (44) 9924-3080
              </p>
            </div>

            <br />
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#FFD447] mt-1" />
              <p className="leading-relaxed">
                contato@jnformaturas.com.br
              </p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-sm text-white/80">
            © {currentYear} <strong>JN Formaturas</strong> – Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Glow decorativo */}
      <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-[#00C4FF]/10 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
