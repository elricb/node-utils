function dirHome() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}

export default dirHome;
