"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronDown, 
  MessageCircle, 
  Leaf, 
  ArrowLeft,
  ShieldCheck,
  FileText,
  UserCheck,
  Bell,
  Lock,
  Eye,
  Database,
  Share2,
  Trash2,
  Mail,
  Info,
  Smartphone,
  Globe,
  UserPlus
} from "lucide-react";

const WHATSAPP_NUMBER = "51955548641";

const sections = [
  {
    id: "responsable",
    title: "1. Responsable del tratamiento de datos",
    icon: <UserCheck className="h-5 w-5" />,
    content: "GOXA es responsable del tratamiento de los datos personales que los usuarios proporcionan a través de nuestra página web, landing pages, formularios, redes sociales, WhatsApp, catálogos digitales u otros canales oficiales de atención.\n\nDatos del responsable:\nNombre comercial: GOXA\nDomicilio: Oxapampa, Pasco - Perú\nCorreo electrónico: hola@goxa.pe\nWhatsApp: 955 548 641"
  },
  {
    id: "datos-recopilados",
    title: "2. Datos personales que recopilamos",
    icon: <FileText className="h-5 w-5" />,
    content: "GOXA podrá recopilar los siguientes datos personales:\n\n- Nombre y apellidos.\n- Número de WhatsApp o teléfono.\n- Correo electrónico.\n- Distrito o zona de residencia.\n- Dirección de entrega, cuando sea necesaria para coordinar un pedido.\n- Producto de interés.\n- Historial de consultas, pedidos o interacciones con la marca.\n- Información necesaria para gestionar pagos, entregas, cambios, reclamos o atención al cliente.\n\nGOXA no solicita datos sensibles como información de salud, religión, orientación política, datos biométricos u otros similares, salvo que el usuario los comparta voluntariamente y sean necesarios para atender una solicitud específica."
  },
  {
    id: "finalidades",
    title: "3. Finalidades del tratamiento",
    icon: <Database className="h-5 w-5" />,
    content: "Los datos personales proporcionados serán utilizados para las siguientes finalidades:\n\n- Atender consultas realizadas por el usuario.\n- Contactar al usuario por WhatsApp, correo electrónico, llamada u otros canales digitales.\n- Enviar información sobre productos, catálogo, precios y disponibilidad.\n- Gestionar registros realizados en formularios.\n- Confirmar pedidos, pagos y entregas.\n- Coordinar cambios, cancelaciones, devoluciones, quejas o reclamos.\n- Brindar soporte y atención al cliente.\n- Mejorar nuestros productos, canales digitales y experiencia de atención.\n- Cumplir obligaciones legales aplicables.\n\nCuando el usuario lo autorice expresamente, GOXA también podrá utilizar sus datos para enviar promociones, novedades, descuentos, campañas comerciales, beneficios y ofertas personalizadas."
  },
  {
    id: "comunicaciones",
    title: "4. Comunicaciones comerciales",
    icon: <Bell className="h-5 w-5" />,
    content: "El envío de comunicaciones comerciales, promociones, descuentos, novedades u ofertas de GOXA se realizará únicamente cuando el usuario haya otorgado su autorización, por ejemplo, al marcar la casilla correspondiente en un formulario.\n\nEstas comunicaciones podrán realizarse por WhatsApp, correo electrónico, llamadas, SMS, redes sociales u otros canales digitales proporcionados por el usuario.\n\nEl usuario podrá retirar su autorización para recibir comunicaciones comerciales en cualquier momento escribiendo a los canales oficiales de GOXA."
  },
  {
    id: "base-legal",
    title: "5. Base legal del tratamiento",
    icon: <ShieldCheck className="h-5 w-5" />,
    content: "GOXA tratará los datos personales sobre la base del consentimiento otorgado por el usuario, la atención de solicitudes iniciadas por el propio usuario, la ejecución de pedidos o compras, el cumplimiento de obligaciones legales y el interés legítimo de mantener una adecuada relación comercial y de atención.\n\nGOXA procurará tratar los datos personales de forma adecuada, proporcional, segura y conforme a la normativa peruana aplicable en materia de protección de datos personales."
  },
  {
    id: "obligatorio",
    title: "6. Carácter obligatorio o facultativo de los datos",
    icon: <Info className="h-5 w-5" />,
    content: "Los datos solicitados en formularios o canales de atención pueden ser necesarios para responder consultas, enviar información, coordinar pedidos o gestionar entregas.\n\nSi el usuario no proporciona los datos mínimos requeridos, GOXA podría no estar en capacidad de atender correctamente su solicitud, confirmar un pedido o coordinar una entrega.\n\nLa autorización para recibir comunicaciones comerciales es facultativa y no condiciona la atención de consultas o pedidos iniciados por el usuario."
  },
  {
    id: "conservacion",
    title: "7. Conservación de datos",
    icon: <Eye className="h-5 w-5" />,
    content: "GOXA conservará los datos personales durante el tiempo necesario para cumplir las finalidades descritas en esta Política de Privacidad, atender consultas, gestionar pedidos, cumplir obligaciones legales, resolver reclamos o mantener la relación comercial con el usuario.\n\nCuando los datos ya no sean necesarios para dichas finalidades, GOXA podrá eliminarlos, anonimizarlos o conservarlos únicamente cuando exista una obligación legal o una razón legítima para hacerlo."
  },
  {
    id: "terceros",
    title: "8. Proveedores y terceros",
    icon: <Share2 className="h-5 w-5" />,
    content: "GOXA no venderá los datos personales de sus usuarios.\n\nSin embargo, podrá compartirlos con proveedores o aliados necesarios para operar sus servicios, tales como servicios de mensajería, delivery, almacenamiento de datos, herramientas de marketing, plataformas de formularios, servicios de correo electrónico, pasarelas de pago, soporte tecnológico o atención al cliente.\n\nEstos terceros deberán utilizar los datos únicamente para las finalidades relacionadas con los servicios prestados a GOXA y conforme a las medidas de seguridad correspondientes."
  },
  {
    id: "seguridad",
    title: "9. Seguridad de la información",
    icon: <Lock className="h-5 w-5" />,
    content: "GOXA adoptará medidas razonables para proteger los datos personales contra pérdida, uso indebido, acceso no autorizado, alteración, divulgación o destrucción.\n\nEstas medidas pueden incluir controles de acceso, uso de canales oficiales, limitación de acceso interno, almacenamiento seguro y revisión periódica de los procesos de atención y gestión de datos."
  },
  {
    id: "derechos",
    title: "10. Derechos del titular de datos personales",
    icon: <Eye className="h-5 w-5" />,
    content: "El usuario puede ejercer los derechos que le reconoce la normativa aplicable en materia de protección de datos personales, incluyendo el derecho de acceso, rectificación, cancelación, oposición y otros derechos reconocidos por ley.\n\nEsto significa que el usuario puede solicitar información sobre sus datos, pedir que sean corregidos, solicitar su eliminación cuando corresponda u oponerse a ciertos usos de su información.\n\nPara ejercer estos derechos, el usuario puede comunicarse con GOXA a través de:\n\nCorreo electrónico: hola@goxa.pe\nWhatsApp: 955 548 641"
  },
  {
    id: "retiro-consentimiento",
    title: "11. Retiro del consentimiento",
    icon: <Trash2 className="h-5 w-5" />,
    content: "El usuario podrá retirar su consentimiento para el tratamiento de sus datos personales o para el envío de comunicaciones comerciales en cualquier momento.\n\nEl retiro del consentimiento no afectará la validez del tratamiento realizado antes de la solicitud ni impedirá que GOXA conserve información cuando exista una obligación legal, contractual o legítima para hacerlo."
  },
  {
    id: "cookies",
    title: "12. Cookies y tecnologías similares",
    icon: <Globe className="h-5 w-5" />,
    content: "GOXA podrá utilizar cookies, píxeles, etiquetas u otras tecnologías similares para mejorar la experiencia del usuario, medir el rendimiento de sus campañas, analizar visitas a la página, optimizar contenidos y mejorar la comunicación comercial.\n\nEstas herramientas pueden recopilar información como páginas visitadas, dispositivo utilizado, navegador, fuente de tráfico, interacciones con anuncios o comportamiento general dentro de nuestros canales digitales."
  },
  {
    id: "menores",
    title: "13. Menores de edad",
    icon: <UserPlus className="h-5 w-5" />,
    content: "Los canales digitales de GOXA están dirigidos principalmente a personas mayores de edad.\n\nGOXA no busca recopilar intencionalmente datos personales de menores de edad sin autorización de sus padres, tutores o representantes legales."
  },
  {
    id: "terceros-enlaces",
    title: "14. Enlaces a terceros",
    icon: <Smartphone className="h-5 w-5" />,
    content: "Nuestros canales digitales pueden contener enlaces a redes sociales, plataformas de pago, servicios de mensajería, formularios externos u otras páginas de terceros.\n\nGOXA no se responsabiliza por las prácticas de privacidad, contenidos o condiciones de uso de dichos terceros. Recomendamos revisar sus respectivas políticas antes de proporcionar información personal."
  },
  {
    id: "modificaciones",
    title: "15. Modificaciones de la Política de Privacidad",
    icon: <Bell className="h-5 w-5" />,
    content: "GOXA podrá actualizar o modificar esta Política de Privacidad cuando lo considere necesario, especialmente por cambios normativos, comerciales, tecnológicos u operativos.\n\nLa versión vigente será la publicada en nuestra página web, landing page o canal oficial correspondiente."
  },
  {
    id: "contacto",
    title: "16. Contacto",
    icon: <Mail className="h-5 w-5" />,
    content: "Para consultas sobre esta Política de Privacidad, tratamiento de datos personales o ejercicio de derechos, puedes comunicarte con GOXA a través de:\n\nWhatsApp: 955 548 641\nCorreo electrónico: hola@goxa.pe\nUbicación: Oxapampa, Pasco - Perú\nHorario de atención: Lunes a Sábado de 9:00 am a 6:00 pm"
  }
];

