export let updateSups = (sups) => ({ type: updateSups.toString(), sups });
updateSups.toString = () => 'UPDATE_SUPS';