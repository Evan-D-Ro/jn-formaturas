import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="pt-12 pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 " />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD447] mb-4">
            Fale Conosco
          </h2>
          <div className="w-24 h-1 bg-[#EB3F5B] mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Fale com a <span className="font-semibold text-[#FFD447]">JN Formaturas </span>
            e saiba mais sobre nossos álbuns e condições especiais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Formulário de contato */}
          <div className="flex">
            <Card className="flex flex-col justify-between w-full border-none shadow-2xl rounded-3xl bg-white/10 backdrop-blur-sm text-white animate-fade-in">
              <CardHeader>
                <CardTitle className="text-3xl text-[#FFD447]">Envie sua mensagem</CardTitle>
                <CardDescription className="text-base text-white/80">
                  Preencha o formulário abaixo e nossa equipe entrará em contato.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#EB3F5B]"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#EB3F5B]"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#EB3F5B]"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#EB3F5B] min-h-32"
                        placeholder="Como podemos ajudar?"
                      />
                    </div>
                  </div>
                  <div className="align-center justify-center flex">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-max bg-[#EB3F5B] hover:bg-[#d5344f] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02]"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Cards da direita (endereço + mapa) */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <Card className="border-none shadow-2xl rounded-3xl bg-[#EB3F5B] text-white flex-grow">
              <CardContent className="h-full p-8 space-y-6 justify-between flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD447] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0B2C65]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Endereço</h3>
                    <p className="leading-relaxed">
                      Rua Sertanópolis, 465 – Centro<br />
                      Santa Fé/PR – CEP 86770-000
                    </p>
                  </div>
                </div>

                <span className="border-b border-white/20" />

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD447] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0B2C65]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Telefone</h3>
                    <p className="leading-relaxed">(44) 9924-3080</p>
                  </div>
                </div>

                <span className="border-b border-white/20" />

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD447] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0B2C65]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">E-mail</h3>
                    <p className="leading-relaxed">contato@jnformaturas.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden flex-grow">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0000000000005!2d-51.8126937!3d-23.0411085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fXXXXX:0x0!2sRua Sertanópolis 465%20-%20Centro%20Santa Fé-PR%20CEP%2086770-000!5e0!3m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização JN Formaturas"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
