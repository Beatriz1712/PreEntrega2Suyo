import data from "../data/data.json";

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
          resolve (data);
        }, 0)
      })
}
export default pedirProductos;