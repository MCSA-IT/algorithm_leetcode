from typing import List
"""
Author: Zihang Gao
Date edit: 2021/09/05
Question: Leetcode 506.相对名次
"""

def findRelativeRanks(score: List[int]) -> List[str]:
    """
    暴力解法, 循环找最大值, 更新原数组前一个最大值为-1
    :param score: 运动员分数数组
    :return: 相对名称数组
    """
    result = [0 for _ in range(len(score))]
    for i in range(len(score)):
        max_index = score.index(max(score))
        if i == 0:
            result[max_index] = "Gold Medal"
        elif i == 1:
            result[max_index] = "Silver Medal"
        elif i == 2:
            result[max_index] = "Bronze Medal"
        else:
            result[max_index] = i + 1
        score[max_index] = -1
    return result

