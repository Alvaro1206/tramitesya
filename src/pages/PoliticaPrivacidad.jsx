import React from "react";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

export default function PoliticaPrivacidad() {
  usePageMetadata({
    title: "TramitesYA - Politica de privacidad",
    description:
      "Conoce como recopilamos, usamos y protegemos tus datos personales en TramitesYA y como ejercer tus derechos.",
  });
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-bold">Politica de privacidad</h1>
          <p className="mt-2 text-sm text-blue-200">
            TramitesYA - Servicio privado de gestion y asistencia en tramites
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-10 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Politica de privacidad de TramitesYA</h2>
          <p className="mt-3">
            En Tramitesyaweb.com (en adelante, &ldquo;TramitesYA&rdquo;) nos comprometemos a proteger tus datos personales y a tratarlos conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Organica 3/2018 (LOPDGDD). Te informamos de forma transparente sobre que datos tratamos, con que fines, bajo que bases legales y con quien los compartimos. A continuacion detallamos nuestra politica de privacidad.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Responsable del tratamiento</h2>
          <p className="mt-3">
            El responsable del tratamiento de tus datos es TramitesYA. Puedes contactar con nosotros por correo electronico en{" "}
            <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">
              tramitesyaweb@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Datos personales que tratamos</h2>
          <p className="mt-3">
            Para prestarte nuestros servicios de gestion de tramites, recogemos los siguientes datos personales:
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              <span className="font-semibold">Datos identificativos:</span> nombre, apellidos, NIF/DNI/NIE e imagen del DNI (fotografia del anverso).
            </li>
            <li>
              <span className="font-semibold">Datos de contacto:</span> direccion postal, correo electronico y telefono movil o fijo.
            </li>
            <li>
              <span className="font-semibold">Datos del servicio:</span> matricula de vehiculos (para el informe DGT) y, en su caso, datos adicionales requeridos por la administracion.
            </li>
            <li>
              <span className="font-semibold">Datos de facturacion:</span> informacion necesaria para emitir factura (por ejemplo, CIF y datos fiscales) cuando corresponda. La informacion de pago con tarjeta se gestiona mediante pasarela bancaria externa y no queda almacenada en nuestros sistemas.
            </li>
            <li>
              <span className="font-semibold">Formularios de contacto:</span> cuando utilizas el formulario web de contacto, recogemos tu nombre, correo electronico y el mensaje que nos envias, con la unica finalidad de responderte.
            </li>
          </ul>
          <p className="mt-3">
            Estos datos son los estrictamente necesarios para ofrecerte el servicio contratado. Todos los formularios web estan protegidos mediante conexion segura SSL (HTTPS), por lo que la transmision de tus datos se realiza cifrada. TramitesYA aplica medidas tecnicas y organizativas para garantizar la seguridad y confidencialidad de tus datos, evitando accesos no autorizados o usos indebidos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Finalidad del tratamiento</h2>
          <p className="mt-3">Tus datos personales se tratan para las siguientes finalidades principales:</p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              <span className="font-semibold">Gestion de solicitudes:</span> tramitar en tu nombre la obtencion de documentos oficiales (por ejemplo, informe de vida laboral, nota simple registral, informe de vehiculo DGT), lo que incluye comunicar los datos necesarios a las autoridades competentes.
            </li>
            <li>
              <span className="font-semibold">Verificacion de identidad:</span> confirmar tu identidad mediante los datos e imagen del DNI para poder realizar los tramites online autorizados.
            </li>
            <li>
              <span className="font-semibold">Comunicacion con el usuario:</span> atender tus consultas, informarte del estado de tus gestiones y enviarte avisos relacionados con el servicio contratado.
            </li>
            <li>
              <span className="font-semibold">Facturacion y cobros:</span> emitir la factura correspondiente y gestionar el pago de nuestros servicios, asi como cumplir con obligaciones fiscales y contables.
            </li>
            <li>
              <span className="font-semibold">Obligaciones legales:</span> conservar cierta informacion durante los plazos exigidos por la ley y adoptar medidas contra posibles fraudes o incumplimientos legales.
            </li>
          </ul>
          <p className="mt-3">
            Todas estas finalidades estan asociadas a la ejecucion del contrato o servicio que solicitas. Asimismo, podemos usar tus datos para cumplir con obligaciones legales aplicables segun exige la normativa vigente. En ningun caso utilizamos tus datos para fines distintos sin tu consentimiento expreso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Base legal del tratamiento</h2>
          <p className="mt-3">
            La base juridica principal para tratar tus datos es el articulo 6.1.b del RGPD, es decir, la ejecucion del contrato o servicio que nos encargas. Tus datos son necesarios para la prestacion del servicio solicitado, por lo que sin ellos no podriamos realizarlo. Adicionalmente, cuando corresponde, nos amparamos en el articulo 6.1.c del RGPD para cumplir con obligaciones legales (por ejemplo, conservar la factura durante el plazo exigido por Hacienda).
          </p>
          <p className="mt-3">
            Cuando tratamos datos especialmente sensibles, aplicamos el consentimiento explicito como base legal. En concreto, la imagen de tu DNI se considera un dato biometrico utilizado para identificarte de forma univoca. Por ello, antes de solicitar la imagen de tu DNI te pediremos tu consentimiento expreso. Solo con tu autorizacion tratamos esa imagen y la eliminamos una vez extraida la informacion necesaria. Tu consentimiento es libre, informado e inequivoco, y puedes retirarlo en cualquier momento sin afectar la licitud de los tratamientos realizados con anterioridad.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Conservacion y seguridad de los datos</h2>
          <p className="mt-3">
            Conservamos tus datos personales solo durante el tiempo necesario para cumplir las finalidades descritas. Esto significa que, una vez finalizado el tramite y pasado el plazo legal que exija cada caso, procederemos a su supresion o anonimizado. Por ejemplo, mantendremos los datos fiscales mientras sean necesarios por la normativa tributaria, y la informacion de contacto mientras sea util para la gestion del servicio.
          </p>
          <p className="mt-3">
            Para proteger tus datos aplicamos medidas de seguridad tecnicas y organizativas adecuadas: todos los formularios y envios de archivos se realizan mediante conexion cifrada (SSL/HTTPS); nuestros servidores estan protegidos por firewalls, antivirus y copias de seguridad periodicas; y solo personal autorizado tiene acceso a los datos. Ademas, seguimos las buenas practicas de privacidad por diseno y por defecto, de modo que recolectamos unicamente los datos indispensables y, en caso de incidentes, te informaremos conforme a la normativa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">6. Destinatarios y encargados del tratamiento</h2>
          <p className="mt-3">
            Tus datos personales no se cederan a terceros con fines ajenos al servicio contratado. Solo los compartimos con los destinatarios estrictamente necesarios para la prestacion del servicio:
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              <span className="font-semibold">Administraciones publicas competentes:</span> cuando solicitas documentos oficiales, tus datos se comunican a las entidades pertinentes (por ejemplo, Seguridad Social/TGSS, Registro Mercantil, DGT) exclusivamente para tramitar tu solicitud.
            </li>
            <li>
              <span className="font-semibold">Encargados de tratamiento externos:</span> proveedores de servicios que colaboran con TramitesYA bajo contrato y normas de confidencialidad (hosting, pasarelas de pago, gestorias autorizadas). Estos encargados solo pueden usar los datos para las finalidades indicadas y estan obligados a aplicar las mismas medidas de seguridad.
            </li>
          </ul>
          <p className="mt-3">
            En ningun caso venderemos tus datos personales. Cualquier comunicacion de datos se ajusta a la normativa vigente y se efectua como parte de la ejecucion del servicio solicitado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Derechos de los usuarios</h2>
          <p className="mt-3">Tienes reconocidos los siguientes derechos respecto a tus datos personales:</p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>
              <span className="font-semibold">Acceso:</span> solicitar confirmacion sobre si tratamos tus datos y obtener una copia.
            </li>
            <li>
              <span className="font-semibold">Rectificacion:</span> corregir o actualizar datos inexactos o incompletos.
            </li>
            <li>
              <span className="font-semibold">Supresion:</span> pedir que borremos tus datos cuando ya no sean necesarios o hayas retirado el consentimiento.
            </li>
            <li>
              <span className="font-semibold">Limitacion:</span> restringir el uso de tus datos cuando se impugne su exactitud o la licitud del tratamiento.
            </li>
            <li>
              <span className="font-semibold">Oposicion:</span> oponerte al tratamiento por motivos vinculados a tu situacion particular, salvo motivos legitimos imperiosos.
            </li>
            <li>
              <span className="font-semibold">Portabilidad:</span> recibir tus datos en un formato estructurado y transmitirlos a otro responsable cuando proceda.
            </li>
            <li>
              <span className="font-semibold">Retirar el consentimiento:</span> revocar el consentimiento otorgado (por ejemplo, para la imagen del DNI) sin afectar al tratamiento previo.
            </li>
            <li>
              <span className="font-semibold">Reclamacion:</span> presentar reclamacion ante la Agencia Espanola de Proteccion de Datos si consideras que se ha infringido la legislacion.
            </li>
          </ul>
          <p className="mt-3">
            Para ejercer cualquiera de estos derechos, puedes enviarnos una solicitud escrita (junto con una copia de tu DNI o documento equivalente) a la direccion postal Calle Ejemplo 123, 28000 Madrid o al correo{" "}
            <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">
              tramitesyaweb@gmail.com
            </a>
            . Atenderemos tu peticion en el plazo maximo de un mes (ampliable a dos en casos complejos). Si no recibes respuesta satisfactoria, puedes contactar directamente con la AEPD o la autoridad competente de tu pais.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">8. Tratamiento de la imagen del DNI</h2>
          <p className="mt-3">
            Cuando solicites un tramite que requiera verificar tu identidad, te pediremos una imagen del anverso de tu DNI o NIE. Esta imagen contiene datos personales que nos permiten comprobar que eres quien realiza la solicitud. Solo trataremos esa imagen para extraer los datos obligatorios y confirmar tu identidad.
          </p>
          <p className="mt-3">
            Cumplimos con el principio de minimizacion: no almacenamos copias innecesarias de tu DNI. Tras procesar la informacion requerida, la imagen se elimina de nuestros sistemas de forma segura. De esta manera seguimos las directrices de la AEPD y la LOPDGDD.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">9. Formularios, pagos y envio de archivos</h2>
          <p className="mt-3">
            <span className="font-semibold">Formularios de contacto:</span> el formulario solicita nombre y correo electronico (obligatorios) y un mensaje libre. Solo usamos esos datos para responder a tu consulta y no enviamos publicidad sin permiso. Los datos no se conservan mas alla de lo necesario para gestionar tu solicitud.
          </p>
          <p className="mt-3">
            <span className="font-semibold">Formularios de solicitud de servicios:</span> al contratar un tramite, cumplimentas un formulario con los datos descritos y puedes subir archivos (imagen del DNI, documentos adicionales). Estos datos se utilizan exclusivamente para tramitar tu peticion y los archivos se eliminan una vez completado el tramite, segun lo indicado anteriormente.
          </p>
          <p className="mt-3">
            <span className="font-semibold">Pagos:</span> el proceso de pago se realiza mediante un proveedor externo con certificado de seguridad. TramitesYA no guarda datos bancarios o de tarjeta; la informacion se introduce directamente en la plataforma del proveedor.
          </p>
          <p className="mt-3">
            En todos los casos, la recogida de datos se realiza bajo conexion cifrada (SSL) y con estricta confidencialidad. Cumplimos con el RGPD informando de forma clara sobre la finalidad de cada formulario y los datos solicitados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Actualizaciones y contacto</h2>
          <p className="mt-3">
            Esta politica de privacidad se adapta a la legislacion espanola vigente (RGPD y LOPDGDD) y esta redactada de forma clara y comprensible. Cualquier modificacion futura se publicara en esta seccion de la web. Si tienes dudas adicionales o deseas mas informacion sobre como tratamos tus datos, puedes contactarnos en{" "}
            <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">
              tramitesyaweb@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Fuentes y referencias</h2>
          <p className="mt-3">
            Esta politica se ha redactado atendiendo al Reglamento (UE) 2016/679 (RGPD), a la LOPDGDD, a la Guia de la AEPD para politicas de privacidad, a la informacion disponible en el portal Your Europe de la Union Europea y a ejemplos practicos de gestorias online.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-100 py-6 text-sm text-slate-600">
        <div className="mx-auto max-w-5xl px-4">
          <p>Ultima actualizacion: octubre de 2025 - Gestion Online TramitesYA S.L.</p>
        </div>
      </footer>
    </div>
  );
}
