import formations from "./formations";
const labels = [];
const matrixes = [];
const patterns = [];

formations.map((item) => {
    labels.push(item.label);
    matrixes.push(item.matrix);
    patterns.push(item.pattern);
    return false;
})
    
export default {
    labels,
    matrixes,
    patterns
}