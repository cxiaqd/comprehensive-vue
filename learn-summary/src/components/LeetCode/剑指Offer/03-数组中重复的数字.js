/**
 * 找出数组中重复的数字。
在一个长度为 n 的数组 nums 里的所有数字都在 "0～n-1" 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
请找出数组中任意一个重复的数字。
 */
let nums = [1, 2, 3, 4, 5, 6, 7, 5, 5]
function findRepeatNumber1(nums) {
    let map = new Map();
    for (let i of nums) {
        if (map.has(i)) return i;
        map.set(i, 1);
    }
    return null;

}
function findRepeatNumber2(nums) {
    nums = nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) return nums[i];
    }
}
function findRepeatNumber3(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return num;
        } else {
            set.add(num);
        }
    }
}
function findRepeatNumber4(nums) {
    let map = {}, res = null, n = nums.length;

    for (let i = 0; i < n; i++) {
        let curVal = nums[i];
        if (map[curVal] === undefined) {
            map[curVal] = 1;
        } else {
            res = curVal;
            break;
        }
    }
    return res
}

// 这里改变了原数组 需要注意多个方法的调用顺序
function findRepeatNumberLast(nums) {
    let n = nums.length;
    for (let i = 0; i < nums.length; i++) {
        // index表示nums[i]作为索引(由于被标记可能>n因此取模)
        // 这里非常妙就是利用+n标记既保留原始信息,又起到标记作用！
        let index = nums[i] % n;
        if (nums[index] >= n) {
            // 遇到nums[index]对应的位置元素>=n说明被前面标记过
            // 进一步说明index索引前面已经出现过,直接返回
            return index;
        } else {
            // 没有被标记过,进行标记!
            nums[index] += n;
        }
    }
}

function OfficalFindRepeatNumber(nums) {
    if (nums == null || nums.length < 0) {
        return -1;
    }
    // 题目的条件是数组 nums 里的所有数字都在 0～n-1 的范围内
    for (let i = 0, length = nums.length; i < length; i++) {
        if (nums[i] < 0 || nums[i] > length - 1) {
            return -1;
        }
    }
    // 思路就是把数字放到对应的索引上  比方说数字3放到索引3的位置
    for (let i = 0; i < nums.length; i++) {
        // 如果当前数字跟对应的索引不相同则交换
        while (nums[i] != i) {
            if (nums[i] == nums[nums[i]]) {
                return nums[i];
            }
            // 这里还不能用简化的方式   一用简化的方式就报超时问题
            // [nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]];
            // 改成下面这样就ok了
            let temp = nums[i];
            [nums[i], nums[temp]] = [nums[temp], nums[i]];
        }
    }
    return -1;
}
console.log("findRepeatNumber1:" + findRepeatNumber1(nums));
console.log("findRepeatNumber2:" + findRepeatNumber2(nums));
console.log("findRepeatNumber3:" + findRepeatNumber3(nums));
console.log("findRepeatNumber4:" + findRepeatNumber4(nums));
console.log("OfficalFindRepeatNumber:" + OfficalFindRepeatNumber(nums));
console.log("findRepeatNumberLast:" + findRepeatNumberLast(nums));
