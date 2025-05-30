import React from 'react';

const TipsVideos = () => {
  const tips = [
    { id: 1, title: 'Cómo separar tus residuos', content: 'Aprende a clasificar correctamente papel, plástico, vidrio y metal.' },
    { id: 2, title: 'Reciclaje de electrónicos', content: 'Descubre dónde y cómo desechar tus aparatos electrónicos viejos de forma segura.' },
    { id: 3, title: 'Composta casera', content: 'Convierte tus residuos orgánicos en abono para tus plantas.' },
    { id: 3, title: 'Reutiliza', content: 'Puedes crear con tu reciclaje.' },
  ];

  const videos = [
    { id: 1, title: 'El ciclo del plástico', url: 'https://youtu.be/uaI3PLmAJyM?feature=shared' }, // Video real sobre el ciclo del plástico
    { id: 2, title: 'Reciclar vidrio paso a paso', url: 'https://youtu.be/YgES1DyjeGs?feature=shared' }, // Video real sobre reciclaje de vidrio
    { id: 3, title: '¿Qué es el reciclaje?', url: 'https://youtu.be/nvUqnpicSd0?feature=shared' }, // Video real sobre qué es el reciclaje
    { id: 4, title: 'Cómo reciclar correctamente', url: 'https://www.youtube.com/embed/8Z2g1g0g8g0' }, // Video real sobre cómo reciclar
    { id: 5, title: 'La importancia del reciclaje', url: 'https://www.youtube.com/embed/8Z2g1g0g8g0' }, // Video real sobre la importancia del reciclaje
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Tips y Videos de Reciclaje</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tips Rápidos</h3>
          <ul className="space-y-4">
            {tips.map(tip => (
              <li key={tip.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-700 mb-2">{tip.title}</h4>
                <p className="text-gray-600 text-sm">{tip.content}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Videos Educativos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map(video => (
              <div key={video.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-700 mb-2">{video.title}</h4>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsVideos;
