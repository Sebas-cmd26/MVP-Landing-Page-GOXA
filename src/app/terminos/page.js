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
  Package,
  CreditCard,
  Truck,
  RotateCcw,
  Lock,
  BookOpen,
  Mail,
  Settings
} from "lucide-react";

const WHATSAPP_NUMBER = "51955548641";

const sections = [
  {
    id: "sobre-goxa",
    title: "1. Sobre GOXA",
    icon: <Leaf className="h-5 w-5" />,
    content: "GOXA es una marca dedicada a la comercialización de productos naturales, artesanales y seleccionados, provenientes de Oxapampa y otras zonas productoras del Perú.\n\nA través de nuestros canales digitales, GOXA brinda información sobre sus productos, precios, disponibilidad, promociones, formas de pago y opciones de entrega."
  },
  {
    id: "uso-canales",
    title: "2. Uso de nuestros canales digitales",
    icon: <FileText className="h-5 w-5" />,
    content: "El usuario puede interactuar con GOXA mediante nuestra página web, landing pages, formularios, redes sociales, anuncios digitales, WhatsApp, catálogos digitales u otros canales oficiales habilitados por la marca.\n\nEl usuario se compromete a utilizar estos canales de manera adecuada, brindando información verdadera, actual y completa. GOXA no se responsabiliza por errores en la atención, comunicación o entrega derivados de datos incorrectos o incompletos proporcionados por el usuario."
  },
  {
    id: "registro",
    title: "3. Registro de usuarios y datos",
    icon: <UserCheck className="h-5 w-5" />,
    content: "Para brindar atención personalizada, enviar información comercial, compartir catálogo, coordinar pedidos o comunicar promociones, GOXA podrá solicitar datos como nombre completo, número de WhatsApp, correo electrónico, distrito, zona de residencia, producto de interés u otra información necesaria para la atención.\n\nEl usuario declara que los datos proporcionados son verdaderos y autoriza a GOXA a utilizarlos para fines relacionados con la atención comercial, gestión de pedidos, coordinación de entregas y comunicaciones vinculadas a sus productos y servicios."
  },
  {
    id: "productos",
    title: "4. Productos ofrecidos",
    icon: <Package className="h-5 w-5" />,
    content: "GOXA puede ofrecer productos naturales, artesanales o seleccionados como café, miel, yogurt, lácteos, chocolates, snacks, alimentos de origen natural u otros productos relacionados.\n\nLa disponibilidad de productos puede variar según stock, temporada, proveedor, lote, zona de entrega o capacidad operativa.\n\nLas imágenes publicadas en nuestra página web, landing pages, redes sociales, anuncios o catálogos son referenciales. La presentación final del producto puede variar en empaque, etiqueta, tamaño, lote o presentación, sin afectar necesariamente la calidad del producto ofrecido."
  },
  {
    id: "precios",
    title: "5. Precios y promociones",
    icon: <Bell className="h-5 w-5" />,
    content: "Los precios publicados en nuestros canales digitales pueden variar según campaña, promoción, stock disponible, canal de venta, zona de entrega o actualización comercial.\n\nEl precio final de cada pedido será confirmado por GOXA antes de concretar la compra.\n\nGOXA podrá ofrecer promociones, descuentos, beneficios de bienvenida, códigos promocionales o campañas especiales. Cada promoción podrá estar sujeta a condiciones específicas como vigencia, stock disponible, monto mínimo de compra, zona de cobertura, uso único por cliente, restricciones por producto o no acumulación con otras promociones.\n\nSalvo que se indique expresamente lo contrario, los descuentos no son acumulables entre sí ni aplican sobre costos de envío."
  },
  {
    id: "pedidos",
    title: "6. Pedidos y pagos",
    icon: <CreditCard className="h-5 w-5" />,
    content: "El pedido se considera iniciado cuando el usuario solicita productos a través de WhatsApp, formulario, catálogo digital, redes sociales u otro canal oficial de GOXA.\n\nEl pedido se considera confirmado únicamente cuando GOXA valida el producto solicitado, cantidad, precio, datos del cliente, zona de entrega, medio de pago y disponibilidad de stock.\n\nGOXA podrá rechazar, cancelar o reprogramar un pedido si no existe stock, si los datos proporcionados son incorrectos, si no se confirma el pago o si la zona de entrega no se encuentra disponible.\n\nLos medios de pago disponibles serán informados por GOXA al momento de confirmar el pedido. En caso de pagos por transferencia, billeteras digitales u otros medios, GOXA podrá solicitar constancia de pago."
  },
  {
    id: "entregas",
    title: "7. Entregas y cobertura",
    icon: <Truck className="h-5 w-5" />,
    content: "Las entregas estarán sujetas a cobertura geográfica, disponibilidad logística, horarios de atención, demanda, condiciones climáticas, feriados u otros factores externos.\n\nGOXA informará al cliente el tiempo estimado de entrega antes de confirmar el pedido. Dicho tiempo es referencial y puede variar por causas ajenas a la marca.\n\nEl cliente es responsable de brindar correctamente su dirección, distrito, referencia, número de contacto y disponibilidad para recibir el pedido."
  },
  {
    id: "cambios",
    title: "8. Cambios, cancelaciones y devoluciones",
    icon: <RotateCcw className="h-5 w-5" />,
    content: "El cliente podrá solicitar cambios o cancelaciones antes de la confirmación final del pedido o antes de que este sea despachado.\n\nUna vez despachado el pedido, cualquier cambio, cancelación o devolución será evaluado por GOXA según el caso concreto.\n\nPor tratarse de productos alimenticios, las devoluciones estarán sujetas a revisión de las condiciones de conservación, manipulación, empaque, fecha de entrega y evidencia presentada por el cliente.\n\nGOXA podrá aceptar cambios, reposiciones o devoluciones cuando exista un error atribuible a la marca, como entrega de producto incorrecto, daño evidente durante el despacho o incumplimiento de condiciones previamente confirmadas."
  },
  {
    id: "responsabilidad",
    title: "9. Responsabilidad sobre el consumo de productos",
    icon: <ShieldCheck className="h-5 w-5" />,
    content: "El usuario es responsable de revisar la información del producto, ingredientes, fecha de vencimiento, condiciones de conservación y cualquier advertencia aplicable antes de consumirlo.\n\nSi el usuario presenta alergias, restricciones alimentarias, intolerancias o condiciones de salud particulares, deberá consultarlo previamente antes de realizar la compra.\n\nLa información compartida por GOXA no reemplaza consejo médico, nutricional o profesional especializado."
  },
  {
    id: "propiedad",
    title: "10. Propiedad intelectual",
    icon: <Lock className="h-5 w-5" />,
    content: "El nombre GOXA, logotipo, identidad visual, textos, fotografías, diseños, piezas publicitarias, catálogos, contenido de redes sociales y demás elementos de comunicación pertenecen a GOXA o cuentan con autorización para su uso.\n\nQueda prohibida la reproducción, modificación, distribución o uso comercial no autorizado de dichos contenidos."
  },
  {
    id: "uso-indebido",
    title: "11. Uso indebido de nuestros canales",
    icon: <ShieldCheck className="h-5 w-5" />,
    content: "El usuario se compromete a no utilizar los canales de GOXA para brindar información falsa, realizar pedidos fraudulentos, suplantar identidad, usar indebidamente promociones, afectar la operación de la marca o enviar contenido ofensivo, ilegal o perjudicial.\n\nGOXA podrá restringir la atención a usuarios que incurran en conductas indebidas."
  },
  {
    id: "reclamaciones",
    title: "12. Libro de Reclamaciones",
    icon: <BookOpen className="h-5 w-5" />,
    content: "GOXA pondrá a disposición del consumidor los canales correspondientes para la atención de quejas o reclamos conforme a la normativa aplicable.\n\nEl usuario podrá presentar consultas, quejas o reclamos a través de nuestros canales oficiales de atención o mediante el Libro de Reclamaciones virtual, cuando este se encuentre habilitado.\n\nLibro de Reclamaciones: https://wa.me/51955548641\nCanal de atención: WhatsApp 955 548 641 o hola@goxa.pe"
  },
  {
    id: "modificaciones",
    title: "13. Modificaciones de los términos",
    icon: <Settings className="h-5 w-5" />,
    content: "GOXA podrá actualizar, modificar o reemplazar estos Términos y Condiciones cuando lo considere necesario.\n\nLa versión vigente será la publicada en la página web, landing page o canal oficial correspondiente. El uso continuo de nuestros canales implica la aceptación de la versión vigente."
  },
  {
    id: "legislacion",
    title: "14. Legislación aplicable",
    icon: <ShieldCheck className="h-5 w-5" />,
    content: "Estos Términos y Condiciones se rigen por las leyes de la República del Perú.\n\nCualquier controversia será atendida inicialmente a través de los canales de atención de GOXA, sin perjuicio de los derechos que correspondan al consumidor conforme a la normativa peruana aplicable."
  },
  {
    id: "contacto",
    title: "15. Contacto",
    icon: <Mail className="h-5 w-5" />,
    content: "Para consultas, pedidos, reclamos o solicitudes relacionadas con estos Términos y Condiciones, puedes comunicarte con GOXA a través de:\n\nWhatsApp: 955 548 641\nCorreo electrónico: hola@goxa.pe\nUbicación: Oxapampa, Pasco - Perú\nHorario de atención: Lunes a Sábado de 9:00 am a 6:00 pm"
  }
];

