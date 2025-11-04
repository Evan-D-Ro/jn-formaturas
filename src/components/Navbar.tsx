import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-jn-formaturas.png";
import logo2 from "@/assets/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detecta scroll para alterar o fundo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta a seção visível com IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 } // 50% da seção visível já conta
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const navbarHeight = 100; // altura aproximada da navbar (ajuste se necessário)

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };


  const menuItems = [
    { label: "Home", id: "home" },
    { label: "A Empresa", id: "about" },
    { label: "Missão, Visão e Valores", id: "mvv" },
    { label: "Política de Qualidade", id: "quality" },
    { label: "Serviços", id: "services" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isMenuOpen
        ? "bg-[#0B2C65]/95 shadow-lg backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28 relative">
          {/* Texto ou Logo dinâmico */}
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer flex items-center justify-center transition-all duration-500 relative"
          >
            {/* Logo2 visível na Home */}
            <div
              onClick={() => scrollToSection("home")}
              className={`cursor-pointer flex items-center justify-start 
                  ${activeSection === "home"
                  ? "ml-5"
                  : ""}
              transition-all duration-500 relative`}
            >

              <span
                className={`whitespace-nowrap text-lg md:text-xl font-extrabold tracking-wide transition-all duration-500 absolute inset-x-0 text-center flex justify-center items-center gap-1
    ${activeSection === "home"
                    ? "opacity-100 scale-100 translate-y-0 text-white drop-shadow-md"
                    : "opacity-0 scale-90 -translate-y-2 pointer-events-none"
                  }`}
              >
                <span className="text-white [text-shadow:_1px_1px_0_#FFD447] inline-block">
                  JN
                </span>
                <span className="relative text-white font-semibold inline-block align-middle">
                  <span className="relative z-10">Formaturas</span>
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-[#EB3F5B] -z-0 rounded-sm"></span>
                </span>
              </span>


              {/* Logo principal visível fora da Home */}
              <img
                src={logo}
                alt="JN Formaturas - Álbuns de Formatura"
                className={`h-28 md:h-28 py-2 w-auto object-contain transition-all duration-700 ${activeSection !== "home"
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-2 pointer-events-none"
                  }`}
              />

            </div>



          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex [@media(max-width:1100px)]:hidden items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium transition-colors duration-300 ${activeSection === item.id
                  ? "text-[#FFD447] after:w-full"
                  : "text-white hover:text-[#FFD447]"
                  } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-[#FFD447] after:transition-all after:duration-300 ${activeSection === item.id
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }`}
              >
                {item.label}
              </button>
            ))}

            {/* Botão CTA */}
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/554499243080?text=Olá! Gostaria de saber mais sobre os álbuns de formatura.",
                  "_blank"
                )
              }
              className="ml-4 bg-[#EB3F5B] hover:bg-[#d5344f] text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="[@media(min-width:1100px)]:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="[@media(min-width:1100px)]:hidden py-4 border-t border-white/20 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${activeSection === item.id
                  ? "bg-[#EB3F5B]/10 text-[#FFD447]"
                  : "text-white hover:bg-white/10"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 px-4">
              <Button
                className="w-full bg-[#EB3F5B] hover:bg-[#d5344f] text-white font-semibold rounded-xl"
                onClick={() =>
                  window.open(
                    "https://wa.me/554499243080?text=Olá! Gostaria de saber mais sobre os álbuns de formatura.",
                    "_blank"
                  )
                }
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav >
  );
};

export default Navbar;
