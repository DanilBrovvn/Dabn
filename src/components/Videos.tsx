import React from 'react';
import { Play } from 'lucide-react';

const Videos: React.FC = () => {
  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Выступление на фестивале иллюзионистов',
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Трюк с исчезновением на корпоративе',
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Комедийное шоу в ресторане «Пушкинъ»',
    },
  ];

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-medium mb-6">
            <Play className="h-4 w-4" />
            <span>Видео</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Магия в действии
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Посмотрите записи моих выступлений и убедитесь, что магия существует
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@IgorChudakov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors shadow-md"
          >
            <Play className="h-5 w-5" />
            <span>Больше видео на YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
