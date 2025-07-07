
export function checkCBExecTime(cb) {
    const startTime = Date.now();
    cb();
    const endTime = Date.now();
    return endTime - startTime;
}