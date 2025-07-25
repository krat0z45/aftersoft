import { Github, Linkedin, Twitter, Instagram, Code } from "lucide-react";
import Link from "next/link";

const serviceLinks = [
    { href: "/#services", label: "Desarrollo Web" },
    { href: "/#services", label: "E-commerce" },
    { href: "/#services", label: "Apps Móviles" },
    { href: "/#services", label: "Consultoría" },
    { href: "/#services", label: "Mantenimiento" },
];

const companyLinks = [
    { href: "#", label: "Sobre Nosotros" },
    { href: "/#portfolio", label: "Portafolio" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Carreras" },
    { href: "/#contact", label: "Contacto" },
];

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

const socialLinks = [
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Github, label: "GitHub" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: FacebookIcon, label: "Facebook" },
];

export function Footer() {
  return (
    <footer 
        className="border-t border-border bg-background/90"
    >
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            
            {/* Column 1: Logo and Social */}
            <div className="md:col-span-4">
                <Link href="/#home" className="flex items-center gap-2 mb-4">
                    <div className="bg-primary p-2 rounded-md">
                        <Code className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="font-headline text-2xl font-bold">Aftersoft</span>
                </Link>
                <p className="text-muted-foreground mb-6 max-w-xs">
                    Transformamos ideas en experiencias digitales extraordinarias. Tu socio tecnológico para el éxito digital.
                </p>
                <div className="flex items-center gap-4">
                    {socialLinks.map(social => (
                        <Link key={social.label} href={social.href} aria-label={social.label} className="text-muted-foreground transition-colors hover:text-primary">
                            <social.icon className="h-6 w-6" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Spacer Column */}
            <div className="hidden md:block md:col-span-2"></div>

            {/* Column 2: Services */}
            <div className="md:col-span-3">
                <h3 className="font-headline text-lg font-semibold mb-4">Servicios</h3>
                <ul className="space-y-3">
                    {serviceLinks.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Company */}
            <div className="md:col-span-3">
                <h3 className="font-headline text-lg font-semibold mb-4">Empresa</h3>
                <ul className="space-y-3">
                    {companyLinks.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Aftersoft. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-primary hover:underline">Privacidad</Link>
                <Link href="/terms-of-service" className="hover:text-primary hover:underline">Términos</Link>
                <Link href="#" className="hover:text-primary hover:underline">Cookies</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
