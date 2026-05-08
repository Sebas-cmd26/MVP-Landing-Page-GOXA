# -*- coding: utf-8 -*-
import os
import re

path = "src/app/terminos/page.js"

sections_data = [
    ("sobre-goxa", "1. Sobre GOXA", "<Leaf className=\"h-5 w-5\" />", "GOXA es una marca dedicada a la comercializaci\u00f3n de productos naturales, artesanales y seleccionados, provenientes de Oxapampa y otras zonas productoras del Per\u00fa.\\n\\nA trav\u00e9s de nuestros canales digitales, GOXA brinda informaci\u00f3n sobre sus productos, precios, disponibilidad, promociones, formas de pago y opciones de entrega."),
    ("uso-canales", "2. Uso de nuestros canales digitales", "<FileText className=\"h-5 w-5\" />", "El usuario puede interactuar con GOXA mediante nuestra p\u00e1gina web, landing pages, formularios, redes sociales, anuncios digitales, WhatsApp, cat\u00e1logos digitales u otros canales oficiales habilitados por la marca.\\n\\nEl usuario se compromete a utilizar estos canales de manera adecuada, brindando informaci\u00f3n verdadera, actual y completa. GOXA no se responsabiliza por errores en la atenci\u00f3n, comunicaci\u00f3n o entrega derivados de datos incorrectos o incompletos proporcionados por el usuario."),
    ("registro", "3. Registro de usuarios y datos", "<UserCheck className=\"h-5 w-5\" />", "Para brindar atenci\u00f3n personalizada, enviar informaci\u00f3n comercial, compartir cat\u00e1logo, coordinar pedidos o comunicar promociones, GOXA podr\u00e1 solicitar datos como nombre completo, n\u00famero de WhatsApp, correo electr\u00f3nico, distrito, zona de residencia, producto de inter\u00e9s u otra informaci\u00f3n necesaria para la atenci\u00f3n.\\n\\nEl usuario declara que los datos proporcionados son verdaderos y autoriza a GOXA a utilizarlos para fines relacionados con la atenci\u00f3n comercial, gesti\u00f3n de pedidos, coordinaci\u00f3n de entregas y comunicaciones vinculadas a sus productos y servicios."),
    ("productos", "4. Productos ofrecidos", "<Package className=\"h-5 w-5\" />", "GOXA puede ofrecer productos naturales, artesanales o seleccionados como caf\u00e9, miel, yogurt, l\u00e1cteos, chocolates, snacks, alimentos de origen natural u otros productos relacionados.\\n\\nLa disponibilidad de productos puede variar seg\u00fan stock, temporada, proveedor, lote, zona de entrega o capacidad operativa.\\n\\nLas im\u00e1genes publicadas en nuestra p\u00e1gina web, landing pages, redes sociales, anuncios o cat\u00e1logos son referenciales. La presentaci\u00f3n final del producto puede variar en empaque, etiqueta, tama\u00f1o, lote o presentaci\u00f3n, sin afectar necesariamente la calidad del producto ofrecido."),
    ("precios", "5. Precios y promociones", "<Bell className=\"h-5 w-5\" />", "Los precios publicados en nuestros canales digitales pueden variar seg\u00fan campa\u00f1a, promoci\u00f3n, stock disponible, canal de venta, zona de entrega o actualizaci\u00f3n comercial.\\n\\nEl precio final de cada pedido ser\u00e1 confirmado por GOXA antes de concretar la compra.\\n\\nGOXA podr\u00e1 ofrecer promociones, descuentos, beneficios de bienvenida, c\u00f3digos promocionales o campa\u00f1as especiales. Cada promoci\u00f3n podr\u00e1 estar sujeta a condiciones espec\u00edficas como vigencia, stock disponible, monto m\u00ednimo de compra, zona de cobertura, uso \u00fanico por cliente, restricciones por producto o no acumulaci\u00f3n con otras promociones.\\n\\nSalvo que se indique expresamente lo contrario, los descuentos no son acumulables entre s\u00ed ni aplican sobre costos de env\u00edo."),
    ("pedidos", "6. Pedidos y pagos", "<CreditCard className=\"h-5 w-5\" />", "El pedido se considera iniciado cuando el usuario solicita productos a trav\u00e9s de WhatsApp, formulario, cat\u00e1logo digital, redes sociales u otro canal oficial de GOXA.\\n\\nEl pedido se considera confirmado \u00fanicamente cuando GOXA valida el producto solicitado, cantidad, precio, datos del cliente, zona de entrega, medio de pago y disponibilidad de stock.\\n\\nGOXA podr\u00e1 rechazar, cancelar o reprogramar un pedido si no existe stock, si los datos proporcionados son incorrectos, si no se confirma el pago o si la zona de entrega no se encuentra disponible.\\n\\nLos medios de pago disponibles ser\u00e1n informados por GOXA al momento de confirmar el pedido. En caso de pagos por transferencia, billeteras digitales u otros medios, GOXA podrá solicitar constancia de pago."),
    ("entregas", "7. Entregas y cobertura", "<Truck className=\"h-5 w-5\" />", "Las entregas estar\u00e1n sujetas a cobertura geogr\u00e1fica, disponibilidad log\u00edstica, horarios de atenci\u00f3n, demanda, condiciones clim\u00e1ticas, feriados u otros factores externos.\\n\\nGOXA informar\u00e1 al cliente el tiempo estimado de entrega antes de confirmar el pedido. Dicho tiempo es referencial y puede variar por causas ajenas a la marca.\\n\\nEl cliente es responsable de brindar correctamente su direcci\u00f3n, distrito, referencia, n\u00famero de contacto y disponibilidad para recibir el pedido."),
    ("cambios", "8. Cambios, cancelaciones y devoluciones", "<RotateCcw className=\"h-5 w-5\" />", "El cliente podr\u00e1 solicitar cambios o cancelaciones antes de la confirmaci\u00f3n final del pedido o antes de que este sea despachado.\\n\\nUna vez despachado el pedido, cualquier cambio, cancelaci\u00f3n o devoluci\u00f3n ser\u00e1 evaluado por GOXA seg\u00fan el caso concreto.\\n\\nPor tratarse de productos alimenticios, las devoluciones estar\u00e1n sujetas a revisi\u00f3n de las condiciones de conservaci\u00f3n, manipulaci\u00f3n, empaque, fecha de entrega y evidencia presentada por el cliente.\\n\\nGOXA podr\u00e1 aceptar cambios, reposiciones o devoluciones cuando exista un error atribuible a la marca, como entrega de producto incorrecto, da\u00f1o evidente durante el despacho o incumplimiento de condiciones previamente confirmadas."),
    ("responsabilidad", "9. Responsabilidad sobre el consumo de productos", "<ShieldCheck className=\"h-5 w-5\" />", "El usuario es responsable de revisar la informaci\u00f3n del producto, ingredientes, fecha de vencimiento, condiciones de conservaci\u00f3n y cualquier advertencia aplicable antes de consumirlo.\\n\\nSi el usuario presenta alergias, restricciones alimentarias, intolerancias o condiciones de salud particulares, deber\u00e1 consultarlo previamente antes de realizar la compra.\\n\\nLa informaci\u00f3n compartida por GOXA no reemplaza consejo m\u00e9dico, nutricional o profesional especializado."),
    ("propiedad", "10. Propiedad intelectual", "<Lock className=\"h-5 w-5\" />", "El nombre GOXA, logotipo, identidad visual, textos, fotograf\u00edas, dise\u00f1os, piezas publicitarias, cat\u00e1logos, contenido de redes sociales y dem\u00e1s elementos de comunicaci\u00f3n pertenecen a GOXA o cuentan con autorizaci\u00f3n para su uso.\\n\\nQueda prohibida la reproducci\u00f3n, modificaci\u00f3n, distribuci\u00f3n o uso comercial no autorizado de dichos contenidos."),
    ("uso-indebido", "11. Uso indebido de nuestros canales", "<ShieldCheck className=\"h-5 w-5\" />", "El usuario se compromete a no utilizar los canales de GOXA para brindar informaci\u00f3n falsa, realizar pedidos fraudulentos, suplantar identidad, usar indebidamente promociones, afectar la operaci\u00f3n de la marca o enviar contenido ofensivo, ilegal o perjudicial.\\n\\nGOXA podr\u00e1 restringir la atenci\u00f3n a usuarios que incurran en conductas indebidas."),
    ("reclamaciones", "12. Libro de Reclamaciones", "<BookOpen className=\"h-5 w-5\" />", "GOXA pondr\u00e1 a disposici\u00f3n del consumidor los canales correspondientes para la atenci\u00f3n de quejas o reclamos conforme a la normativa aplicable.\\n\\nEl usuario podr\u00e1 presentar consultas, quejas o reclamos a trav\u00e9s de nuestros canales oficiales de atenci\u00f3n o mediante el Libro de Reclamaciones virtual, cuando este se encuentre habilitado.\\n\\nLibro de Reclamaciones: https://wa.me/51955548641\\nCanal de atenci\u00f3n: WhatsApp 955 548 641 o hola@goxa.pe"),
    ("modificaciones", "13. Modificaciones de los t\u00e9rminos", "<Settings className=\"h-5 w-5\" />", "GOXA podr\u00e1 actualizar, modificar o reemplazar estos T\u00e9rminos y Condiciones cuando lo considere necesario.\\n\\nLa versi\u00f3n vigente ser\u00e1 la publicada en la p\u00e1gina web, landing page o canal oficial correspondiente. El uso continuo de nuestros canales implica la aceptaci\u00f3n de la versi\u00f3n vigente."),
    ("legislacion", "14. Legislaci\u00f3n aplicable", "<ShieldCheck className=\"h-5 w-5\" />", "Estos T\u00e9rminos y Condiciones se rigen por las leyes de la Rep\u00fablica del Per\u00fa.\\n\\nCualquier controversia ser\u00e1 atendida inicialmente a trav\u00e9s de los canales de atenci\u00f3n de GOXA, sin perjuicio de los derechos que correspondan al consumidor conforme a la normativa peruana aplicable."),
    ("contacto", "15. Contacto", "<Mail className=\"h-5 w-5\" />", "Para consultas, pedidos, reclamos o solicitudes relacionadas con estos T\u00e9rminos y Condiciones, puedes comunicarte con GOXA a trav\u00e9s de:\\n\\nWhatsApp: 955 548 641\\nCorreo electr\u00f3nico: hola@goxa.pe\\nUbicaci\u00f3n: Oxapampa, Pasco - Per\u00fa\\nHorario de atenci\u00f3n: Lunes a S\u00e1bado de 9:00 am a 6:00 pm")
]

