# HMI Control de Producción - Pantalla Táctil

Interfaz HMI (Human-Machine Interface) diseñada para pantallas táctiles 16:9.

## 🚀 Tecnología Utilizada

- **React 18** - Framework de UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos con Grid Layout

## 📋 Características

### Diseño Táctil
- Botones grandes optimizados para interacción táctil
- Sin necesidad de hover, todo funciona con toque
- Feedback visual inmediato en cada interacción
- Diseño 16:9 adaptable a diferentes resoluciones

### Funcionalidades

1. **Selector de Productos**
   - 3 productos configurables
   - Cada cantidad es un botón que abre un teclado numérico
   - Diseño visual tipo HMI industrial

2. **Panel de Control**
   - ▶ **INICIAR** (verde) - Inicia el proceso
   - ❚❚ **PAUSAR** (azul) - Pausa el proceso en ejecución
   - ↻ **REINICIAR** (naranja) - Reinicia todo el sistema

3. **Bolsas Detectadas**
   - Contador en tiempo real
   - Diseño claro y legible

4. **Datos de Carga**
   - Muestra cantidades de cada producto
   - Cálculo de tiempo estimado
   - Botón **FINALIZAR** (azul) para completar el proceso

5. **Teclado Numérico (Numpad)**
   - Popup modal para introducir cantidades
   - Botones grandes para facilitar el toque
   - Funciones: números 0-9, borrar (C), retroceder (⌫)
   - Botones de CANCELAR y ACEPTAR

## 🛠️ Instalación y Ejecución

### Requisitos Previos
- Node.js 16+ instalado

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```
La aplicación se ejecutará en `http://localhost:5173/`

### Build de Producción
```bash
npm run build
```

### Preview del Build
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ProductSelector.jsx      # Selector de productos
│   ├── ProductSelector.css
│   ├── ControlPanel.jsx          # Botones de control
│   ├── ControlPanel.css
│   ├── DetectedBags.jsx          # Contador de bolsas
│   ├── DetectedBags.css
│   ├── LoadData.jsx              # Datos de carga y finalizar
│   ├── LoadData.css
│   ├── Numpad.jsx                # Teclado numérico popup
│   └── Numpad.css
├── App.jsx                        # Componente principal
├── App.css                        # Estilos del layout
├── index.css                      # Estilos globales
└── main.jsx                       # Punto de entrada
```

## 🎨 Esquema de Colores

- **Fondo principal**: Gradiente naranja (#ff6b35 → #f7931e)
- **Botón INICIAR**: Verde (#4caf50)
- **Botón PAUSAR**: Azul (#2196f3)
- **Botón REINICIAR**: Naranja (#ff9800)
- **Botón FINALIZAR**: Azul (#2196f3)
- **Panel productos**: Marrón oscuro (#4a2817)
- **Panel datos**: Marrón (#8b4513)

## 🔧 Personalización

### Modificar Productos
En `src/App.jsx`, edita el estado inicial:

```javascript
const [products, setProducts] = useState([
  { id: 1, name: 'producto 1', quantity: 0 },
  { id: 2, name: 'producto 2', quantity: 0 },
  { id: 3, name: 'producto 3', quantity: 0 }
])
```

### Ajustar Tiempo Estimado
En `src/App.jsx`, modifica el cálculo:

```javascript
const estimatedTime = Math.floor(totalBags * 1.5) // minutos por bolsa
```

### Cambiar Colores
Edita los archivos `.css` de cada componente para personalizar los colores.

## 📱 Optimización para Pantallas Táctiles

- Tamaño mínimo de botones: 60-90px de altura
- `touch-action: manipulation` para evitar zoom
- Sin selección de texto (`user-select: none`)
- Sin highlight al tocar (`-webkit-tap-highlight-color: transparent`)
- Feedback visual con `transform: scale(0.95)` al presionar

## 🚧 Próximas Mejoras Sugeridas

- [ ] Conexión a backend para datos reales
- [ ] Persistencia de datos en localStorage
- [ ] Sonidos de confirmación
- [ ] Modo oscuro/claro
- [ ] Más productos dinámicos
- [ ] Exportar reportes
- [ ] Historial de procesos

## 📄 Licencia

Este es un proyecto de demostración para HMI táctil.
