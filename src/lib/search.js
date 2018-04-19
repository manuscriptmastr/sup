export const filter = (arr) => {

  let by = (params, fuzzy = false) => {
    let paramEntries = Object.entries(params);
    let method = fuzzy ? 'some' : 'every';
    let include = paramEntries[method].bind(paramEntries);
    let filteredArr = arr.filter(el =>
      include(([k, v]) => el[k] === v)
    );
    return filteredArr;
  }

  return {
    by
  }
}

// filter(users).by({ age: '25', lastName: 'Martin' });

export const filterBy = (params, arr) => {

  let filter = (a) => {
    let paramEntries = Object.entries(params);
    let filteredArr = a.filter(el =>
      paramEntries.every(([k, v]) => el[k] === v)
    );
    return filteredArr;
  }
  return arr ? filter(arr) : (a) => filter(a);
}

// filterBy({ age: '25, lastName: 'Martin' }, users);
// filterBy({ age: '25, lastName: 'Martin' })(users);