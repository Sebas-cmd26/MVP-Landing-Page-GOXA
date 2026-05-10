"use client";



import React, { useState, useEffect } from "react";

import Link from "next/link";

import Image from "next/image";

import { 

  ArrowLeft, 

  BookOpen, 

  User, 

  Mail, 

  Phone, 

  MapPin, 

  CreditCard, 

  ShoppingBag, 

  AlertCircle,

  CheckCircle2,

  Send,

  Calendar,

  FileText

} from "lucide-react";

import { supabase } from "@/lib/supabase";



export default function LibroReclamaciones() {

  const [form, setForm] = useState({

    // Consumidor

    fullName: "",

    documentType: "DNI",

    documentNumber: "",

    address: "",

    email: "",

    phone: "",

    representativeName: "", // Para menores de edad

    

    // Bien Contratado

    type: "Producto",

    amount: "",

    description: "",

    

    // Reclamación

    claimType: "Reclamo", // Reclamo (por el producto) o Queja (por la atención)

    detail: "",

    request: "",

    

    // Conformidad

    acceptTerms: false

  });



  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [claimNumber, setClaimNumber] = useState("");



  const validate = () => {

    const newErrors = {};

    if (!form.fullName) newErrors.fullName = "Requerido";

    if (!form.documentNumber) newErrors.documentNumber = "Requerido";

    if (!form.address) newErrors.address = "Requerido";

    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Email inválido";

    if (!form.phone || form.phone.length < 9) newErrors.phone = "Teléfono inválido";

    if (!form.amount) newErrors.amount = "Requerido";

    if (!form.description) newErrors.description = "Requerido";

    if (!form.detail) newErrors.detail = "Requerido";

    if (!form.request) newErrors.request = "Requerido";

    if (!form.acceptTerms) newErrors.acceptTerms = "Debe aceptar los términos";

    

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    

    setIsSubmitting(true);

    

    try {

      // Generate a claim number: GOXA-2025-XXXX

      const random = Math.floor(1000 + Math.random() * 9000);

      const generatedNumber = `GOXA-2025-${random}`;

      

      const { error } = await supabase

        .from("reclamaciones")

        .insert([{

          numero_reclamo: generatedNumber,

          nombre_completo: form.fullName,

          tipo_documento: form.documentType,

          numero_documento: form.documentNumber,

          direccion: form.address,

          email: form.email,

          telefono: form.phone,

          nombre_representante: form.representativeName,

          tipo_bien: form.type,

          monto_reclamado: parseFloat(form.amount),

          descripcion_bien: form.description,

          tipo_reclamacion: form.claimType,

          detalle: form.detail,

          pedido: form.request,

          fecha: new Date().toISOString()

        }]);



      if (error) throw error;

      

      setClaimNumber(generatedNumber);

      setSubmitted(true);

      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {

      console.error("Error:", err);

      alert("Error al enviar el formulario. Intente de nuevo.");

    } finally {

      setIsSubmitting(false);

    }

  };



  const handleChange = (field, value) => {

    setForm(prev => ({ ...prev, [field]: value }));

    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));

  };



  if (submitted) {

    return (

      <main className="min-h-screen bg-[#F2EFE8] flex items-center justify-center p-6">

        <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl text-center border border-goxa-green/10">

          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">

            <CheckCircle2 className="h-10 w-10 text-goxa-green" />

          </div>

          <h1 className="font-serif text-3xl font-bold text-goxa-dark mb-4">¡Hoja enviada!</h1>

          <p className="text-gray-600 mb-8 leading-relaxed">

            Hemos recibido tu registro en nuestro Libro de Reclamaciones. Se ha enviado una copia a tu correo electrónico.

          </p>

          <div className="bg-goxa-cream/50 rounded-2xl p-4 mb-8">

            <p className="text-xs uppercase tracking-widest text-goxa-green font-bold mb-1">Número de Seguimiento</p>

            <p className="text-2xl font-mono font-bold text-goxa-dark">{claimNumber}</p>

          </div>

          <Link 

            href="/"

            className="inline-flex h-[54px] items-center justify-center gap-2 rounded-xl bg-goxa-dark px-8 text-white font-bold transition-transform active:scale-95 shadow-lg w-full"

          >

            VOLVER AL INICIO

          </Link>

        </div>

      </main>

    );

  }



  return (

    <main className="min-h-screen bg-[#F2EFE8] pb-20">

      {/* Header */}

      <header className="sticky top-0 z-50 bg-[#F2EFE8]/80 backdrop-blur-md border-b border-goxa-green/10 px-6 py-4">

        <div className="max-w-4xl mx-auto flex items-center justify-between">

          <Link href="/#formulario" className="flex items-center gap-2 text-goxa-dark hover:text-goxa-green transition-colors font-bold text-sm">

            <ArrowLeft className="h-4 w-4" />

            VOLVER

          </Link>

          <div className="flex items-center gap-2">

            <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-full" />

            <span className="font-serif font-bold text-goxa-dark tracking-tighter">GOXA</span>

          </div>

        </div>

      </header>



      <div className="max-w-4xl mx-auto px-6 pt-10">

        <div className="text-center mb-12">

          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm border border-goxa-green/10 mb-4">

            <BookOpen className="h-8 w-8 text-goxa-dark" />

          </div>

          <h1 className="font-serif text-4xl font-bold text-goxa-dark mb-4">Libro de Reclamaciones</h1>

          <p className="text-gray-600 font-medium">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor.</p>

        </div>



        <form onSubmit={handleSubmit} className="space-y-8">

          {/* SECCIÓN 1: IDENTIFICACIÓN DEL CONSUMIDOR */}

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-goxa-green/5">

            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">

              <User className="h-5 w-5 text-goxa-green" />

              <h2 className="text-lg font-bold text-goxa-dark uppercase tracking-tight">1. Identificación del Consumidor</h2>

            </div>

            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="md:col-span-2">

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Nombre Completo</label>

                <input 

                  type="text" 

                  value={form.fullName}

                  onChange={(e) => handleChange("fullName", e.target.value)}

                  className={`w-full h-12 px-4 rounded-xl bg-gray-50 border transition-all outline-none focus:ring-2 focus:ring-goxa-green/20 ${errors.fullName ? 'border-red-300' : 'border-gray-200 focus:border-goxa-green'}`}

                  placeholder="Juan Pérez..."

                />

              </div>



              <div>

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Tipo de Documento</label>

                <select 

                  value={form.documentType}

                  onChange={(e) => handleChange("documentType", e.target.value)}

                  className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-goxa-green outline-none"

                >

                  <option>DNI</option>

                  <option>CE</option>

                  <option>Pasaporte</option>

                </select>

              </div>



              <div>

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Número de Documento</label>

                <input 

                  type="text" 

                  value={form.documentNumber}

                  onChange={(e) => handleChange("documentNumber", e.target.value)}

                  className={`w-full h-12 px-4 rounded-xl bg-gray-50 border transition-all outline-none focus:ring-2 focus:ring-goxa-green/20 ${errors.documentNumber ? 'border-red-300' : 'border-gray-200 focus:border-goxa-green'}`}

                  placeholder="00000000"

                />

              </div>



              <div className="md:col-span-2">

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Domicilio</label>

                <div className="relative">

                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

                  <input 

                    type="text" 

                    value={form.address}

                    onChange={(e) => handleChange("address", e.target.value)}

                    className={`w-full h-12 pl-12 pr-4 rounded-xl bg-gray-50 border transition-all outline-none focus:ring-2 focus:ring-goxa-green/20 ${errors.address ? 'border-red-300' : 'border-gray-200 focus:border-goxa-green'}`}

                    placeholder="Av. Las Magnolias 123, Lince..."

                  />

                </div>

              </div>



              <div>

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Email</label>

                <div className="relative">

                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

                  <input 

                    type="email" 

                    value={form.email}

                    onChange={(e) => handleChange("email", e.target.value)}

                    className={`w-full h-12 pl-12 pr-4 rounded-xl bg-gray-50 border transition-all outline-none focus:ring-2 focus:ring-goxa-green/20 ${errors.email ? 'border-red-300' : 'border-gray-200 focus:border-goxa-green'}`}

                    placeholder="ejemplo@correo.com"

                  />

                </div>

              </div>



              <div>

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Teléfono</label>

                <div className="relative">

                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

                  <input 

                    type="tel" 

                    value={form.phone}

                    onChange={(e) => handleChange("phone", e.target.value)}

                    className={`w-full h-12 pl-12 pr-4 rounded-xl bg-gray-50 border transition-all outline-none focus:ring-2 focus:ring-goxa-green/20 ${errors.phone ? 'border-red-300' : 'border-gray-200 focus:border-goxa-green'}`}

                    placeholder="999 999 999"

                  />

                </div>

              </div>



              <div className="md:col-span-2">

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Representante (Si es menor de edad)</label>

                <input 

                  type="text" 

                  value={form.representativeName}

                  onChange={(e) => handleChange("representativeName", e.target.value)}

                  className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-goxa-green outline-none"

                  placeholder="Nombre del padre o tutor..."

                />

              </div>

            </div>

          </section>



          {/* SECCIÓN 2: IDENTIFICACIÓN DEL BIEN CONTRATADO */}

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-goxa-green/5">

            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">

              <ShoppingBag className="h-5 w-5 text-goxa-green" />

              <h2 className="text-lg font-bold text-goxa-dark uppercase tracking-tight">2. Identificación del Bien</h2>

            </div>

            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 ml-1">Tipo de Bien</label>

                <div className="flex gap-4">

                  {["Producto", "Servicio"].map((t) => (

                    <label key={t} className="flex-1">

                      <input 

                        type="radio" 

                        name="type" 

                        className="peer hidden"

                        checked={form.type === t}

                        onChange={() => handleChange("type", t)}

                      />

                      <div className="flex items-center justify-center h-12 rounded-xl border border-gray-200 cursor-pointer peer-checked:border-goxa-green peer-checked:bg-goxa-green/5 peer-checked:text-goxa-green font-bold text-sm transition-all">

                        {t}

                      </div>

                    </label>

                  ))}

                </div>

              </div>



              <div>

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Monto Reclamado (S/)</label>

                <div className="relative">

                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

                  <input 

                    type="number" 

                    step="0.01"

                    value={form.amount}

                    onChange={(e) => handleChange("amount", e.target.value)}

                    className={`w-full h-12 pl-12 pr-4 rounded-xl bg-gray-50 border transition-all outline-none focus:ring-2 focus:ring-goxa-green/20 ${errors.amount ? 'border-red-300' : 'border-gray-200 focus:border-goxa-green'}`}

                    placeholder="0.00"

                  />

                </div>

              </div>



              <div className="md:col-span-2">

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Descripción del Producto/Servicio</label>

                <textarea 

                  value={form.description}

                  onChange={(e) => handleChange("description", e.target.value)}

                  rows={3}

                  className={`w-full p-4 rounded-xl bg-gray-50 border transition-all outline-none focus:ring-2 focus:ring-goxa-green/20 resize-none ${errors.description ? 'border-red-300' : 'border-gray-200 focus:border-goxa-green'}`}

                  placeholder="Ej: Miel 600g, Café Señor Ox..."

                />

              </div>

            </div>

          </section>



          {/* SECCIÓN 3: DETALLE DE LA RECLAMACIÓN */}

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-goxa-green/5">

            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">

              <AlertCircle className="h-5 w-5 text-goxa-green" />

              <h2 className="text-lg font-bold text-goxa-dark uppercase tracking-tight">3. Detalle de Reclamación</h2>

            </div>

            

            <div className="space-y-6">

              <div>

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 ml-1">Tipo de Solicitud</label>

                <div className="flex gap-4">

                  {[

                    { val: "Reclamo", desc: "Disconformidad por el producto/servicio" },

                    { val: "Queja", desc: "Disconformidad por la atención" }

                  ].map((item) => (

                    <label key={item.val} className="flex-1">

                      <input 

                        type="radio" 

                        name="claimType" 

                        className="peer hidden"

                        checked={form.claimType === item.val}

                        onChange={() => handleChange("claimType", item.val)}

                      />

                      <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 cursor-pointer peer-checked:border-goxa-green peer-checked:bg-goxa-green/5 peer-checked:text-goxa-green transition-all min-h-[80px]">

                        <span className="font-bold text-sm">{item.val}</span>

                        <span className="text-[9px] font-medium opacity-60 text-center mt-1 uppercase tracking-tighter leading-none">{item.desc}</span>

                      </div>

                    </label>

                  ))}

                </div>

              </div>



              <div>

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Detalle de Reclamación / Queja</label>

                <textarea 

                  value={form.detail}

                  onChange={(e) => handleChange("detail", e.target.value)}

                  rows={4}

                  className={`w-full p-4 rounded-xl bg-gray-50 border transition-all outline-none focus:ring-2 focus:ring-goxa-green/20 resize-none ${errors.detail ? 'border-red-300' : 'border-gray-200 focus:border-goxa-green'}`}

                  placeholder="Explique detalladamente lo sucedido..."

                />

              </div>



              <div>

                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Pedido / Solicitud del Consumidor</label>

                <textarea 

                  value={form.request}

                  onChange={(e) => handleChange("request", e.target.value)}

                  rows={3}

                  className={`w-full p-4 rounded-xl bg-gray-50 border transition-all outline-none focus:ring-2 focus:ring-goxa-green/20 resize-none ${errors.request ? 'border-red-300' : 'border-gray-200 focus:border-goxa-green'}`}

                  placeholder="¿Qué solución espera obtener? (Ej: Cambio de producto, devolución...)"

                />

              </div>

            </div>

          </section>



          {/* ACCIONES FINALES */}

          <section className="bg-goxa-dark rounded-3xl p-8 shadow-xl text-white">

            <div className="flex items-start gap-4 mb-8">

              <div className="relative flex items-center mt-1">

                <input 

                  type="checkbox" 

                  id="conformidad"

                  checked={form.acceptTerms}

                  onChange={(e) => handleChange("acceptTerms", e.target.checked)}

                  className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-white/20 bg-white/5 transition-all checked:border-goxa-gold checked:bg-goxa-gold focus:outline-none"

                />

                <CheckCircle2 className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-goxa-dark opacity-0 transition-opacity peer-checked:opacity-100" />

              </div>

              <label htmlFor="conformidad" className="text-sm font-medium leading-relaxed cursor-pointer select-none">

                Declaro que los datos consignados son verdaderos y acepto que GOXA utilice mi información para dar respuesta a mi solicitud en un plazo máximo de 15 días hábiles.

              </label>

            </div>

            {errors.acceptTerms && <p className="text-red-300 text-xs font-bold mb-6 ml-10">Debe marcar este check para continuar.</p>}



            <button 

              type="submit"

              disabled={isSubmitting}

              className="w-full h-[60px] bg-goxa-gold hover:bg-goxa-gold-light text-goxa-dark font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"

            >

              {isSubmitting ? (

                "ENVIANDO..."

              ) : (

                <>

                  <Send className="h-5 w-5" />

                  ENVIAR HOJA DE RECLAMACIÓN

                </>

              )}

            </button>

            <p className="mt-6 text-[10px] text-white/40 text-center uppercase tracking-[2px] font-bold">

              GOXA &bull; Oxapampa, Pasco - Perú

            </p>

          </section>

        </form>



        <footer className="mt-12 text-center text-gray-400 text-[11px] font-medium px-4">

          <p className="leading-relaxed">

            * La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es condición previa para interponer una denuncia ante el INDECOPI. <br/>

            * El proveedor deberá dar respuesta al reclamo en un plazo no mayor a quince (15) días hábiles.

          </p>

        </footer>

      </div>

    </main>

  );

}


