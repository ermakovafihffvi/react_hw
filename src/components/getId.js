export const getId = (array) => {
    let ids = [];
    array.forEach((elem) => {
      ids.push(elem.id);
    });
    //console.log(ids);
    return Math.max.apply(null, ids) + 1;
}