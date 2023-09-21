import json

import pandas as pd
from sklearn import preprocessing
from sklearn.preprocessing import binarize, LabelEncoder, MinMaxScaler
import joblib

defaultInt = 0
defaultString = 'NaN'
defaultFloat = 0.0

def preprocess(train_df: pd.DataFrame):
    s = pd.Series(train_df['Age'])
    s[s < 18] = train_df['Age'].median()
    train_df['Age'] = s
    s = pd.Series(train_df['Age'])
    s[s > 120] = train_df['Age'].median()
    train_df['Age'] = s

    train_df['age_range'] = pd.cut(train_df['Age'], [0, 20, 30, 65, 100], labels=["0-20", "21-30", "31-65", "66-100"], include_lowest=True)
    train_df['self_employed'] = train_df['self_employed'].replace([defaultString], 'No')
    train_df['work_interfere'] = train_df['work_interfere'].replace([defaultString], 'Don\'t know')

    le = LabelEncoder()
    for feature in train_df:
        le.fit(train_df[feature])
        train_df[feature] = le.transform(train_df[feature])

    train_df = train_df.drop(['Country'], axis=1)
    # Scaling Age
    scaler = MinMaxScaler()
    train_df['Age'] = scaler.fit_transform(train_df[['Age']])
    train_df.head()

    # define X and y
    feature_cols = ['Age', 'Gender', 'family_history', 'benefits', 'care_options', 'anonymity', 'leave',
                    'work_interfere']
    X = train_df[feature_cols]
    return X


# file_path = r"Data/data.json"

# fp = open(file_path, "r+")
# data = json.load(fp)

# print("Load the CSV file into a DataFrame")
# df = pd.DataFrame(data, index=[0])

# x = preprocess(df)
# print("Loading Model")
# main_model = joblib.load(r'model/stack_model.pkl')

# print("Making Predictions")
# predictions = main_model.predict(x)

# print(predictions[0])
