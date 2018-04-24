const UPDATE_SUPS = 'UPDATE_SUPS';
export let updateSups = (sups) => ({ type: UPDATE_SUPS, sups });
updateSups.toString = () => UPDATE_SUPS;

const REMOVE_SUP = 'REMOVE_SUP';
export let removeSup = (sup) => ({ type: REMOVE_SUP, sup });
removeSup.toString = () => REMOVE_SUP;