export default (url: string, param: 'sort' | string, val: string | number) => {

    const value = val.toString();

    const intermediateURL = new URL(url);

    // if (param === 'sort') {
    //     const sortElements = intermediateURL.searchParams.get('sort') || '';

    //     if (sortElements?.length === 0) intermediateURL.searchParams.set('sort', value);

    //     else {
    //         const sortElementsList = sortElements.split(',');

    //         // console.log(sortElementsList, value)
    //         // console.log(sortElementsList.includes(value) || sortElementsList.includes(`-${value}`) || sortElementsList.includes(value.slice(1)))

    //         if (sortElementsList.includes(value) || sortElementsList.includes(`-${value}`) || sortElementsList.includes(value.slice(1))) {
                
    //             intermediateURL.searchParams.set('sort', sortElementsList.map(elem => {
    //                 if (elem.endsWith(value.slice(1))) return value;

    //                 else return elem;
    //             }).join(','));
    //         }

    //         else intermediateURL.searchParams.set('sort', [...sortElementsList, value].join(','));
    //     }

    // } else 
    intermediateURL.searchParams.set(param, value);


    return intermediateURL;
};