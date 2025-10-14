export function getRandomElements(arr, count) {
    const result = [];
    const shuffled = arr.slice(); // 创建原数组的副本以避免修改原数组
    let i = arr.length;
    
    if (count > i) {
        throw new RangeError('Count larger than array length');
    }
    
    if (count === 0) {
        return [];
    }
    
    while (i-- > 0 && result.length < count) {
        const randomIndex = Math.floor(Math.random() * i);
        result.push(shuffled[randomIndex]);
        shuffled[randomIndex] = shuffled[i];
        shuffled[i] = result[result.length - 1];
    }
    
    return result;
}