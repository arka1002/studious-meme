import { FC, useState } from "react";
import FileUpload from "components/FileUpload";
const UploadExcel: FC = () => {
  const [files, setFiles] = useState<Array<any>>([]);
  return (
    <>
      <div className="mx-auto pt-6  w-full">
        <div className="px-10">
          <h2 className="font-semibold text-lg">Onboarding via Excel File</h2>
          <div className="px-3 pt-10">
            <div className=" border-dashed border-2 border-sky-500 cursor-pointer">
              <FileUpload setFiles={setFiles} />
              {/* <input className="input-zone" />

              <div className="flex flex-col items-center justify-center py-4">
                
                <div className="text-center text-gray-400">
                  <>
                    <p>Drag and drop your excel file here,</p>
                    <p>or click to select files</p>
                  </>
                </div>
              </div> */}
            </div>

            <div className="w-full flex justify-center pt-6">
              <button
                className={"text-white py-2 btn-gradient px-8 rounded text-sm"}
              ></button>
            </div>
            <div className="pt-8 px-4 text-center text-sm text-gray-500">
              <p>
                You can complete your onboarding by using our current Excel
                spreadsheet and sending it to us. To download, simply
                <span className="text-customGreen-400 cursor-pointer font-bold">
                  click here.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadExcel;