export default function PrivacidadPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-goxa-cream font-sans pb-12">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-[430px] mx-auto flex items-center justify-between">
          <Link href="/#formulario" className="flex items-center gap-2 text-goxa-dark hover:text-goxa-green transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-[14px] font-bold">Volver</span>
          </Link>
          <div className="flex flex-col items-center">
            <Image src="/logo.png" alt="GOXA Logo" width={40} height={40} className="object-contain" />
          </div>
          <div className="w-10"></div>
        </div>
      </header>

      <section className="max-w-[430px] mx-auto px-6 pt-10">
        <div className="text-center mb-10">
          <h1 className="font-serif text-[32px] font-bold leading-tight text-goxa-dark">
            Política de
            <span className="block text-[24px] font-medium text-goxa-green mt-1">Privacidad</span>
          </h1>
          <div className="flex justify-center my-4">
            <ShieldCheck className="h-6 w-6 text-goxa-gold" />
          </div>
          <p className="text-[13px] text-gray-500 font-medium">
            Última actualización: 01 de mayo de 2024
          </p>
          <p className="mt-6 text-[14px] leading-relaxed text-goxa-dark/80">
            En GOXA valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad explica qué información recopilamos, para qué la usamos, cómo la protegemos, con quién podríamos compartirla y cuáles son tus derechos como titular de datos personales.
            <br /><br />
            Al utilizar nuestros canales digitales, completar formularios, escribirnos por WhatsApp, solicitar información o realizar un pedido, declaras haber leído esta Política de Privacidad.
          </p>
        </div>

        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-[18px] font-bold text-goxa-dark mb-4">En resumen:</h2>
          <ul className="space-y-3 text-[14px] text-gray-600">
            <li className="flex gap-3"><div className="h-5 w-5 shrink-0 flex items-center justify-center rounded-full bg-goxa-pale text-goxa-green">•</div> Recopilamos tus datos para atender consultas, pedidos y entregas.</li>
            <li className="flex gap-3"><div className="h-5 w-5 shrink-0 flex items-center justify-center rounded-full bg-goxa-pale text-goxa-green">•</div> Podemos contactarte por WhatsApp, correo u otros canales digitales.</li>
            <li className="flex gap-3"><div className="h-5 w-5 shrink-0 flex items-center justify-center rounded-full bg-goxa-pale text-goxa-green">•</div> Solo te enviaremos promociones si das tu autorización.</li>
            <li className="flex gap-3"><div className="h-5 w-5 shrink-0 flex items-center justify-center rounded-full bg-goxa-pale text-goxa-green">•</div> No vendemos tus datos personales.</li>
            <li className="flex gap-3"><div className="h-5 w-5 shrink-0 flex items-center justify-center rounded-full bg-goxa-pale text-goxa-green">•</div> Puedes solicitar acceso, corrección, eliminación u oposición al uso de tus datos.</li>
          </ul>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <div 
              key={section.id} 
              id={section.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-goxa-cream text-goxa-green">
                    {section.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-goxa-dark">{section.title}</h3>
                </div>
                <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${openSection === section.id ? "rotate-180" : ""}`} />
              </button>
              
              {openSection === section.id && (
                <div className="px-5 pb-6 pt-0 ml-14">
                  <p className="text-[14px] leading-relaxed text-gray-600 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-[32px] p-6 shadow-xl border border-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Lock className="h-20 w-20 text-goxa-green" />
          </div>
          <div className="relative z-10">
            <h2 className="text-[20px] font-bold text-goxa-dark mb-2">Privacidad Garantizada</h2>
            <p className="text-[14px] text-gray-600 mb-6">Tus datos están protegidos bajo los más altos estándares.</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola GOXA, deseo consultar sobre mi privacidad y el uso de mis datos.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-goxa-dark text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-goxa-green transition-all"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-goxa-dark text-white mt-16 rounded-t-[40px] px-8 pt-12 pb-8">
        <div className="max-w-[430px] mx-auto">
          <div className="flex flex-col items-center mb-10">
            <Image src="/logo.png" alt="GOXA Logo" width={48} height={48} className="invert brightness-0 opacity-80" />
            <h2 className="font-serif text-xl font-bold tracking-widest mt-2">GOXA</h2>
            <p className="text-[10px] font-bold tracking-[3px] text-goxa-gold-light mt-1 uppercase">Origen que se siente</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-[12px] font-bold text-goxa-gold-light uppercase tracking-wider mb-4">Enlaces</h4>
              <ul className="space-y-3 text-[13px] text-white/70 font-medium">
                <li><Link href="/#formulario">Inicio</Link></li>
                <li><Link href="/#productos">Productos</Link></li>
                <li><Link href="/#nosotros">Nosotros</Link></li>
                <li><Link href="/#formulario">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-goxa-gold-light uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3 text-[13px] text-white/70 font-medium">
                <li><Link href="/terminos">Términos y Condiciones</Link></li>
                <li><Link href="/privacidad">Política de Privacidad</Link></li>
                <li><Link href="/comunicaciones">Autorización de Comunicaciones</Link></li>
                <li><Link href="/reclamaciones">Libro de Reclamaciones</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-[11px] text-white/50 font-medium">
              © 2025 GOXA. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
