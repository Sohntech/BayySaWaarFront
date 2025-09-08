import React, { useState, useRef } from 'react';
import { CloudArrowUpIcon, XMarkIcon, PhotoIcon } from '@heroicons/react/24/outline';

interface ImageUploadProps {
  label: string;
  name: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // en MB
  acceptedTypes?: string[];
  onFilesChange: (files: File[]) => void;
  existingImages?: Array<{
    publicId: string;
    url: string;
    name?: string;
  }>;
  onRemoveExisting?: (publicId: string) => void;
  error?: string;
  required?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  label,
  name,
  multiple = false,
  maxFiles = 5,
  maxSize = 5,
  acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
  onFilesChange,
  existingImages = [],
  onRemoveExisting,
  error,
  required = false,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewImages, setPreviewImages] = useState<Array<{ file: File; preview: string }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    // Vérifier l'extension du fichier en plus du type MIME
    const fileName = file.name.toLowerCase();
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const hasValidExtension = validExtensions.some(ext => fileName.endsWith(ext));
    
    // Vérifier le type MIME ou l'extension
    const isValidType = acceptedTypes.includes(file.type) || hasValidExtension;
    
    if (!isValidType) {
      return `Type de fichier non supporté. Types acceptés: JPG, PNG, GIF, WebP`;
    }
    if (file.size > maxSize * 1024 * 1024) {
      return `Fichier trop volumineux. Taille maximale: ${maxSize}MB`;
    }
    return null;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const validFiles: File[] = [];
    const errors: string[] = [];

    fileArray.forEach((file) => {
      const error = validateFile(file);
      if (error) {
        errors.push(`${file.name}: ${error}`);
      } else {
        validFiles.push(file);
      }
    });

    if (errors.length > 0) {
      alert(errors.join('\n'));
    }

    if (validFiles.length > 0) {
      const newPreviewImages = validFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      if (multiple) {
        setPreviewImages((prev) => [...prev, ...newPreviewImages].slice(0, maxFiles));
        onFilesChange([...previewImages.map(p => p.file), ...validFiles].slice(0, maxFiles));
      } else {
        setPreviewImages(newPreviewImages.slice(0, 1));
        onFilesChange(validFiles.slice(0, 1));
      }
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const removePreviewImage = (index: number) => {
    const newPreviewImages = previewImages.filter((_, i) => i !== index);
    setPreviewImages(newPreviewImages);
    onFilesChange(newPreviewImages.map(p => p.file));
  };

  const removeExistingImage = (publicId: string) => {
    if (onRemoveExisting) {
      onRemoveExisting(publicId);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Zone de drop */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
          dragActive
            ? 'border-blue-400 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        } ${error ? 'border-red-300' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          name={name}
          multiple={multiple}
          accept={acceptedTypes.join(',')}
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-4">
            <button
              type="button"
              onClick={openFileDialog}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <CloudArrowUpIcon className="h-5 w-5 mr-2" />
              {multiple ? 'Sélectionner des images' : 'Sélectionner une image'}
            </button>
            <p className="mt-2 text-sm text-gray-500">
              ou glissez-déposez vos images ici
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Formats acceptés: JPG, PNG, GIF, WebP • Taille max: {maxSize}MB
              {multiple && ` • Max ${maxFiles} fichiers`}
            </p>
          </div>
        </div>
      </div>

      {/* Images existantes */}
      {existingImages.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Images actuelles:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {existingImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.url}
                  alt={image.name || 'Image'}
                  className="w-full h-24 object-cover rounded-lg border"
                />
                {onRemoveExisting && (
                  <button
                    type="button"
                    onClick={() => removeExistingImage(image.publicId)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Aperçus des nouvelles images */}
      {previewImages.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Nouvelles images:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewImages.map((preview, index) => (
              <div key={index} className="relative group">
                <img
                  src={preview.preview}
                  alt={`Aperçu ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg border"
                />
                <button
                  type="button"
                  onClick={() => removePreviewImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg">
                  {preview.file.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default ImageUpload;
