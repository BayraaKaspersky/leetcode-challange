// Source : https://leetcode.com/problems/rename-columns/description/
// Author : Bayarjargal
// Date   : 2024-09-26

import pandas as pd

def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
     students.rename(columns={'id': 'student_id',
    'first': 'first_name',
    'last': 'last_name',
    'age': 'age_in_years'}, inplace=True)
     return students
