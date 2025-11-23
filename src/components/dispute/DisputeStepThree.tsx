import React, { useState } from 'react';
import { Upload, X, FileText } from 'lucide-react';
interface DisputeStepThreeProps {
  onNext: (data: {
    documents: File[];
  }) => void;
  onBack: () => void;
  initialData: {
    documents: File[];
  };
}
export function DisputeStepThree({
  onNext,
  onBack,
  initialData
}: DisputeStepThreeProps) {
  const [documents, setDocuments] = useState<File[]>(initialData.documents);
  const [dragActive, setDragActive] = useState(false);
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
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setDocuments([...documents, ...newFiles]);
    }
  };
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newFiles = Array.from(e.target.files);
      setDocuments([...documents, ...newFiles]);
    }
  };
  const removeDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };
  const handleContinue = () => {
    onNext({
      documents
    });
  };
  return <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Upload Supporting Documents
      </h2>
      <p className="text-gray-600 mb-6">
        Add any relevant documents, receipts, or correspondence (optional)
      </p>
      <div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 transition-colors ${dragActive ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}>
        <Upload size={48} className={`mx-auto mb-4 ${dragActive ? 'text-blue-600' : 'text-gray-400'}`} />
        <p className="text-gray-700 font-medium mb-2">
          Drag and drop files here, or click to browse
        </p>
        <p className="text-sm text-gray-500 mb-4">
          PDF, PNG, JPG up to 10MB each
        </p>
        <input type="file" id="file-upload" multiple accept=".pdf,.png,.jpg,.jpeg" onChange={handleFileInput} className="hidden" />
        <label htmlFor="file-upload" className="inline-block px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 cursor-pointer transition-colors">
          Choose Files
        </label>
      </div>
      {documents.length > 0 && <div className="mb-8">
          <h3 className="font-medium text-gray-900 mb-3">
            Uploaded Documents ({documents.length})
          </h3>
          <div className="space-y-2">
            {documents.map((file, index) => <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <FileText size={20} className="text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button onClick={() => removeDocument(index)} className="p-1 hover:bg-gray-200 rounded transition-colors">
                  <X size={18} className="text-gray-500" />
                </button>
              </div>)}
          </div>
        </div>}
      <div className="flex justify-between">
        <button onClick={onBack} className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          Back
        </button>
        <button onClick={handleContinue} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Continue
        </button>
      </div>
    </div>;
}