
import './App.css'; 
import Navbar from './components/Navbar'; 
import Card from './components/Card';     

function App() {
  return (
   
    <>
      <Navbar /> 
    
      <div className="min-h-screen bg-gray-100 py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-8">
          Bienvenido a Mi Aplicación
        </h1>

       
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-start gap-6">
          
          <Card
            title="Tarjeta Increíble 1"
            text="Descubre las maravillas de la programación con React y Tailwind CSS."
            buttonText="Explorar Ahora"
          />
          <Card
            title="Otra Tarjeta Genial"
            text="Personaliza esta tarjeta con tu propio contenido y estilos únicos."
            buttonText="Ver Detalles"
          />
          <Card
            title="Tarjeta de Servicios"
            text="Ofrecemos soluciones innovadoras para tus necesidades de desarrollo web."
            buttonText="Contactar"
          />
        </div>
      </div>
    </>
  );
}

export default App;