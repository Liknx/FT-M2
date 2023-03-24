var traverseDomAndCollectElements = function(matchFunc,startEl) {
  // console.log('traverseDomAndCollectElements');
  var resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  for(let i=0; i<startEl.children.length; i++){
    var elements = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
    resultSet = [...resultSet, ...elements];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function(selector) {
  // tu código aquí
  // console.log('selectorTypeMatcher');
  let x = selector.charAt(0);
  const pattern = new RegExp('^[A-Z]+$','i');
  if(x==='#'){
    return 'id';
  }else if(x==='.'){
    return 'class';
  }else if(selector.split('.').length === 2){
    return 'tag.class';
  }else{
    return 'tag';
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  // console.log('matchFunctionMaker');
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = el => el.id && ('#'+el.id.toLowerCase() === selector.toLowerCase());
  } else if (selectorType === "class") {
    matchFunction = el => {
      var y;
      x = el.className.split(' ');
      for(let i=0; i<x.length; i++){
        if(x[i] === selector.slice(1)){
          y = 1
        }
      }
      if(y === 1){
        return true;
      }else{
        return false;
      }
    }
  } else if (selectorType === "tag.class") {
    // matchFunction = el => el.tagName && el.className && (`${el.tagName.toLowerCase()}.${el.className.toLowerCase()}` === selector.toLowerCase());
    matchFunction = function(el){
      let w = selector.split('.');
      let x = () => el.tagName.toLowerCase() === w[0].toLowerCase() ? true : false;
      let y = () => {
        var v;
        let z = el.className.split(' ');
        for(let i=0; i<z.length; i++){
          if(z[i].toLowerCase() === w[1].toLowerCase()){
            v = 1
          }
        }
        if(v === 1){
          return true;
        }else{
          return false;
        }
      }
      if(x() && y()){
        return true;
      }else{
        return false;
      }
    }
  } else if (selectorType === "tag") {
    matchFunction = el => el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
  }
  return matchFunction;
};

var $ = function(selector) {
  // console.log('$');
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
