/**
 * @description - Function that checks and sorts value based on key.
 * @param {String} key - Key to be checked. 
 * @param {String} order - Descending or ascending.
 * @returns {Number} - Returns 1 or -1.  
 */
const compareValues = (key, order = 'asc') => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  /**
   * @description - Function that returns repo details and languages along with byte codes.
   * @param {Object} data - Repository data object. 
   * @param {Array} languages - Languages array.
   * @returns {Object} - Repo and language obj.
   */
const getReposAndLanguages = (data, languages) => {
    const response = languages;
    const sorted_stars_array = data.sort(compareValues('stargazers_count', 'desc'));
    let array = {};
    let total = 0;
    response.map((val, index) => {
        const keys = Object.keys(val);
        keys.map(item => {
            if(!array.hasOwnProperty(item)){
                array[item] = val[item];
                total += val[item];
            }
            else {
                array[item] += val[item];
                total += val[item]
            }
            return null;
        });
        return null;
    });
    return {
        data: sorted_stars_array,
        languages: array,
        total: total
    }
}

export default getReposAndLanguages;