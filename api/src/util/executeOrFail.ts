export default function executeOrFail(cb: any, message: string) {
  try {
    return cb();
  } catch (err) {
    console.error(err);
    throw new Error(message || "Internal Server Error");
  }
}
