import formations from "./formations";
const labels = [];
const matrixes = [];

formations.map((item) => {
    labels.push(item.label);
    matrixes.push(item.matrix);
    return false;
})

export default {
    labels,
    matrixes
}