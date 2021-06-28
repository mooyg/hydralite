export default async function executeOrFail<T>(
  cb: () => T | Promise<T>,
  message: string = "Internal Server Error"
) {
  try {
    return await cb();
  } catch (err) {
    console.error(err);
    throw new Error(message);
  }
}
