# import numpy as np  # linear algebra
# import pandas as pd  # data processing, CSV file I/O (e.g. pd.read_csv)
# import matplotlib.pyplot as plt

# from scipy import stats
# from scipy.stats import randint
# from sklearn.metrics._dist_metrics import EuclideanDistance
# # prep
# from sklearn.model_selection import train_test_split
# from sklearn import preprocessing
# from sklearn.datasets import make_classification
# from sklearn.preprocessing import binarize, LabelEncoder, MinMaxScaler

# # models
# from sklearn.linear_model import LogisticRegression
# from sklearn.tree import DecisionTreeClassifier
# from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier

# # Validation libraries
# from sklearn import metrics
# from sklearn.metrics import accuracy_score, mean_squared_error, precision_recall_curve
# from sklearn.model_selection import cross_val_score
# # Stacking
# from mlxtend.classifier import StackingClassifier

# # Input data files are available in the "../input/" directory.
# # For example, running this (by clicking run or pressing Shift+Enter) will list the files in the input directory

# from subprocess import check_output


# def preprocess(train_df):
#     # dealing with missing data
#     # Let’s get rid of the variables "Timestamp",“comments”, “state” just to make our lives easier.
#     train_df = train_df.drop(['comments'], axis=1)
#     train_df = train_df.drop(['state'], axis=1)
#     train_df = train_df.drop(['Timestamp'], axis=1)

    # defaultInt = 0
    # defaultString = 'NaN'
    # defaultFloat = 0.0

#     # Encoding data
#     labelDict = {}
#     for feature in train_df:
#         le = preprocessing.LabelEncoder()
#         le.fit(train_df[feature])
#         le_name_mapping = dict(zip(le.classes_, le.transform(le.classes_)))
#         train_df[feature] = le.transform(train_df[feature])
#         # Get labels
#         labelKey = 'label_' + feature
#         labelValue = [*le_name_mapping]
#         labelDict[labelKey] = labelValue

#     for key, value in labelDict.items():
#         print(key, value)

#     # Get rid of 'Country'
#     train_df = train_df.drop(['Country'], axis=1)
#     # Create lists by data tpe
#     intFeatures = ['Age']
#     stringFeatures = ['Gender', 'Country', 'self_employed', 'family_history', 'treatment', 'work_interfere',
#                       'no_employees', 'remote_work', 'tech_company', 'anonymity', 'leave', 'mental_health_consequence',
#                       'phys_health_consequence', 'coworkers', 'supervisor', 'mental_health_interview',
#                       'phys_health_interview',
#                       'mental_vs_physical', 'obs_consequence', 'benefits', 'care_options', 'wellness_program',
#                       'seek_help']
#     floatFeatures = []

#     # Clean the NaN's
#     for feature in train_df:
#         if feature in intFeatures:
#             train_df[feature] = train_df[feature].fillna(defaultInt)
#         elif feature in stringFeatures:
#             train_df[feature] = train_df[feature].fillna(defaultString)
#         elif feature in floatFeatures:
#             train_df[feature] = train_df[feature].fillna(defaultFloat)

#     # clean 'Gender'
#     # Slower case all columm's elements
#     gender = train_df['Gender'].str.lower()
#     # print(gender)

#     # Select unique elements
#     gender = train_df['Gender'].unique()

#     # Made gender groups
#     male_str = ["male", "m", "male-ish", "maile", "mal", "male (cis)", "make", "male ", "man", "msle", "mail", "malr",
#                 "cis man", "Cis Male", "cis male"]
#     trans_str = ["trans-female", "something kinda male?", "queer/she/they", "non-binary", "nah", "all", "enby", "fluid",
#                  "genderqueer", "androgyne", "agender", "male leaning androgynous", "guy (-ish) ^_^", "trans woman",
#                  "neuter", "female (trans)", "queer", "ostensibly male, unsure what that really means"]
#     female_str = ["cis female", "f", "female", "woman", "femake", "female ", "cis-female/femme", "female (cis)",
#                   "femail"]

