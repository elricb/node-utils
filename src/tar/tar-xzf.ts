import tar from "tar";

function tarXzf(tarFile: string): Promise<void> {
  return tar.x({ gzip: true, file: tarFile });
};

export default tarXzf;
