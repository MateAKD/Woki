import PageLayout from "@/components/layout/page-layout";

export default function NosotrosPage() {
  return (
    <PageLayout>
      <section className="py-16 bg-[#1a513c] min-h-[60vh]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">NOSOTROS</h1>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-xl text-white/90 leading-relaxed">
              En Zurdo, creemos que la comida de calidad debe ser accesible y conveniente. 
              Ofrecemos una selección de platos gourmet preparados con ingredientes frescos 
              y de la más alta calidad, listos para disfrutar en la comodidad de tu hogar.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              Nuestro compromiso es simple: <span className="font-bold">RICO, RAPIDO, REAL</span>. 
              Cada uno de nuestros productos está diseñado para brindarte una experiencia 
              culinaria excepcional sin complicaciones.
            </p>
            <p className="text-xl text-white/90 leading-relaxed">
              Desde nuestra cocina hasta tu freezer, llevamos la excelencia directamente a tu mesa. 
              Con envío sin costo y la garantía de productos congelados de primera calidad.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

