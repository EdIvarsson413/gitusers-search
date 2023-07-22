export default function formatearFecha( fecha: string ) {
    return new Date( fecha || '' ).toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    })
}