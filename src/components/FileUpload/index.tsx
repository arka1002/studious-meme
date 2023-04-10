import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
interface IFileUpload {
  setFiles: (val: Array<any>) => void;
}
const FileUpload: FC<IFileUpload> = (props) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/png": [".png"] },
    onDrop: (acceptedFiles) => {
      props.setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  return (
    <>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </>
  );
};

export default FileUpload;
