import tar from "tar";

function tarCzf(inFile: string[] | string, tarFile: string): Promise<void> {
  const file = typeof inFile === "string" ? [inFile] : inFile;

  return tar.c({ gzip: true, file: tarFile }, file);
};

export default tarCzf;
