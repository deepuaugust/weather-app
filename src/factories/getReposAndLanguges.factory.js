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