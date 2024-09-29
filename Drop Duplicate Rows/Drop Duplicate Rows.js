// Source : https://leetcode.com/problems/drop-duplicate-rows/description/
// Author : Bayarjargal
// Date   : 2024-09-23


import pandas as pd

def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    return customers.drop_duplicates('email')
