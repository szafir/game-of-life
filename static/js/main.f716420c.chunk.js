(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{209:function(e,t,o){e.exports=o(354)},352:function(e,t,o){},354:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(19),l=o.n(r),i=o(17),c=o(20),b=o(22),s=o(21),p=o(23),u=o(355),d=o(357),h=o(16),m=Object(h.withStyles)(function(e){return{cell:{background:"#aaa",display:"block",width:9,height:9,border:"1px solid rgb(220, 220, 220)"},alive:{background:"#fff"}}})(function(e){var t=e.classes,o=[t.cell,!1!==e.alive?t.alive:null];return a.a.createElement("span",{className:o.join(" ")})}),f=Object(h.withStyles)(function(e){return{row:{width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-start"}}})(function(e){return a.a.createElement("div",{className:e.classes.row},e.items.map(function(t,o){return o>0&&o<e.items.length-1?a.a.createElement(m,{cellInd:o,alive:t,key:"cell-flexbox-".concat(e.rowInd,"-").concat(o)}):null}))}),g=o(7),$=function(e){function t(){return Object(i.a)(this,t),Object(b.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.cells,n=t.classes,r={width:this.props.fieldWidth,height:this.props.fieldHeight};return a.a.createElement(g.l,{elevation:2,className:n.paper,square:"true",style:r},o.map(function(t,n){return n>0&&n<o.length-1?a.a.createElement(f,{items:t,rowInd:n,onCellClick:e.onCellClick,key:"row-flexbox-".concat(n)}):null}))}}]),t}(n.Component),v=Object(h.withStyles)(function(e){return{paper:{margin:"0px auto",background:"#eee",backgroundImage:"url(/images/cell_11x11.png)"}}})($),E=Object(h.withStyles)(function(e){return{cell:{display:"block",width:6,height:6,position:"absolute",top:0,left:0,transformOrigin:"right bottom",background:"#fff"}}})(function(e){var t=e.classes,o=e.item,n=e.containerWidth,r=e.containerHeight,l=e.cellSize,i=e.viewportX,c=e.viewportY,b=o.split("_"),s=i+(l+1)*b[0]+n/2,p=c+(l+1)*b[1]+r/2,u={transform:"translate3d(".concat(s,"px,").concat(p,"px, 0)")};return s<0||s>n||p<0||p>r?null:a.a.createElement("span",{className:t.cell,style:u})}),y=function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(b.a)(this,Object(s.a)(t).call(this,e))).handleOnMouseDownCapture=function(e){o.props.dragStart({pageX:e.pageX,pageY:e.pageY})},o.handleOnMouseUpCapture=function(e){o.props.dragStop({pageX:e.pageX,pageY:e.pageY})},o.handleOnMouseMoveCapture=function(e){o.props.isDragging&&o.props.dragging({pageX:e.pageX,pageY:e.pageY})},o.pageRef=a.a.createRef(),o.state={containerWidth:0,containerHeight:0},o}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({containerWidth:this.pageRef.current.offsetWidth,containerHeight:this.pageRef.current.offsetHeight})}},{key:"render",value:function(){var e=this,t=this.props,o=t.classes,n=t.cells,r=t.viewportX,l=t.viewportY,i=[o.paper];return this.props.isDragging&&i.push(o.isDragging),a.a.createElement("div",{elevation:2,className:i.join(" "),square:"true",ref:this.pageRef,onMouseDownCapture:this.handleOnMouseDownCapture,onMouseUpCapture:this.handleOnMouseUpCapture,onMouseMoveCapture:this.handleOnMouseMoveCapture,id:"plane"},Object.keys(n).map(function(t){return a.a.createElement(E,{item:t,containerWidth:e.state.containerWidth,containerHeight:e.state.containerHeight,cellSize:e.props.cellSize,viewportX:r,viewportY:l,key:"cell-".concat(t)})}))}}]),t}(n.Component),w=Object(h.withStyles)(function(e){return{paper:{margin:"0px auto",background:"rgba(0, 0, 0, 0.14)",display:"flex",flexGrow:1,flexWrap:"wrap",position:"relative",cursor:"grab"},isDragging:{cursor:"grabbing"}}})(y),O=o(47),C=function(e){var t=e.cellSize*(e.cellInd-1)+1,o=e.cellSize*(e.rowInd-1)+1;return e.alive?a.a.createElement(O.Rect,{x:t,y:o,width:9,height:9,fill:"#fff"}):null},S=Object(h.withStyles)(function(e){return{paper:{margin:"0px auto",background:"#eee",backgroundImage:"url(/images/cell_11x11.png)"}}})(function(e){var t=e.cells,o=e.classes,n={width:e.fieldWidth,height:e.fieldHeight};return a.a.createElement(g.l,{elevation:2,className:o.paper,square:"true",style:n},a.a.createElement(O.Stage,{width:e.fieldWidth,height:e.fieldHeight},a.a.createElement(O.Layer,null,t.map(function(o,n){return n>0&&n<t.length-1?o.map(function(t,o){return a.a.createElement(C,{rowInd:n,cellInd:o,cellSize:e.cellSize,alive:t,key:"cell-canvas-".concat(n,"-").concat(o)})}):null}))))}),j=o(28),x=[],I=[],R=[];[{label:"Glider",pattern:"x = 3, y = 3, rule = B3/S23\n        bob$2bo$3o!"},{label:"Rats",pattern:"x = 12, y = 11, rule = B3/S23\n        5b2o5b$6bo5b$4bo7b$2obob4o3b$2obo5bobo$3bo2b3ob2o$3bo4bo3b$4b3obo3b$7bo4b$6bo5b$6b2o!"},{label:"Gosper glider gun",pattern:"x = 36, y = 9, rule = B3/S23\n        24bo11b$22bobo11b$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o14b$2o8bo3bob2o4bobo11b$10bo5bo7bo11b$11bo3bo20b$12b2o!"},{label:"8-engine Cordership",pattern:"x = 83, y = 83, rule = B3/S23\n        46bo$41bo2bobo2bo3bo$41bo4b2ob5o$41bo3bo4bobo2$43b3o$44bo18b2o$63b2o6$51bo$50bobo18b2o$31bo18bo2bo17b2o$31bo19b2o$31bo$35bo11b2o$31b3o2bo10b2o$30bo4bo$30bo3bo$31b3o$40b2o$37b2ob2o$30bobo$30bobo30bobo6bobo$30bobo29bo9bobo$30bobo30bo2bo6bo$31b2o32b3o$20b2o3b4o$15b3obo2bo6bo$19bo2bo2b5o$19bo2bo$21bo$18bobo33bo$19bo33bobo$24bo$24bo28bo2bo$55b2o$23b2o31bo$b3o19b2o2$5bo75bo$bo3b2o74b2o$3bobo47b2o27bo$3o52bo25bo$2bo15b2o33b2o$18b2o$b2o$2b2o10b2o$2bo10bo2bo$2b2o10bobo$b2o12bo20bobo6bobo$35bo9bobo22b2obo$36bo2bo6bo24b2o$38b3o6$27bo$6b2o18bobo$6b2o$26bo2bo$28b2o$29bo3$54bo$14b2o38b2o$14b2o10b2o27bo$28bo25bo$26b2o7$43b2obo$44b2o!"},{label:"Glider-producing switch engine",pattern:"x = 67, y = 60, rule = 23/3\n        bo65b$bo65b$bo65b$5bo61b$b3o2bo60b$o4bo61b$o3bo62b$b3o63b$15b2o50b$13b2o2bo49b$obo10b2o3bo48b$obo10b2o52b$obo64b$obo17bo46b$b2o14bo49b3$22bo2bo41b$26bo40b$22bo10b2o32b$26bo6b2o32b$22b4o41b$21bo45b$22b2o43b$23bo43b3$41b2o24b$41b2o24b3$13b2o52b$13b2o52b5$36b2o29b$36b3o9b2o17b$37bo10bobo16b$49bo17b$33bo33b$27bo5bo33b$26bobo11b3o24b$26bo2bo9bob2o24b$16b2o9b2o10b2o26b$15bo2bo48b$15b2ob2o47b$18bobo46b$20b2o45b$17bo3bo45b$17bo2bo44b2o$18b3o44b2o3$54bo12b$53bobo11b$40bo12b2o12b$39bobo25b$39b2o!"},{label:"100 cell row",pattern:"x = 100, y = 1, rule = B3/S23\n        100o!"},{label:"Puffer",pattern:"x = 30, y = 27, rule = B3/S23\n        9bobo18b$8bo2bo18b$7b2o21b$6bo3bo19b$5b3obo20b$2b2o26b$bo3b5o7b4o5bo2b\n        o$o3bo12bo3bo3bo4b$o5b2o9bo7bo3bo$3o3b4o8bo2bo3b4ob$bo7bo20b$b2o19b2o\n        6b$bobo18b2o6b$b2o2b2obo8bobo2b2o6b$2bob3obo3bob4obo2b2o6b$9b2obob2o2b\n        o3b2o3b3o$4b6ob2o3b4o2b2o3b3o$5bo4b3o6bo2b2o3b3o$6b2o5b2o2b2o3b2o6b$7b\n        o2bo5b4o2b2o6b$8bobob2o5bo2b2o6b$22b2o6b2$18bo2bo3b4ob$17bo7bo3bo$17bo3bo3bo4b$17b4o5bo2bo!"}].map(function(e){return x.push(e.label),I.push(e.matrix),R.push(e.pattern),!1});var _={labels:x,matrixes:I,patterns:R},N=function e(t){var o=this;Object(i.a)(this,e),this.preparePattern=function(e){var t=e.split("\n").filter(function(e){return e&&0!==e.indexOf("#")}).map(function(e){return e.trim()});return o.boundingBox=o.parseBoundingBox(t[0]),t.shift(),t.join("")},this.parseBoundingBox=function(e){var t={};try{t=e.split(", ").filter(function(e){return["x","y"].includes(e[0])}).map(function(e){return parseInt(e.match(/(\d{1,})$/gm)[0])})}catch(n){o.error=!0}return 2!==t.length&&(o.error=!0),t},this.prepareLines=function(){return o.pattern.replace("!","").split("$").map(function(e){if(e){var t=(e=e.trim()).match(/(\d{1,})$/gm);t&&(e+="$".repeat(t-1))}return e}).join("$").split("$")},this.parseSingleLine=function(e){var t="";return e.split("").map(function(e){if("o"===e||"b"===e){if(""===t)return t="",e;var o=e.repeat(t);return t="",o}return t+=e,""}).join("")},this.parseLines=function(){var e=o.prepareLines();return o.boundingBox[1]!==e.length?(o.error=!0,[]):e.map(function(e){return o.parseSingleLine(e)})},this.parse=function(){var e=o.parseLines();return!o.error&&{boundingBox:o.boundingBox,parsedLines:e}},this.rawPattern=t,this.error=!1,this.pattern=this.preparePattern(t)},P=function e(t){var o=this;Object(i.a)(this,e),this.calculateCell=function(e){var t=e.split("_").map(function(e){return parseInt(e)}),n=[o.cells["".concat(t[0]-1,"_").concat(t[1]-1)],o.cells["".concat(t[0]-1,"_").concat(t[1])],o.cells["".concat(t[0]-1,"_").concat(t[1]+1)],o.cells["".concat(t[0],"_").concat(t[1]-1)],o.cells["".concat(t[0],"_").concat(t[1]+1)],o.cells["".concat(t[0]+1,"_").concat(t[1]-1)],o.cells["".concat(t[0]+1,"_").concat(t[1])],o.cells["".concat(t[0]+1,"_").concat(t[1]+1)]].reduce(function(e,t){return e+(t?1:0)},0),a=!1;return[2,3].includes(n)&&o.cells["".concat(t[0],"_").concat(t[1])]&&(a=!0),3!==n||o.cells["".concat(t[0],"_").concat(t[1])]||(a=!0),a},this.calculateGeneration=function(){var e={};return Object.keys(o.cells).map(function(t){var n=[],a=t.split("_").map(function(e){return parseInt(e)});return n.push("".concat(a[0]-1,"_").concat(a[1]-1)),n.push("".concat(a[0]-1,"_").concat(a[1])),n.push("".concat(a[0]-1,"_").concat(a[1]+1)),n.push("".concat(a[0],"_").concat(a[1]-1)),n.push("".concat(a[0],"_").concat(a[1])),n.push("".concat(a[0],"_").concat(a[1]+1)),n.push("".concat(a[0]+1,"_").concat(a[1]-1)),n.push("".concat(a[0]+1,"_").concat(a[1])),n.push("".concat(a[0]+1,"_").concat(a[1]+1)),n.map(function(t){return o.calculateCell(t,o.cells)&&(e[t]=!0),!1}),!1}),e},this.cells=t},k=function(e){var t=e.formation,o=e.pattern;Number.isInteger(t)&&(o=_.patterns[t]);var n=new N(o).parse();if(!n)return{type:"IMPORT_ERROR",payload:{importError:!0}};for(var a=n.boundingBox,r=n.parsedLines,l=Math.ceil(a[0]/2),i=Math.ceil(a[1]/2),c={},b=0;b<a[0];b++)for(var s=0;s<a[1];s++)r&&r[s]&&r[s][b]&&"o"===r[s][b]&&(c["".concat(b-l,"_").concat(s-i)]=!0);return{type:"NEXT_GENERATION",payload:{cells:c,generationNo:0}}},T=[],G=function(e){return{type:"NEXT_GENERATION",payload:{cells:function(e){return new P(e).calculateGeneration()}(e.cells),velocity:function(){(T=T.slice(T.length-500)).push((new Date).getTime());var e=new Date;return e.setSeconds(e.getSeconds()-2),(T.reduce(function(t,o){return e.getTime()<o?t+1:t},0)/2).toFixed(1)}()}}},X=function(e){var t=function(t){function o(){return Object(i.a)(this,o),Object(b.a)(this,Object(s.a)(o).apply(this,arguments))}return Object(p.a)(o,t),Object(c.a)(o,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.shouldRun&&!this.props.isDragging&&e.populationSpeed===this.props.populationSpeed&&requestAnimationFrame(function(){setTimeout(function(){t.props.nextGeneration({cells:t.props.cells})},Math.ceil(.01*(100-e.populationSpeed)*200))})}},{key:"render",value:function(){return a.a.createElement(e,this.props)}}]),o}(n.Component);return Object(j.b)(function(e){return{cells:e.cell.cells,viewportX:e.viewport.viewportX,viewportY:e.viewport.viewportY,isDragging:e.viewport.isDragging,fieldWidth:e.cell.fieldWidth,fieldHeight:e.cell.fieldHeight,cellSize:e.cell.cellSize,shouldRun:e.cell.shouldRun,populationSpeed:e.cell.populationSpeed}},function(e){return{nextGeneration:function(t){return e(G(t))},changeCell:function(t,o){return e({type:"CHANGE_CELL",payload:{row:t,col:o}})},dragStart:function(t){return e({type:"VIEWPORT_START_DRAG",payload:t})},dragStop:function(t){return e({type:"VIEWPORT_STOP_DRAG",payload:t})},dragging:function(t){return e({type:"VIEWPORT_DRAGGING",payload:t})}}})(t)},D=o(135),L=o.n(D),A=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(b.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={value:0},o.handleChange=function(e,t){o.setState({value:t}),o.props.onChange(t)},o}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({value:this.props.populationSpeed})}},{key:"render",value:function(){var e=this.props.classes;return a.a.createElement("div",{className:e.container},a.a.createElement(g.o,{id:this.props.label,className:e.label},this.props.label),a.a.createElement(L.a,{classes:{container:e.slider},value:this.state.value,onChange:this.handleChange,min:1}))}}]),t}(n.Component),Y=Object(h.withStyles)(function(e){return{container:{padding:2*e.spacing.unit},label:{marginBottom:2*e.spacing.unit,textAlign:"left"}}})(A),M=o(62),W=o.n(M),B=o(40),z=o.n(B),F=o(58),H=o.n(F),V=o(63),U=o.n(V),q=o(60),J=o.n(q),Z=o(61),K=o.n(Z),Q=o(59),ee=o.n(Q),te=function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(b.a)(this,Object(s.a)(t).call(this,e))).handleImport=function(){o.props.handleImport(o.state.pattern)},o.handleClose=function(){o.props.handleClose(),o.setState({pattern:""})},o.handlePatternChange=function(e){o.setState({pattern:e.target.value})},o.state={pattern:""},o}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement(H.a,{open:this.props.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",maxWidth:"md"},a.a.createElement(ee.a,{id:"form-dialog-title"},"Import from RLE file"),a.a.createElement(J.a,null,a.a.createElement(K.a,null,"You can find over 1000 patterns on"," ",a.a.createElement("a",{href:"http://www.conwaylife.com/wiki/Category:Patterns",target:"_blank",rel:"noopener noreferrer"},"this")," ","wiki."),a.a.createElement(W.a,{error:this.props.hasError,className:e.textField,autoFocus:!0,margin:"dense",id:"Pattern",label:this.props.hasError?"Invalid pattern":"Pattern",value:this.state.pattern,helperText:"Paste content of RLE file",type:"text",fullWidth:!0,multiline:!0,rows:"10",onChange:this.handlePatternChange})),a.a.createElement(U.a,null,a.a.createElement(z.a,{onClick:this.handleClose,color:"primary"},"Cancel"),a.a.createElement(z.a,{onClick:this.handleImport,color:"primary"},"Import")))}}]),t}(n.Component),oe=Object(h.withStyles)(function(e){return{textField:{"& textarea":{fontSize:14,width:600}}}})(te),ne=function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(b.a)(this,Object(s.a)(t).call(this,e))).state={interval:0,formation:""},o.executeNextGeneration=function(){o.props.nextGeneration({cells:o.props.cells})},o.executeClear=function(){o.props.clearCells()},o.executeRun=function(){o.props.startExistence()},o.executeFormationChange=function(e){var t=e.target.value;o.setState({formation:t}),""===t?o.props.clearCells():"-1"===t?o.props.importPopup(!0):o.props.fillFormation({formation:parseInt(t)})},o.handleImportClose=function(){o.props.importPopup(!1),o.props.clearImportError()},o.handleImport=function(e){o.props.clearImportError(),o.props.fillFormation({pattern:e}),o.props.importPopup(!1)},o.ref=a.a.createRef(),o}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.executeFormationChange({target:{value:6}})}},{key:"render",value:function(){var e=this.props.classes;return a.a.createElement("div",{className:e.toolbar},a.a.createElement(g.c,{className:e.button,variant:"contained",color:"primary",size:"small",onClick:this.executeNextGeneration},"Next generation"),this.state.interval?a.a.createElement(g.c,{className:e.button,variant:"contained",color:"primary",size:"small",onClick:this.executeRun},"Stop"):a.a.createElement(g.c,{className:e.button,variant:"contained",color:"primary",size:"small",onClick:this.executeRun},this.props.shouldRun?"Stop":"Run"," "),a.a.createElement(g.c,{className:e.button,variant:"contained",color:"primary",size:"small",onClick:this.executeClear,id:"clear-button"},"Clear"),a.a.createElement("div",{className:e.formationContainer,id:"formation-selector"},a.a.createElement(g.f,{className:e.formationSelector},a.a.createElement(g.g,{htmlFor:"formation",className:e.label},"Formation"),a.a.createElement(g.m,{variant:"standard",value:this.state.formation,onChange:this.executeFormationChange,ref:this.ref,inputProps:{name:"formation",id:"formation"}},a.a.createElement(g.k,{value:""},"None"),_.labels.map(function(e,t){return a.a.createElement(g.k,{value:t,key:"formationmenu-".concat(t)},e)}),a.a.createElement(g.k,{value:"-1"},"Import pattern")))),a.a.createElement(oe,{open:this.props.showImportPopup||this.props.importError,hasError:this.props.importError,handleClose:this.handleImportClose,handleImport:this.handleImport}))}}]),t}(n.Component),ae=Object(j.b)(function(e){return{shouldRun:e.cell.shouldRun,cells:e.cell.cells,importError:e.cell.importError,showImportPopup:e.cell.showImportPopup}},function(e){return{nextGeneration:function(t){return e(G(t))},clearCells:function(){return e({type:"CLEAR_CELLS"})},startExistence:function(){return e({type:"START_EXISTENCE"})},stopExistence:function(){return e({type:"STOP_EXISTENCE"})},fillFormation:function(t){return e(k(t))},clearImportError:function(){return e({type:"IMPORT_ERROR",payload:{importError:!1}})},importPopup:function(t){return e({type:"IMPORT_POPUP",payload:{showImportPopup:t}})}}})(Object(h.withStyles)(function(e){return{toolbar:{paddingTop:3*e.spacing.unit,paddingBottom:3*e.spacing.unit,display:"flex",justifyContent:"center",flexGrow:1},button:{marginRight:2*e.spacing.unit},formationContainer:{position:"relative"},formationSelector:{position:"absolute",top:-2*e.spacing.unit,minWidth:12*e.spacing.unit}}})(ne)),re=Object(j.b)(function(e){return{generationNo:e.cell.generationNo,alivedCells:e.cell.alivedCells,cellsAmount:e.cell.cellsAmount,velocity:e.cell.velocity,populationSpeed:e.cell.populationSpeed}},function(e){return{changeSpeed:function(t){return e({type:"CHANGE_SPEED",payload:t})}}})(Object(h.withStyles)(function(e){return{drawer:{width:220,flexShrink:0,zIndex:1e3,overflow:"hidden","& > div":{width:220}},drawerPaper:{width:220},toolbar:{height:8*e.spacing.unit,width:"100%"},nestedListItem:{paddingLeft:4*e.spacing.unit},badge:{top:"50%",right:-.5*e.spacing.unit},sliderContainer:{padding:2*e.spacing.unit}}})(function(e){var t=e.classes,o=e.populationSpeed;return a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a,{position:"fixed",color:"default"},a.a.createElement(g.n,{className:t.toolbar},a.a.createElement(g.o,{variant:"h6",color:"inherit",noWrap:!0},"Game of life"),a.a.createElement(ae,null))),a.a.createElement(g.e,{variant:"permanent",className:t.drawer},a.a.createElement("div",{className:t.toolbar}),a.a.createElement(g.d,null),a.a.createElement(g.h,null,a.a.createElement(g.i,null,a.a.createElement(g.j,null,"Statistics:")),a.a.createElement(g.i,{className:t.nestedListItem},a.a.createElement(g.b,{badgeContent:e.generationNo,showZero:!0,max:9999,color:"primary",classes:{badge:t.badge}},a.a.createElement(g.j,null,"Generation"))),a.a.createElement(g.i,{className:t.nestedListItem},a.a.createElement(g.b,{badgeContent:e.alivedCells,max:9999,color:"primary",classes:{badge:t.badge}},a.a.createElement(g.j,null,"Population"))),a.a.createElement(g.i,{className:t.nestedListItem},a.a.createElement(g.b,{badgeContent:"".concat(e.velocity,"/s"),showZero:!0,color:"primary",classes:{badge:t.badge}},a.a.createElement(g.j,null,"Generation velociy")))),a.a.createElement(Y,{label:"Speed",onChange:function(t){e.changeSpeed({speed:t})},populationSpeed:o})))})),le=function(e){function t(){return Object(i.a)(this,t),Object(b.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement(a.a.Fragment,null,a.a.createElement(re,{pathname:this.props.location.pathname}),a.a.createElement("div",{className:e.panelContainer},a.a.createElement(u.a,{exact:!0,path:"/",component:X(w)}),a.a.createElement(u.a,{path:"/flexbox",component:X(v)}),a.a.createElement(u.a,{path:"/canvas",component:X(S)})))}}]),t}(n.Component),ie=Object(h.withStyles)(function(e){return{panelContainer:{marginTop:8*e.spacing.unit,flexGrow:1,display:"flex",overflow:"hidden"}}})(Object(d.a)(le)),ce=Object(h.withStyles)(function(e){return{app:{textAlign:"center",display:"flex",justifyContent:"flex-start",alignItems:"stretch",alignContent:"center",flexGrow:1}}})(function(e){return a.a.createElement("div",{className:e.classes.app},a.a.createElement(ie,null))}),be=(o(352),o(356)),se=o(30),pe=o(138),ue=o(25),de=o(139),he={cells:[],generationNo:0,alivedCells:0,cellSize:6,velocity:0,shouldRun:!1,populationSpeed:80,importError:!1,showImportPopup:!1},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CELL":return function(e,t){var o=e.cells.map(function(e){return Object(de.a)(e)}),n=t.payload,a=n.row,r=n.col;return o[a][r]=!o[a][r],Object(ue.a)({},e,{alivedCells:o[a][r]?e.alivedCells+1:e.alivedCells,cells:o})}(e,t);case"CLEAR_CELLS":return function(e){return Object(ue.a)({},e,{generationNo:0,alivedCells:0,cells:{}})}(e);case"START_EXISTENCE":return function(e,t){return Object(ue.a)({},e,{shouldRun:!e.shouldRun})}(e);case"STOP_EXISTENCE":return function(e,t){return Object(ue.a)({},e,{shouldRun:!1})}(e);case"CHANGE_SPEED":return function(e,t){var o=t.payload.speed;return Object(ue.a)({},e,{populationSpeed:o})}(e,t);case"NEXT_GENERATION":return function(e,t){var o=t.payload,n=o.cells,a=o.generationNo,r=void 0===a?e.generationNo+1:a,l=o.alivedCells,i=void 0===l?Object.keys(n).length:l,c=o.velocity,b=void 0===c?e.velocity:c;return Object(ue.a)({},e,{cells:n,generationNo:r,alivedCells:i,velocity:b})}(e,t);case"IMPORT_ERROR":return function(e,t){var o=t.payload.importError;return Object(ue.a)({},e,{importError:o})}(e,t);case"IMPORT_POPUP":return function(e,t){var o=t.payload.showImportPopup;return Object(ue.a)({},e,{showImportPopup:o})}(e,t);default:return e}},fe={isDragging:!1,startX:0,startY:0,viewportX:0,viewportY:0,oldViewportX:0,oldViewportY:0},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VIEWPORT_START_DRAG":return function(e,t){var o=t.payload,n=o.pageX,a=o.pageY;return Object(ue.a)({},e,{isDragging:!0,oldViewportX:e.viewportX,oldViewportY:e.viewportY,startX:n,startY:a})}(e,t);case"VIEWPORT_STOP_DRAG":return function(e,t){return Object(ue.a)({},e,{isDragging:!1,oldViewportX:0,oldViewportY:0,startX:0,startY:0})}(e);case"VIEWPORT_DRAGGING":return function(e,t){var o=t.payload,n=o.pageX,a=o.pageY,r=n-e.startX,l=a-e.startY;return Object(ue.a)({},e,{viewportX:e.oldViewportX+r,viewportY:e.oldViewportY+l})}(e,t);default:return e}},$e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,ve=Object(se.e)(Object(se.c)({cell:me,viewport:ge}),$e(Object(se.a)(pe.a)));l.a.render(a.a.createElement(be.a,null,a.a.createElement(j.a,{store:ve},a.a.createElement(ce,null))),document.getElementById("root"))}},[[209,2,1]]]);
//# sourceMappingURL=main.f716420c.chunk.js.map