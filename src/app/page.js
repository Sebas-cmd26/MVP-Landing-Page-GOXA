"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Leaf,
  Mountain,
  Truck,
  User,
  Mail,
  MapPin,
  MessageCircle,
  Lock,
  Star,
  Users,
  Sprout,
  HandHeart,
  ChevronDown,
  ShieldCheck,
  BanIcon,
} from "lucide-react";

const WHATSAPP_NUMBER = "51999999999";
const DISCOUNT_CODE = "GOXA15";

const districts = [
  "Miraflores",
  "San Isidro",
  "Santiago de Surco",
  "La Molina",
  "Barranco",
  "San Borja",
  "Magdalena",
  "Jesus Maria",
  "Lince",
  "San Miguel",
  "Otro distrito de Lima",
  "Provincia",
];

const initialForm = {
  fullName: "",
  whatsapp: "",
  email: "",
  district: "",
};

export default function Home() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const nextErrors = {};
    const phoneDigits = form.whatsapp.replace(/\D/g, "");
    if (form.fullName.trim().length < 5)
      nextErrors.fullName = "Ingresa tu nombre completo.";
    if (phoneDigits.length !== 9)
      nextErrors.whatsapp = "Ingresa un WhatsApp de 9 digitos.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      nextErrors.email = "Ingresa un correo valido.";
    if (!form.district) nextErrors.district = "Selecciona tu distrito.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    const leadData = {
      ...form,
      source: "Instagram/TikTok Landing GOXA",
      discountCode: DISCOUNT_CODE,
      createdAt: new Date().toISOString(),
    };
    console.log("Lead capturado:", leadData);
    const whatsappMessage = `Hola GOXA, quiero reclamar mi 15% de descuento.\n\nNombre: ${form.fullName}\nWhatsApp: ${form.whatsapp}\nCorreo: ${form.email}\nDistrito: ${form.district}\nCodigo: ${DISCOUNT_CODE}\nVengo desde Instagram/TikTok.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <main className="min-h-screen flex justify-center font-sans">
      <section className="w-full max-w-[430px] min-h-screen bg-goxa-cream overflow-hidden md:my-6 md:rounded-[42px] md:shadow-2xl relative shadow-lg">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#F2EFE8]" style={{ minHeight: 640 }}>
          <div className="absolute bottom-0 w-full h-[450px] z-0">
            <Image
              src="/goxa_hero_final.png"
              alt="GOXA Hero"
              fill
              className="object-cover object-[65%_bottom]"
              priority
            />
            {/* Blend the top of the image container into the background so it looks seamless */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F2EFE8] to-transparent" />
            {/* Blend the left side to give more contrast for text if needed */}
            <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-[#F2EFE8]/70 to-transparent" />
          </div>
          
          <div className="relative z-10 px-6 pt-8 pb-[320px]">
            <div className="flex items-start justify-between">
              <div className="flex flex-col items-center">
                <Image
                  src="/logo.png"
                  alt="GOXA Logo"
                  width={52}
                  height={52}
                  className="object-contain drop-shadow-sm"
                  style={{ mixBlendMode: "multiply" }}
                />
                <h1 className="font-serif text-2xl font-bold leading-none tracking-widest text-goxa-dark mt-1 drop-shadow-md">
                  GOXA
                </h1>
                <p className="text-[7px] font-bold tracking-[3px] text-goxa-green mt-0.5 uppercase drop-shadow-md">
                  Origen que se siente
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-goxa-dark px-3 py-2 text-white shadow-lg">
                <Leaf className="h-4 w-4 text-goxa-gold-light shrink-0" />
                <div className="leading-none text-left">
                  <p className="text-[11px] font-bold tracking-wide">100% NATURAL</p>
                  <p className="text-[9px] font-light text-white/75 mt-0.5">Desde Oxapampa</p>
                </div>
              </div>
            </div>

            <div className="mt-6 max-w-[220px]">
              <h2 className="font-serif text-[48px] font-bold leading-[0.92] text-goxa-dark drop-shadow-lg">
                Lo natural
                <span className="block italic font-medium text-goxa-green">
                  sabe mejor
                </span>
              </h2>
              <p className="mt-4 text-[13px] font-semibold leading-relaxed text-goxa-dark/90 drop-shadow-md">
                Productos reales de Oxapampa, sin conservantes, sin artificios. Directo de la naturaleza a tu mesa.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="relative z-30 -mt-6 mx-4 rounded-3xl bg-white px-4 py-6 shadow-[0_12px_30px_rgba(30,59,47,0.12)] border border-gray-50">
          <div className="grid grid-cols-3 gap-3">
            <Benefit
              icon={<Leaf className="h-5 w-5" />}
              title="Sin conservantes ni aditivos"
              text="Ingredientes reales y procesos limpios."
            />
            <Benefit
              icon={<Mountain className="h-5 w-5" />}
              title="Apoyamos a mas de 150 familias de Oxapampa"
              text="Impulsamos economias locales sostenibles."
            />
            <Benefit
              icon={<Truck className="h-5 w-5" />}
              title="Entrega rapida en Lima"
              text="Frescos, seguros y directamente a tu casa."
            />
          </div>
        </section>

        {/* OFFER */}
        <section className="mx-4 mt-4 overflow-hidden rounded-3xl bg-goxa-dark text-white shadow-xl relative" style={{ minHeight: 140 }}>
          <div className="relative flex items-center px-5 py-6 z-20">
            <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl bg-goxa-gold text-[28px] font-black text-goxa-dark shadow-[0_4px_15px_rgba(201,168,76,0.45)] mr-4">
              %
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-widest text-white/60 uppercase mb-0.5">Bienvenido a GOXA</p>
              <h2 className="font-serif text-[16px] font-bold leading-tight">Registrate y recibe</h2>
              <p className="text-[22px] font-black text-goxa-gold-light leading-tight">15% DE DESCUENTO</p>
              <p className="text-[12px] text-white/80 mt-0.5">en tu primer pedido.</p>
            </div>
            <div className="relative w-[110px] h-[110px] shrink-0 rounded-full overflow-hidden border-[4px] border-white/15 shadow-2xl ml-2">
              <Image
                src="/bowl.png"
                alt="Bowl yogurt GOXA"
                fill
                className="object-cover object-center scale-110"
              />
            </div>
          </div>
        </section>

        {/* FORM */}
        <section
          id="formulario"
          className="mx-4 mt-4 rounded-3xl bg-white px-5 pb-8 pt-7 text-center shadow-[0_8px_30px_rgba(30,59,47,0.08)] border border-gray-50"
        >
          <h2 className="font-serif text-[20px] font-bold leading-tight text-goxa-dark">
            Completa tus datos y recibe tu descuento
          </h2>
          <p className="mt-2 flex items-center justify-center gap-1.5 text-[13px] text-goxa-green font-medium">
            Te lo enviamos por WhatsApp <MessageCircle className="h-4 w-4 text-[#25D366]" />
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3 text-left">
            <InputField
              icon={<User className="text-goxa-light" />}
              placeholder="Nombre completo"
              value={form.fullName}
              onChange={(value) => updateField("fullName", value)}
              error={errors.fullName}
            />
            <InputField
              icon={<MessageCircle className="text-goxa-light" />}
              placeholder="WhatsApp (ej. 987 654 321)"
              value={form.whatsapp}
              onChange={(value) => updateField("whatsapp", value)}
              error={errors.whatsapp}
              type="tel"
            />
            <InputField
              icon={<Mail className="text-goxa-light" />}
              placeholder="Correo electronico"
              value={form.email}
              onChange={(value) => updateField("email", value)}
              error={errors.email}
              type="email"
            />

            <div>
              <div className={"relative rounded-xl border bg-goxa-cream/50 " + (errors.district ? "border-red-400" : "border-gray-200")}>
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-goxa-light" />
                <select
                  value={form.district}
                  onChange={(e) => updateField("district", e.target.value)}
                  className="h-[54px] w-full appearance-none rounded-xl bg-transparent pl-12 pr-10 text-[14px] text-gray-700 outline-none"
                >
                  <option value="">En que distrito vives?</option>
                  {districts.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              {errors.district && <p className="mt-1 pl-2 text-[11px] font-medium text-red-500">{errors.district}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 flex h-[60px] w-full items-center justify-center gap-3 rounded-xl bg-goxa-dark text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(30,59,47,0.3)] transition-all duration-200 active:scale-[0.98] hover:bg-goxa-green disabled:opacity-70"
            >
              <MessageCircle className="h-6 w-6 text-[#25D366]" />
              {isSubmitting ? "ENVIANDO..." : "QUIERO MI 15% DE DESCUENTO"}
            </button>
          </form>

          <div className="mt-5 space-y-1 text-[11px] leading-relaxed text-goxa-green/80">
            <p className="flex items-center justify-center gap-1.5 font-medium">
              <Lock className="h-3.5 w-3.5" /> Tus datos estan 100% seguros.
            </p>
            <p className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" /> No compartimos tu informacion. Sin spam.
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-4 pb-8 pt-10 mt-4">
          <h2 className="text-center font-serif text-[22px] font-bold leading-tight text-goxa-dark">
            Nuestros clientes nos recomiendan
          </h2>
          <div className="flex justify-center mt-2 mb-5">
            <Leaf className="h-5 w-5 text-goxa-light" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ReviewCard
              name="Maria R."
              location="San Isidro, Lima"
              text="La miel de GOXA es completamente diferente. Se nota que es real. Llevamos meses pidiendo cada mes y no la cambiamos por nada."
              avatarColor="bg-goxa-light"
              initials="MR"
            />
            <ReviewCard
              name="Carlos F."
              location="Miraflores, Lima"
              text="El yogurt natural es delicioso, se nota la calidad. Ademas llego super rapido y bien empacado."
              avatarColor="bg-[#8B6B4A]"
              initials="CF"
            />
          </div>
        </section>

        {/* STATS + FOOTER */}
        <section className="relative overflow-hidden bg-goxa-dark px-6 pb-24 pt-8 text-white rounded-t-3xl mt-2">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/footer_bg.png"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10">
            <div className="flex justify-between items-center gap-1 border-b border-white/10 pb-6">
              <StatCard
                icon={<Users className="h-5 w-5 text-goxa-gold-light" />}
                value="8K+"
                label="Familias felices"
              />
              <StatCard
                icon={<Sprout className="h-5 w-5 text-goxa-gold-light" />}
                value="60+"
                label="Productos naturales"
              />
              <StatCard
                icon={<HandHeart className="h-5 w-5 text-goxa-gold-light" />}
                value="15+"
                label="Años en Oxapampa"
              />
            </div>
            <footer className="mt-5 flex items-center justify-center gap-2 text-[10px] text-white/80 font-medium tracking-wide">
              <Leaf className="h-3 w-3 text-white/80" />
              GOXA &bull; Oxapampa, Pasco - Perú
            </footer>
          </div>
        </section>

        {/* STICKY CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-5 z-50 md:hidden pointer-events-none">
          <button
            onClick={() => {
              const el = document.getElementById("formulario");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-goxa-dark text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(30,59,47,0.35)] pointer-events-auto active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
            QUIERO MI 15% DE DESCUENTO
          </button>
        </div>
      </section>
    </main>
  );
}

function Benefit({ icon, title, text }) {
  return (
    <article className="text-center flex flex-col items-center">
      <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-goxa-dark text-goxa-gold shadow-md">
        {icon}
      </div>
      <h3 className="text-[10px] font-bold leading-tight text-goxa-dark">{title}</h3>
      <p className="mt-1 text-[9px] font-medium leading-relaxed text-gray-500">{text}</p>
    </article>
  );
}

function InputField({ icon, placeholder, value, onChange, error, type = "text" }) {
  return (
    <div>
      <div className={"relative rounded-xl border bg-goxa-cream/50 transition-colors focus-within:border-goxa-green focus-within:ring-1 focus-within:ring-goxa-green/40 " + (error ? "border-red-400" : "border-gray-200")}>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 [&>svg]:h-5 [&>svg]:w-5">
          {icon}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-[54px] w-full rounded-xl bg-transparent pl-12 pr-4 text-[14px] text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>
      {error && <p className="mt-1 pl-2 text-[11px] font-medium text-red-500">{error}</p>}
    </div>
  );
}

function ReviewCard({ initials, name, location, text, avatarColor }) {
  return (
    <article className="rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(30,59,47,0.07)] flex flex-col h-full border border-gray-100">
      <div className="mb-2 flex gap-0.5 text-goxa-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <p className="text-[10.5px] font-medium leading-relaxed text-gray-700 flex-grow">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-2.5">
        <div className={"flex h-8 w-8 shrink-0 items-center justify-center rounded-full " + avatarColor + " text-[11px] font-bold text-white"}>
          {initials}
        </div>
        <div className="leading-tight">
          <p className="text-[12px] font-bold text-goxa-dark">{name}</p>
          <p className="text-[9px] font-medium text-gray-400">{location}</p>
        </div>
      </div>
    </article>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <article className="flex items-center gap-2">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D5C19D]">
        {icon}
      </div>
      <div className="flex flex-col items-start justify-center text-left">
        <p className="font-serif text-[20px] font-bold leading-none tracking-wide text-white">{value}</p>
        <p className="mt-1 text-[9px] font-medium leading-tight text-[#E8E8E8] max-w-[60px]">{label}</p>
      </div>
    </article>
  );
}














