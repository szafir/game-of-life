const formations = [
    {
        label: "Glider",
        pattern: "3x3;bob$2bo$3o!"
    },
    {
        label: "Rats",
        pattern: "12x11;5b2o5b$6bo5b$4bo7b$2obob4o3b$2obo5bobo$3bo2b3ob2o$3bo4bo3b$4b3obo3b$7bo4b$6bo5b$6b2o!"
    },
    {
        label: "Frothing puffer",
        pattern: `33x23;
        7bo17bo$6b3o15b3o$5b2o4b3o5b3o4b2o$
        3b2obo2b3o2bo3bo2b3o2bob2o$4bobo2bobo3bobo3bobo2bobo$b2obobobobo4bobo4bobobobob2o$b2o3bobo4bo5bo4bobo3b2o$b3obo3bo4bobobo4bo3bob3o$2o9b2obobobob2o9b2o$12bo7bo$9b2obo7bob2o$10bo11bo$7b2obo11bob2o$7b2o15b2o$7bobobob3ob3obobobo$6b2o3bo3bobo3bo3b2o$6bo2bo3bobobobo3bo2bo$9b2o4bobo4b2o$5b2o4bo3bobo3bo4b2o$9bob2obo3bob2obo$10bobobobobobobo$12bo2bobo2bo$11bobo5bobo!`
    },
    {
        label: "Gosper glider gun",
        pattern: `36x9;
        24bo11b$22bobo11b$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o14b$2o8bo3bob2o4bobo11b$10bo5bo7bo11b$11bo3bo20b$12b2o!`
    },
    {
        label: "8-engine Cordership",
        pattern: `83x83;
        46bo$41bo2bobo2bo3bo$41bo4b2ob5o$41bo3bo4bobo2$43b3o$44bo18b2o$63b2o6$51bo$50bobo18b2o$31bo18bo2bo17b2o$31bo19b2o$31bo$35bo11b2o$31b3o2bo10b2o$30bo4bo$30bo3bo$31b3o$40b2o$37b2ob2o$30bobo$30bobo30bobo6bobo$30bobo29bo9bobo$30bobo30bo2bo6bo$31b2o32b3o$20b2o3b4o$15b3obo2bo6bo$19bo2bo2b5o$19bo2bo$21bo$18bobo33bo$19bo33bobo$24bo$24bo28bo2bo$55b2o$23b2o31bo$b3o19b2o2$5bo75bo$bo3b2o74b2o$3bobo47b2o27bo$3o52bo25bo$2bo15b2o33b2o$18b2o$b2o$2b2o10b2o$2bo10bo2bo$2b2o10bobo$b2o12bo20bobo6bobo$35bo9bobo22b2obo$36bo2bo6bo24b2o$38b3o6$27bo$6b2o18bobo$6b2o$26bo2bo$28b2o$29bo3$54bo$14b2o38b2o$14b2o10b2o27bo$28bo25bo$26b2o7$43b2obo$44b2o!`  
    }  
    // {
    //     label: "10 Cell Row",
    //     matrix: [[true, true, true, true, true, true, true, true, true, true]]
    // },
    // {
    //     label: "100 Cell Row",
    //     matrix: [[true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,true, true, true, true, true, true, true, true, true, true,]]
    // },
    // {
    //     label: "Lightweight spaceship (LWSS)",
    //     matrix: [[false, true, true, true, true], [true, false, false, false, true], [false, false, false, false, true], [true, false, false, true, false]]
    // },
    // {
    //     label: "Ants",
    //     matrix: [[true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false],
    //     [false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true],
    //     [false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true],
    //     [true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, false, false]]
    // },

    // {
    //     label: "Puffer trian",
    //     matrix: [
    //         [false, false, false, true, false],
    //         [false, false, false, false, true],
    //         [true, false, false, false, true],
    //         [false, true, true, true, true],
    //         [false, false, false, false, false],
    //         [false, false, false, false, false],
    //         [false, false, false, false, false],
    //         [true, false, false, false, false],
    //         [false, true, true, false, false],
    //         [false, false, true, false, false],
    //         [false, false, true, false, false],
    //         [false, true, false, false, false],
    //         [false, false, false, false, false],
    //         [false, false, false, false, false],
    //         [false, false, false, true, false],
    //         [false, false, false, false, true],
    //         [true, false, false, false, true],
    //         [false, true, true, true, true]
    //     ]
    // }
];

export default formations;