
function loggingDecorator(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    console.log(`Before method execution: ${propertyKey}`);
    try {
      const result = originalMethod.apply(this, args);
      console.log(`After method execution: ${propertyKey}`);
      return result;
    } catch (error) {
      // @ts-ignore
      Error.captureStackTrace(error, descriptor.value);
      console.error(`Method threw an error: ${propertyKey}`);
      // this still show that error is throw right here
      // currently cannot remove or showing the actual throwing error places
      throw error;
    }
  };

  return descriptor;
}

export default loggingDecorator;
