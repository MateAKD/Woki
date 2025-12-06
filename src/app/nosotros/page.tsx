import PageLayout from "@/components/layout/page-layout";

export default function NosotrosPage() {
  return (
    <PageLayout>
      <section className="py-16 bg-[#1a513c] min-h-[60vh]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">NOSOTROS</h1>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Video a la izquierda */}
              <div className="w-full order-2 md:order-1">
                <div className="relative w-full" style={{ paddingBottom: '125%' }}>
                  <iframe
                    src="https://www.instagram.com/p/DQ2i9jQkTQ0/embed"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    scrolling="no"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="Video de Instagram de Zurdo"
                  />
                </div>
              </div>
              
              {/* Texto a la derecha */}
              <div className="space-y-6 text-white order-1 md:order-2">
                <p className="text-lg md:text-xl leading-relaxed">
                  Un emprendimiento de dos hermanos cocineros y dos comunicadores movidos por la misma pasión
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  La idea surgió hace años atrás pero el momento lo encontramos hoy
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Una solución para tus comidas
                </p>
                <p className="text-2xl md:text-3xl font-bold">
                  Ricas Rápidas y Reales
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Viandas gourmet y caseras que con solo 20 minutos te salvan las pocas ganas que tenes de cocinar en el día a día
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Así nació ZURDO…
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Y queremos que vos seas parte también de esta nueva comunidad que se viene!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