js_sections = "const sections = [\n"
for s_id, s_title, s_icon, s_content in sections_data:
    js_sections += f'  {{\n    id: "{s_id}",\n    title: "{s_title}",\n    icon: {s_icon},\n    content: `{s_content}`\n  }},\n'
js_sections += "];"

try:
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
except UnicodeDecodeError:
    with open(path, "r", encoding="latin-1") as f:
        content = f.read()

# Splitting and joining instead of regex sub for the large blocks
parts = content.split("const sections = [")
second_part = parts[1].split("];")
content = parts[0] + js_sections + "];".join(second_part[1:])

new_intro = """\u00daltima actualizaci\u00f3n: 01 de mayo de 2024
          </p>
          <p className="mt-6 text-[14px] leading-relaxed text-goxa-dark/80">
            En GOXA queremos que tu experiencia sea clara, segura y confiable. Estos T\u00e9rminos y Condiciones regulan el uso de nuestros canales digitales, formularios, redes sociales, WhatsApp, cat\u00e1logo digital y cualquier otro medio mediante el cual ofrecemos nuestros productos.
            <br /><br />
            Al navegar por nuestros canales, solicitar informaci\u00f3n, registrarte o realizar un pedido, declaras haber le\u00eddo y aceptado estos T\u00e9rminos y Condiciones.
          </p>"""

parts = content.split("\u00daltima actualizaci\u00f3n:")
# This one is tricky with split, I'll use re.sub with escaped replacement
content = re.sub(r'\u00daltima actualizaci\u00f3n:.*?</p>\s+<p className="mt-6.*?/p>', new_intro.replace("\\", "\\\\"), content, flags=re.DOTALL)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)
