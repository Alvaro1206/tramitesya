
import React from "react";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

export default function AvisoLegal() {
  usePageMetadata({
    title: "TramitesYA - Aviso legal y condiciones de uso",
    description:
      "Consulta los datos de titularidad, responsabilidades y condiciones de uso del servicio privado TramitesYA.",
  });
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200 bg-blue-900 py-8 text-blue-100">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-bold">Aviso legal</h1>
          <p className="mt-2 text-sm text-blue-200">
            TramitesYA.com - Servicio privado de gestion de tramites administrativos
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-10 leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Titularidad del sitio web</h2>
          <p className="mt-3">
            El presente sitio web (<span className="font-semibold">tramitesyawebs.com</span>) es titularidad de TramitesYA (en adelante, el Titular). En cumplimiento del articulo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Informacion y del Comercio Electronico (LSSI-CE), se informa de la denominacion y correo electronico de contacto del Titular:{" "}
            <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">
              tramitesyaweb@gmail.com
            </a>
            . Con caracter general, la ley exige tambien el NIF/CIF y domicilio social del prestador del servicio, aunque en este aviso legal solo se hace constar la identidad minima necesaria. El usuario puede contactar con el Titular a traves del correo electronico indicado para cualquier consulta o reclamacion relacionada con este sitio web.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Condiciones de uso</h2>
          <p className="mt-3">
            El acceso y uso de este portal web atribuye al visitante la condicion de Usuario, implicando la aceptacion plena y sin reservas de todas las disposiciones incluidas en este aviso legal. El Usuario se compromete a utilizar el sitio web de conformidad con la ley, la buena fe y el presente aviso legal.
          </p>
          <p className="mt-3">
            El Titular se reserva el derecho de modificar en cualquier momento la presentacion, configuracion y contenidos del sitio, asi como este aviso legal, sin que sea preciso notificar previamente a los Usuarios dichas modificaciones. Las versiones actualizadas se publicaran en esta misma pagina, siendo responsabilidad del Usuario revisarlas periodicamente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Propiedad intelectual e industrial</h2>
          <p className="mt-3">
            Todos los contenidos del sitio web (incluyendo, entre otros, textos, disenos, logotipos, iconos, imagenes, bases de datos y codigos fuente) son propiedad del Titular o de terceros que han autorizado su uso, y estan protegidos por la legislacion espanola sobre propiedad intelectual e industrial.
          </p>
          <p className="mt-3">
            Queda prohibida la reproduccion, distribucion, comercializacion o transformacion no autorizada de los citados contenidos, salvo consentimiento expreso por escrito del Titular. El acceso al portal no otorga licencia o autorizacion alguna sobre tales derechos, que se reservan expresamente. Cualquier uso indebido de la informacion o contenido del sitio web queda sujeto a las responsabilidades civiles y penales legalmente establecidas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Responsabilidad del contenido</h2>
          <p className="mt-3">
            El contenido y la informacion facilitados en este sitio web se proporcionan con fines meramente informativos. El Titular no garantiza la exactitud, exhaustividad o actualidad de dichos contenidos, ni que esten actualizados en todo momento. El sitio se ofrece &ldquo;tal cual&rdquo; y el uso del mismo es responsabilidad exclusiva del Usuario.
          </p>
          <p className="mt-3">
            En consecuencia, el Titular no asumira responsabilidad alguna por cualquier error u omision en los contenidos ni por decisiones o acciones derivadas de su utilizacion. Asimismo, TramitesYA no presta asesoramiento legal, contable ni profesional alguno; en ningun caso se considerara que la informacion publicada en el sitio suplanta el consejo especializado de un profesional cualificado. El Usuario asume que la informacion contenida puede no ajustarse en todos los casos a su situacion particular.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Enlaces externos</h2>
          <p className="mt-3">
            El sitio web puede contener enlaces o hipervinculos a paginas de terceros que no estan gestionadas por el Titular. Estos enlaces se ofrecen solo como referencia informativa y no implican ningun tipo de aval o recomendacion por parte del Titular. El Titular no controla ni revisa de forma continua los contenidos de los sitios enlazados, por lo que no asume ninguna responsabilidad por los danos o perjuicios de cualquier naturaleza que puedan derivarse del acceso a los mismos.
          </p>
          <p className="mt-3">
            En ningun caso el Titular se responsabiliza del tratamiento de datos personales que realicen dichos terceros a traves de sus propias paginas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Limitacion de responsabilidad</h2>
          <p className="mt-3">
            En ningun caso el Titular sera responsable por danos y perjuicios de cualquier naturaleza derivados de la utilizacion del sitio web o de sus servicios, ni de la imposibilidad de acceso o uso por fallos tecnicos, virus u otros elementos perniciosos que pudieran danar el sistema informatico del Usuario. De igual modo, se excluye la responsabilidad del Titular por las siguientes situaciones:
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-6">
            <li>Interrupciones del servicio o fallos tecnicos que impidan el acceso al sitio web o a sus contenidos.</li>
            <li>Danios o perjuicios provocados por agentes externos (virus, ataques informaticos, etc.) durante la navegacion o descarga de contenidos.</li>
            <li>Perdida de informacion o datos almacenados en equipos informaticos debido a la navegacion por el sitio o a la descarga de contenidos.</li>
            <li>Cualquier dano indirecto o lucro cesante que pueda originarse por el mal uso del sitio web o sus servicios.</li>
          </ul>
          <p className="mt-3">
            Estas limitaciones son de aplicacion en la maxima medida permitida por la legislacion vigente y no afectan los derechos irrenunciables del Usuario cuando actue en calidad de consumidor o usuario protegido por ley.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Uso indebido del sitio</h2>
          <p className="mt-3">
            El Usuario se compromete a hacer un uso adecuado del sitio web y de los contenidos y servicios ofrecidos, conforme a la ley, la moral, el orden publico y las presentes condiciones. Queda estrictamente prohibido emplear el portal con fines ilicitos, lesivos contra personas o bienes, contrarios a la buena fe o al orden publico. Asimismo, se prohibe causar danos en los sistemas fisicos o logicos del sitio web, en las redes de comunicaciones o en cualquier otro sistema del Titular, de sus proveedores o de terceros.
          </p>
          <p className="mt-3">
            Cualquier actividad que suponga el uso indebido del sitio, asi como la infraccion de derechos de propiedad intelectual o industrial, dara lugar a responsabilidad civil y penal, sin perjuicio de las demas acciones que procedan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Legislacion aplicable y jurisdiccion</h2>
          <p className="mt-3">
            Este aviso legal se rige en todos sus extremos por la legislacion espanola vigente. En particular, el sitio web cumple con lo establecido en la Ley 34/2002 de LSSI-CE y en el resto del ordenamiento juridico aplicable (incluyendo, en su caso, el Codigo Civil y la normativa sectorial correspondiente).
          </p>
          <p className="mt-3">
            Para la resolucion de cualquier controversia que pudiera surgir en relacion con este sitio web, las partes, con renuncia expresa a cualquier otro fuero, se someten a la jurisdiccion de los juzgados y tribunales espanoles competentes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Contacto</h2>
          <p className="mt-3">
            Para cualquier consulta relacionada con este aviso legal, el Usuario puede contactar con el Titular mediante el correo electronico{" "}
            <a className="underline text-blue-700" href="mailto:tramitesyaweb@gmail.com">
              tramitesyaweb@gmail.com
            </a>
            . En dicho medio se atenderan las peticiones, consultas o sugerencias de los Usuarios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Nota</h2>
          <p className="mt-3">
            Este aviso legal es independiente de la politica de privacidad del sitio, que se encuentra publicada en un documento separado. En dicha politica se recogen las condiciones y finalidades del tratamiento de los datos personales de los Usuarios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Referencias</h2>
          <p className="mt-3">
            El contenido de este aviso legal se ha redactado atendiendo a las exigencias de la normativa espanola (Ley 34/2002, Codigo Civil, entre otras), asi como a practicas recomendadas para la proteccion legal del titular de un sitio web.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-100 py-6 text-sm text-slate-600">
        <div className="mx-auto max-w-5xl px-4">
          <p>Ultima actualizacion: octubre de 2025 - Gestion Online TramitesYA S.L.</p>
          <LinkFooter />
        </div>
      </footer>
    </div>
  );
}

function LinkFooter() {
  return (
    <div className="mt-2">
      <a className="text-blue-700 underline" href="mailto:tramitesyaweb@gmail.com">
        Contacto directo
      </a>
    </div>
  );
}
