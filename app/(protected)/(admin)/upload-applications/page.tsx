'use client';
import { useDropzone } from 'react-dropzone';
import { useState, MouseEvent } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import HomeTitle from '@/components/home-title';
const UploadApplications = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (
      acceptedFiles.length > 0 &&
      acceptedFiles[0].type ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      setSelectedFile(acceptedFiles[0]);
      toast.success('File selected successfully');
    } else {
      toast.error('Invalid file format. Please upload an xls file.');
      console.error('');
    }
    // console.log('acceptedFiles', acceptedFiles);
    // setSelectedFile(acceptedFiles[0]);
  };
  console.log('selectedFile', selectedFile);
  const uploadFile = async () => {
    console.log('selectedFile', selectedFile);
    // if (selectedFile) {
    //   const formData = new FormData();
    //   formData.append('file', selectedFile);

    //   try {
    //     const response = await fetch('/api/upload', {
    //       method: 'POST',
    //       body: formData,
    //     });

    //     // Handle the response as needed
    //     console.log('File uploaded successfully', response);
    //   } catch (error) {
    //     console.error('Error uploading file', error);
    //   }
    // }
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <section className="p-4 bg-gray-50 h-full">
      <div className="container px-4 mx-auto">
        {/* <p className="text-primary-color font-semibold text-center my-5">
          Upload All Applications
        </p> */}
        <HomeTitle title="Upload All Applications" />

        <div className="w-1/2  pt-8 mx-auto">
          <div
            {...getRootProps()}
            // style={{
            //   border: '2px dashed #ccc',
            //   padding: '20px',
            //   textAlign: 'center',
            // }}
            className="text-center  p-6 border-2 border-primary-color border-dashed w-full bg-primary-color/5 cursor-pointer"
          >
            <input {...getInputProps()} />
            <p className=""> Drag the file here or click on the file </p>
          </div>
          {selectedFile && (
            <div className="mt-5">
              <p className="mb-3">
                File selected: {selectedFile.name} - Size:{' '}
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
              <Button size={'sm'} onClick={uploadFile}>
                Upload File
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadApplications;
