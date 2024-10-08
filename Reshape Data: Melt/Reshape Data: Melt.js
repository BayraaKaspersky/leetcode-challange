// Source : https://leetcode.com/problems/reshape-data-melt/
// Author : Bayarjargal
// Date   : 2024-09-28

import pandas as pd

def meltTable(report: pd.DataFrame) -> pd.DataFrame:
    return pd.melt(report, id_vars=['product'],var_name='quarter', value_name='sales')