export default function TerminosPage() {
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
            Términos y Condiciones
            <span className="block text-[24px] font-medium text-goxa-green mt-1">de GOXA</span>
          </h1>
          <div className="flex justify-center my-4">
            <Leaf className="h-6 w-6 text-goxa-gold" />
          </div>
          <p className="text-[13px] text-gray-500 font-medium">
            Última actualización: 01 de mayo de 2024
          </p>
          <p className="mt-6 text-[14px] leading-relaxed text-goxa-dark/80">
            En GOXA queremos que tu experiencia sea clara, segura y confiable. Estos Términos y Condiciones regulan el uso de nuestros canales digitales, formularios, redes sociales, WhatsApp, catálogo digital y cualquier otro medio mediante el cual ofrecemos nuestros productos.
            <br /><br />
            Al navegar por nuestros canales, solicitar información, registrarte o realizar un pedido, declaras haber leído y aceptado estos Términos y Condiciones.
          </p>
        </div>

        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between w-full mb-6">
            <h2 className="text-[18px] font-bold text-goxa-dark">En esta página</h2>
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sections.map((section) => (
              <button 
                key={section.id}
                onClick={() => {
                  setOpenSection(section.id);
                  const el = document.getElementById(section.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="flex items-center gap-3 text-left group"
              >
                <div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-full bg-goxa-pale text-goxa-green group-hover:bg-goxa-green group-hover:text-white transition-colors">
                  {section.icon}
                </div>
                <span className="text-[13px] font-medium text-gray-600 group-hover:text-goxa-dark transition-colors">
                  {section.title}
                </span>
              </button>
            ))}
          </div>
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
            <MessageCircle className="h-20 w-20 text-goxa-green" />
          </div>
          <div className="relative z-10">
            <h2 className="text-[20px] font-bold text-goxa-dark mb-2">¿Tienes dudas?</h2>
            <p className="text-[14px] text-gray-600 mb-6">Estamos aquí para ayudarte en lo que necesites.</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola GOXA, tengo una duda sobre los términos y condiciones.")}`}
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
