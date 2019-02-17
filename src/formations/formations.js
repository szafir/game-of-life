const formations = [
    {
        label: "Glider",
        matrix: [[false, false, true], [true, false, true], [false, true, true]]
    },
    {
        label: "Small Exploder",
        matrix: [[false, true, true, false], [true, true, false, true], [false, true, true, false]]
    },
    {
        label: "Exploder",
        matrix: [[true, false, true, false, true], [true, false, false, false, true], [true, false, false, false, true], [true, false, false, false, true], [true, false, true, false, true]]
    },
    {
        label: "10 Cell Row",
        matrix: [[true, true, true, true, true, true, true, true, true, true]]
    },
    {
        label: "Lightweight spaceship (LWSS)",
        matrix: [[false, true, true, true, true], [true, false, false, false, true], [false, false, false, false, true], [true, false, false, true, false]]
    },
    {
        label: "Ants",
        matrix: [[true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false],
        [false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true],
        [false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true],
        [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false]]
    },

    {
        label: "Puffer trian",
        matrix: [
            [false, false, false, true, false],
            [false, false, false, false, true],
            [true, false, false, false, true],
            [false, true, true, true, true],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [true, false, false, false, false],
            [false, true, true, false, false],
            [false, false, true, false, false],
            [false, false, true, false, false],
            [false, true, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, true, false],
            [false, false, false, false, true],
            [true, false, false, false, true],
            [false, true, true, true, true]
        ]
    }
];

export default formations;