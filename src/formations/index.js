import formations from "./formations";
const labels = [];
const matrixes = [];

formations.map((item) => {
    labels.push(item.label);
    matrixes.push(item.matrix);
})

export default {
    labels,
    matrixes
}