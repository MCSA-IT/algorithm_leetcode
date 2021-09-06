"""
Author: Zihang Gao
Date edit: 2021/09/01
"""

def climbStairs(n: int) -> int:
    """
    :param n: 楼梯层数
    :return: 爬楼梯的方法数量
    """

    # 设置基本层数
    if n == 1:
        return 1
    elif n == 2:
        return 2

    # 大于基本层数的, 使用 n = (n-1) + (n-2) 解决, n = 当前层数的解决方法数量
    result_list = [1, 2]
    for i in range(2, n):
        result_list.append(result_list[i-2] + result_list[i-1])
    return result_list[-1]
