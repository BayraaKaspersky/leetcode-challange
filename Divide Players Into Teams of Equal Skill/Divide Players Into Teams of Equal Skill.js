// Source : https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/description
// Author : Bayarjargal
// Date   : 2024-10-04

/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    let sum = 0 
    skill.sort((a,b) => a-b)
    const targetSkill = skill[0] + skill[skill.length - 1]
    for (let i = 0; i < skill.length/2; i++) {
       const teamSkill = skill[i] + skill[skill.length - 1 - i]
        if (teamSkill !== targetSkill) {
            return -1
        }
      sum+= skill[i] * skill[skill.length - 1 - i]
    }
    return sum
};
