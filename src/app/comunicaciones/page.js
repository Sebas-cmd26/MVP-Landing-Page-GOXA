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

  Bell,

  Mail,

  Smartphone,

  Info,

  Trash2,

  Lock,

  UserCheck

} from "lucide-react";



const WHATSAPP_NUMBER = "51955548641";



const sections = [

  {

    id: "que-autorizo",

    title: "1. ¿Qué estoy autorizando?",

    icon: <UserCheck className="h-5 w-5" />,

    content: "Autorizas a GOXA a enviarte comunicaciones comerciales relacionadas con sus productos, promociones, descuentos, novedades, beneficios, campañas especiales, lanzamientos, recordatorios de compra, catálogos y ofertas disponibles.\n\nEsta autorización es independiente de la aceptación de los Términos y Condiciones. Puedes usar nuestros canales o solicitar información sin estar obligado/a a aceptar comunicaciones promociónales, salvo aquellas necesarias para atender una consulta o pedido iniciado por ti."

  },

  {

    id: "canales",

    title: "2. Canales por los que podremos contactarte",

    icon: <Smartphone className="h-5 w-5" />,

    content: "GOXA podrá enviarte comunicaciones comerciales a través de los datos que nos proporciones, incluyendo:\n\n- WhatsApp.\n- Correo electrónico.\n- Llamadas telefónicas.\n- SMS.\n- Redes sociales u otros canales digitales relacionados con GOXA.\n\nEl canal principal de comunicación podrá ser WhatsApp, especialmente para compartir catálogo, disponibilidad, promociones, precios y opciones de entrega."

  },

  {

    id: "tipo-info",

    title: "3. Tipo de información que podrás recibir",

    icon: <Bell className="h-5 w-5" />,

    content: "Podrás recibir información sobre:\n\n- Nuevos productos GOXA.\n- Promociones y descuentos.\n- Campañas por temporada.\n- Beneficios de bienvenida.\n- Catálogo actualizado.\n- Recomendaciones de productos.\n- Disponibilidad de stock.\n- Opciones de entrega.\n- Recordatorios o comunicaciones relacionadas con productos de interés."

  },

  {

    id: "datos-utilizados",

    title: "4. Datos utilizados para estas comunicaciones",

    icon: <Info className="h-5 w-5" />,

    content: "Para enviarte comunicaciones comerciales, GOXA podrá utilizar datos como tu nombre, número de WhatsApp, correo electrónico, distrito, producto de interés, historial de consultas, preferencias declaradas o información relacionada con interacciones previas con la marca.\n\nEstos datos serán utilizados con la finalidad de personalizar la atención, enviarte información relevante y mejorar la experiencia de comunicación."

  },

  {

    id: "opcional",

    title: "5. Carácter opcional de la autorización",

    icon: <ShieldCheck className="h-5 w-5" />,

    content: "La autorización para recibir comunicaciones comerciales es opcional.\n\nSi decides no aceptarla, GOXA podrá contactarte únicamente para responder consultas que tú hayas iniciado, gestionar pedidos, coordinar entregas, confirmar pagos o atender solicitudes relacionadas con una compra o servicio solicitado por ti."

  },

  {

    id: "retiro",

    title: "6. Retiro de la autorización",

    icon: <Trash2 className="h-5 w-5" />,

    content: "Puedes retirar tu autorización para recibir comunicaciones comerciales en cualquier momento.\n\nPara hacerlo, puedes escribirnos por WhatsApp, correo electrónico o el canal oficial de atención de GOXA indicando que ya no deseas recibir promociones, novedades u ofertas comerciales.\n\nDespués de recibir tu solicitud, GOXA dejará de enviarte comunicaciones comerciales en un plazo razonable, sin afectar comunicaciones necesarias para pedidos activos, consultas en curso o responsabilidades legales aplicables."

  },

  {

    id: "privacidad-relacion",

    title: "7. Relación con la Política de Privacidad",

    icon: <Lock className="h-5 w-5" />,

    content: "El tratamiento de tus datos personales se realizará conforme a la Política de Privacidad de GOXA y la normativa peruana aplicable en materia de protección de datos personales.\n\nTe recomendamos revisar nuestra Política de Privacidad para conocer con mayor detalle cómo recopilamos, usamos, almacenamos y protegemos tus datos."

  },

  {

    id: "contacto",

    title: "8. Contacto",

    icon: <Mail className="h-5 w-5" />,

    content: "Para consultas o solicitudes relacionadas con esta autorización, puedes comunicarte con GOXA a través de:\n\nWhatsApp: 955 548 641\nCorreo electrónico: hola@goxa.pe\nUbicación: Oxapampa, Pasco - Perú\nHorario de atención: Lunes a Sábado de 9:00 am a 6:00 pm"

  }

];



export default function ComunicacionesPage() {

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

            <Image src="/logo.png" alt="GOXA Logo" width={40} height={40} className="object-contain rounded-full" />

          </div>

          <div className="w-10"></div>

        </div>

      </header>



      <section className="max-w-[430px] mx-auto px-6 pt-10">

        <div className="text-center mb-10">

          <h1 className="font-serif text-[32px] font-bold leading-tight text-goxa-dark">

            Autorización de

            <span className="block text-[24px] font-medium text-goxa-green mt-1">Comunicaciones</span>

          </h1>

          <div className="flex justify-center my-4">

            <Bell className="h-6 w-6 text-goxa-gold" />

          </div>

          <p className="text-[13px] text-gray-500 font-medium">

            Última actualización: 01 de mayo de 2024

          </p>

          <p className="mt-6 text-[14px] leading-relaxed text-goxa-dark/80">

            En GOXA queremos mantenerte informado/a sobre nuestros productos, novedades, promociones y beneficios. Esta autorización explica cómo podremos contactarte si decides aceptar recibir comunicaciones comerciales.

            <br /><br />

            Al marcar la casilla de autorización en nuestros formularios, aceptas que GOXA pueda enviarte información comercial a través de los canales digitales que hayas proporcionado.

          </p>

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

            <Bell className="h-20 w-20 text-goxa-green" />

          </div>

          <div className="relative z-10">

            <h2 className="text-[20px] font-bold text-goxa-dark mb-2">Mantente al día</h2>

            <p className="text-[14px] text-gray-600 mb-6">Si deseas retirar tu autorización o tienes dudas, escríbenos.</p>

            <a 

              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola GOXA, deseo consultar sobre mi autorización de comunicaciones comerciales.")}`}

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

            <Image src="/logo.png" alt="GOXA Logo" width={48} height={48} className="invert brightness-0 opacity-80 rounded-full" />

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

                <li><Link href="/reclamaciones" className="flex items-center gap-2 py-1"><Image src="/libro-reclamaciones.png" alt="Libro de Reclamaciones" width={40} height={26} className="object-contain" />Libro de Reclamaciones</Link></li>

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


