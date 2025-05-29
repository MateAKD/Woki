"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/context/cart-context";
import { ShoppingBasket, Plus, Minus, Trash2, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    totalItems,
    totalPrice,
    updateQuantity,
    removeItem,
    isCartOpen,
    setIsCartOpen,
    clearCart // Used in handleFinalizarCompra function
  } = useCart();

  const [deliveryType, setDeliveryType] = useState<'envio' | 'pickup'>('pickup');
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  // Nuevos estados para el formulario de envío
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [floorApt, setFloorApt] = useState('');
  const [deliveryZone, setDeliveryZone] = useState<'zona_norte_martes' | 'zona_norte_jueves' | 'capital_otros' | ''>('');
  const [paymentMethod, setPaymentMethod] = useState<'mercado_pago' | 'transferencia' | 'efectivo' | ''>('');
  
  const MONTO_MINIMO_ENVIO = 15000;
  const envioCosto = 1000;
  const totalConEnvio = deliveryType === 'envio' ? totalPrice + envioCosto : totalPrice;
  
  const formattedTotalPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(totalPrice);
  
  const formattedTotalConEnvio = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(totalConEnvio);
  
  // Función para generar el mensaje de WhatsApp
  const generateWhatsAppMessage = () => {
    let message = "Hola! Quiero pagar la compra que hice por la página:\n\n";
    
    // Lista de productos
    items.forEach(item => {
      message += `• ${item.product.title} x${item.quantity} - ${new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
      }).format(item.product.price * item.quantity)}\n`;
    });
    
    // Total
    message += `\nTotal: ${formattedTotalConEnvio}\n`;
    
    // Tipo de entrega
    message += `Tipo de entrega: ${deliveryType === 'envio' ? 'Envío a domicilio' : 'Retiro por pick-up'}\n`;
    
    // Información adicional para envío a domicilio
    if (deliveryType === 'envio') {
      message += `\nDatos de envío:\n`;
      message += `Nombre: ${customerName}\n`;
      message += `Dirección: ${address}\n`;
      if (floorApt) {
        message += `Piso/Depto: ${floorApt}\n`;
      }
      
      // Zona de entrega
      let zonaTexto = '';
      if (deliveryZone === 'zona_norte_martes') zonaTexto = 'Zona Norte (martes)';
      else if (deliveryZone === 'zona_norte_jueves') zonaTexto = 'Zona Norte (jueves)';
      else if (deliveryZone === 'capital_otros') zonaTexto = 'Capital y otros (domingos)';
      
      message += `Zona de entrega: ${zonaTexto}\n`;
    }
    
    // Método de pago
    let metodoPagoTexto = '';
    if (paymentMethod === 'mercado_pago') metodoPagoTexto = 'Mercado Pago';
    else if (paymentMethod === 'transferencia') metodoPagoTexto = 'Transferencia bancaria';
    else if (paymentMethod === 'efectivo') metodoPagoTexto = 'Efectivo';
    
    message += `\nMétodo de pago: ${metodoPagoTexto}`;
    
    return encodeURIComponent(message);
  };
  
  // Función para finalizar la compra
  const handleFinalizarCompra = () => {
    try {
      // Validar si es envío y cumple con el monto mínimo
      if (deliveryType === 'envio' && totalPrice < MONTO_MINIMO_ENVIO) {
        setErrorMessage(`El monto mínimo para envío a domicilio es de $${MONTO_MINIMO_ENVIO}`);
        setShowErrorDialog(true);
        return;
      }
      
      // Validar campos obligatorios para envío
      if (deliveryType === 'envio') {
        if (!customerName.trim()) {
          setErrorMessage('Por favor ingresa tu nombre');
          setShowErrorDialog(true);
          return;
        }
        
        if (!address.trim()) {
          setErrorMessage('Por favor ingresa tu dirección');
          setShowErrorDialog(true);
          return;
        }
        
        if (!deliveryZone) {
          setErrorMessage('Por favor selecciona una zona de entrega');
          setShowErrorDialog(true);
          return;
        }
      }
      
      // Validar método de pago
      if (!paymentMethod) {
        setErrorMessage('Por favor selecciona un método de pago');
        setShowErrorDialog(true);
        return;
      }
      
      // Validar que haya productos en el carrito
      if (items.length === 0) {
        setErrorMessage('No hay productos en el carrito');
        setShowErrorDialog(true);
        return;
      }
      
      // Número de WhatsApp registrado en la aplicación
      const whatsappNumber = "5491136029807"; // Número de WhatsApp de Woki
      
      // Generar el mensaje y abrir WhatsApp
      const message = generateWhatsAppMessage();
      const whatsappWindow = window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
      
      // Si la ventana se abrió correctamente, mostrar mensaje de éxito y limpiar el carrito
      if (whatsappWindow) {
        // Mostrar el diálogo de éxito
        setShowSuccessDialog(true);
        
        // Limpiar el carrito después de 1 segundo para asegurar que WhatsApp se abrió correctamente
        setTimeout(() => {
          clearCart();
          // No cerramos el carrito inmediatamente para que el usuario vea el mensaje de éxito
        }, 1000);
      }
    } catch (error) {
      console.error('Error al finalizar la compra:', error);
      setErrorMessage('Ocurrió un error al procesar tu compra. Por favor intenta nuevamente.');
      setShowErrorDialog(true);
    }
  };

  return (
    <>
      {/* Error Dialog */}
      <Dialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <DialogContent className="bg-black border border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              Atención
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              {errorMessage}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowErrorDialog(false)}>
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="bg-black border border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              ¡Compra realizada!
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Tu pedido ha sido enviado a WhatsApp. Gracias por tu compra.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => {
              setShowSuccessDialog(false);
              setIsCartOpen(false);
            }}>
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent side="right" className="w-full sm:w-96 bg-black border-gray-800 p-0 overflow-auto">
        <SheetHeader>
          <SheetTitle className="sr-only">Carrito de compras</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <span className="text-xl font-medium">Carrito de compras</span>
          </div>

          <div className="flex-1 overflow-auto">
            {items.length === 0 ? (
              <div className="p-8 text-center">
                <ShoppingBasket className="h-12 w-12 mx-auto mb-4 text-gray-500" />
                <p className="text-gray-400 mb-6">El carrito de compras está vacío.</p>
                <Button asChild variant="outline" className="mx-auto">
                  <Link href="/productos" onClick={() => setIsCartOpen(false)}>
                    Ver Productos
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="py-4 px-4 space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    {/* Product image */}
                    <div className="relative flex-shrink-0 w-20 h-20 bg-primary/20 rounded overflow-hidden">
                      <Image
                        src={item.product.imageUrl}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product details */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/productos/${item.product.slug}`}
                        className="text-sm font-medium line-clamp-2 hover:text-primary"
                        onClick={() => setIsCartOpen(false)}
                      >
                        {item.product.title}
                      </Link>

                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex items-center border border-gray-700 rounded-md">
                          <button
                            className="px-2 py-0.5 hover:bg-gray-800 rounded-l-md"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 py-0.5 text-sm">{item.quantity}</span>
                          <button
                            className="px-2 py-0.5 hover:bg-gray-800 rounded-r-md"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <button
                          className="text-gray-400 hover:text-destructive"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-1 text-sm font-medium">
                        {new Intl.NumberFormat('es-AR', {
                          style: 'currency',
                          currency: 'ARS',
                          minimumFractionDigits: 2
                        }).format(item.product.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-gray-800 p-4">
              <div className="space-y-4">
                <div className="flex justify-between font-medium">
                  <span>Subtotal ({totalItems} {totalItems === 1 ? 'producto' : 'productos'}):</span>
                  <span>{formattedTotalPrice}</span>
                </div>

                <Separator className="bg-gray-800" />

                {/* Opciones de entrega */}
                <div className="flex flex-col gap-2 mb-2">
                  <div className="text-sm font-medium mb-2">Tipo de entrega:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      className={`p-3 border rounded-md flex items-center justify-center ${deliveryType === 'pickup' ? 'border-primary bg-primary/10' : 'border-gray-700'}`}
                      onClick={() => setDeliveryType('pickup')}
                    >
                      <div className="text-center">
                        <div className="font-medium">Retiro por pick-up</div>
                        <div className="text-xs text-gray-400">Sin costo</div>
                      </div>
                    </button>
                    <button
                      type="button"
                      className={`p-3 border rounded-md flex items-center justify-center ${deliveryType === 'envio' ? 'border-primary bg-primary/10' : 'border-gray-700'}`}
                      onClick={() => setDeliveryType('envio')}
                    >
                      <div className="text-center">
                        <div className="font-medium">Envío a domicilio</div>
                        <div className="text-xs text-gray-400">+$1000</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Formulario para datos de envío */}
                {deliveryType === 'envio' && (
                  <div className="mt-4 border border-gray-800 rounded-md p-3 space-y-3">
                    <h3 className="font-medium">Datos de envío</h3>
                    
                    <div>
                      <label className="text-sm text-gray-400 block mb-1">Nombre completo *</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-900 border border-gray-800 rounded-md p-2 text-sm"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400 block mb-1">Dirección *</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-900 border border-gray-800 rounded-md p-2 text-sm"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Calle y número"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400 block mb-1">Piso/Depto (opcional)</label>
                      <input 
                        type="text" 
                        className="w-full bg-gray-900 border border-gray-800 rounded-md p-2 text-sm"
                        value={floorApt}
                        onChange={(e) => setFloorApt(e.target.value)}
                        placeholder="Piso y departamento"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400 block mb-1">Zona de entrega *</label>
                      <div className="grid grid-cols-1 gap-2">
                        <button
                          type="button"
                          className={`p-2 border rounded-md flex items-center justify-center text-sm ${deliveryZone === 'zona_norte_martes' ? 'border-primary bg-primary/10' : 'border-gray-800'}`}
                          onClick={() => setDeliveryZone('zona_norte_martes')}
                        >
                          Zona Norte (martes)
                        </button>
                        <button
                          type="button"
                          className={`p-2 border rounded-md flex items-center justify-center text-sm ${deliveryZone === 'zona_norte_jueves' ? 'border-primary bg-primary/10' : 'border-gray-800'}`}
                          onClick={() => setDeliveryZone('zona_norte_jueves')}
                        >
                          Zona Norte (jueves)
                        </button>
                        <button
                          type="button"
                          className={`p-2 border rounded-md flex items-center justify-center text-sm ${deliveryZone === 'capital_otros' ? 'border-primary bg-primary/10' : 'border-gray-800'}`}
                          onClick={() => setDeliveryZone('capital_otros')}
                        >
                          Capital y otros (domingo)
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Método de pago */}
                <div className="mt-4 border border-gray-800 rounded-md p-3 space-y-3">
                  <h3 className="font-medium">Método de pago *</h3>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      type="button"
                      className={`p-2 border rounded-md flex items-center justify-center text-sm ${paymentMethod === 'mercado_pago' ? 'border-primary bg-primary/10' : 'border-gray-800'}`}
                      onClick={() => setPaymentMethod('mercado_pago')}
                    >
                      Mercado Pago
                    </button>
                    <button
                      type="button"
                      className={`p-2 border rounded-md flex items-center justify-center text-sm ${paymentMethod === 'transferencia' ? 'border-primary bg-primary/10' : 'border-gray-800'}`}
                      onClick={() => setPaymentMethod('transferencia')}
                    >
                      Transferencia bancaria
                    </button>
                    <button
                      type="button"
                      className={`p-2 border rounded-md flex items-center justify-center text-sm ${paymentMethod === 'efectivo' ? 'border-primary bg-primary/10' : 'border-gray-800'}`}
                      onClick={() => setPaymentMethod('efectivo')}
                    >
                      Efectivo
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total:</span>
                  <span>{formattedTotalConEnvio}</span>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 mt-4"
                  onClick={handleFinalizarCompra}
                >
                  Finalizar Compra
                </Button>

                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continuar comprando
                </Button>

                {/* Mensaje de mínimo de compra */}
                {deliveryType === 'envio' && totalPrice < MONTO_MINIMO_ENVIO && (
                  <div className="mt-4 text-center text-yellow-500 font-semibold flex items-center justify-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    El monto mínimo de compra para envíos es de ${MONTO_MINIMO_ENVIO}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
    </>
  );
}
