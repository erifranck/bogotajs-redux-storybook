export const classNames = (classObject) =>
    Object.keys(classObject).filter(classname => classObject[classname]).join(' ');
