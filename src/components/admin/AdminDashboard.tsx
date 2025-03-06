import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Upload, Trash2, Image, Video, LogOut } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { supabase, signOut } = useAuth();
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');

  useEffect(() => {
    loadImages();
    loadVideos();
  }, []);

  const loadImages = async () => {
    const { data, error } = await supabase.storage.from('gallery').list();
    if (data && !error) {
      setImages(data);
    }
  };

  const loadVideos = async () => {
    const { data, error } = await supabase.storage.from('videos').list();
    if (data && !error) {
      setVideos(data);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const bucket = activeTab === 'images' ? 'gallery' : 'videos';
      const { error } = await supabase.storage
        .from(bucket)
        .upload(`${Date.now()}-${file.name}`, file);

      if (error) throw error;

      if (activeTab === 'images') {
        await loadImages();
      } else {
        await loadVideos();
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (filename: string) => {
    const bucket = activeTab === 'images' ? 'gallery' : 'videos';
    const { error } = await supabase.storage.from(bucket).remove([filename]);
    
    if (!error) {
      if (activeTab === 'images') {
        await loadImages();
      } else {
        await loadVideos();
      }
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Панель администратора</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Выйти
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('images')}
                className={`flex-1 py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'images'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Image className="h-5 w-5 inline-block mr-2" />
                Фотографии
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex-1 py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'videos'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Video className="h-5 w-5 inline-block mr-2" />
                Видео
              </button>
            </nav>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg appearance-none cursor-pointer hover:border-indigo-500 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <Upload className="w-6 h-6 text-gray-600" />
                  <span className="font-medium text-gray-600">
                    {uploading ? 'Загрузка...' : 'Нажмите для загрузки файла'}
                  </span>
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept={activeTab === 'images' ? "image/*" : "video/*"}
                  onChange={handleFileUpload}
                  disabled={uploading}
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(activeTab === 'images' ? images : videos).map((file) => (
                <div
                  key={file.name}
                  className="relative group bg-white rounded-lg shadow overflow-hidden"
                >
                  {activeTab === 'images' ? (
                    <img
                      src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/gallery/${file.name}`}
                      alt={file.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <video
                      src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/videos/${file.name}`}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-sm text-gray-500 truncate">{file.name}</p>
                    <button
                      onClick={() => handleDelete(file.name)}
                      className="absolute top-2 right-2 p-2 bg-red-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;