#     for (row, col) in train_df.iterrows():

#         if str.lower(col.Gender) in male_str:
#             train_df['Gender'].replace(to_replace=col.Gender, value='male', inplace=True)

#         if str.lower(col.Gender) in female_str:
#             train_df['Gender'].replace(to_replace=col.Gender, value='female', inplace=True)

#         if str.lower(col.Gender) in trans_str:
#             train_df['Gender'].replace(to_replace=col.Gender, value='trans', inplace=True)

#     # Get rid of bullshit
#     stk_list = ['A little about you', 'p']
#     train_df = train_df[~train_df['Gender'].isin(stk_list)]

#     # complete missing age with mean
#     train_df['Age'].fillna(train_df['Age'].median(), inplace=True)

#     # Fill with media() values < 18 and > 120       useful
#     s = pd.Series(train_df['Age'])
#     s[s < 18] = train_df['Age'].median()
#     train_df['Age'] = s
#     s = pd.Series(train_df['Age'])
#     s[s > 120] = train_df['Age'].median()
#     train_df['Age'] = s

#     # Ranges of Age                     useful
#     train_df['age_range'] = pd.cut(train_df['Age'], [0, 20, 30, 65, 100], labels=["0-20", "21-30", "31-65", "66-100"],
#                                    include_lowest=True)

#     # There are only 0.014% of self-employed so let's change NaN to NOT self_employed
#     # Replace "NaN" string from defaultString
#     train_df['self_employed'] = train_df['self_employed'].replace([defaultString], 'No')

#     # There are only 0.20% of self work_interfere so let's change NaN to "Don't know
#     # Replace "NaN" string from defaultString
#     # usefull
#     train_df['work_interfere'] = train_df['work_interfere'].replace([defaultString], 'Don\'t know')

#     # Encoding data     used before
#     labelDict = {}
#     for feature in train_df:
#         le = preprocessing.LabelEncoder()
#         le.fit(train_df[feature])
#         le_name_mapping = dict(zip(le.classes_, le.transform(le.classes_)))
#         train_df[feature] = le.transform(train_df[feature])
#         # Get labels
#         labelKey = 'label_' + feature
#         labelValue = [*le_name_mapping]
#         labelDict[labelKey] = labelValue

#     for key, value in labelDict.items():
#         print(key, value)

#     # Get rid of 'Country'      why drop if feature_colm selection later
#     train_df = train_df.drop(['Country'], axis=1)

#     # Scaling Age        useful
#     scaler = MinMaxScaler()
#     train_df['Age'] = scaler.fit_transform(train_df[['Age']])
#     train_df.head()

#     # define X and y
#     feature_cols = ['Age', 'Gender', 'family_history', 'benefits', 'care_options', 'anonymity', 'leave',
#                     'work_interfere']
#     X = train_df[feature_cols]
#     return (X)


# from flask import Flask, request, jsonify
# import joblib

# file_path = r"Data/dataset.csv"

# print("Load the CSV file into a DataFrame")
# df = pd.read_csv(file_path)
# df.drop(["id"], inplace=True, axis=1)

# # x = preprocess(df)
# print("Loading Model")
# main_model = joblib.load(r'model/stack_model.pkl')
# print("Making Predictions")
# predictions = main_model.predict(df)

# print(predictions[0])

# app = Flask(__name__)

# # Load the pre-trained model
# model = joblib.load('/home/abhishek/ML Model Pkl Experiment/stack_model.pkl')


# # @app.route('/predict', methods=['POST'])
# # def predict():
# #     try:
# #         # Get input data from the request
# #         data = request.get_json()
# #
# #         # Make predictions using the loaded model
# #         predictions = model.predict(data['features'])
# #
# #         # Prepare the response
# #         response = {'predictions': predictions.tolist()}
# #
# #         return jsonify(response)
# #     except Exception as e:
# #         return jsonify({'error': str(e)})
# #
# #
# # if __name__ == '__main__':
# #     app.run()
