 export const verifyFileExtension = (file) => {
    if (file.includes("pdf") ||
        file.includes("doc") ||
        file.includes("docx")) {
        return true
    } else {
        return false
    }
}

export const verifyFile = (name) => {
   if(verifyFileExtension(name)){
    return true;
  }else{
    return false;
  }
}

export  const handleDropBoxUpload = (files,setUploadedJob,selectItem) => {
    if (verifyFileExtension(files[0].link)) {
      setUploadedJob && setUploadedJob(selectItem);
      return true;
    } else {
      return false
    }
  };