import os
import librosa
import soundfile
import os, glob, pickle
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import accuracy_score, f1_score
import pandas as pd
from sklearn.preprocessing import binarize, LabelEncoder, MinMaxScaler
import joblib

# print("Loading model : ")
# filename = r'C:\Users\aayus\Downloads\modelForPrediction1.sav'
# audio_model = pickle.load(open(filename, 'rb'))
# print("Model loaded : ")


def preprocess(train_df: pd.DataFrame):
    defaultInt = 0
    defaultString = 'NaN'
    defaultFloat = 0.0

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


def extract_feature(file_name, mfcc, chroma, mel):
    with soundfile.SoundFile(file_name) as sound_file:
        X = sound_file.read(dtype="float32")
        sample_rate = sound_file.samplerate
        if chroma:
            stft = np.abs(librosa.stft(X))
        result = np.array([])
        if mfcc:
            mfccs = np.mean(librosa.feature.mfcc(y=X, sr=sample_rate, n_mfcc=40).T, axis=0)
            result = np.hstack((result, mfccs))
        if chroma:
            chroma = np.mean(librosa.feature.chroma_stft(S=stft, sr=sample_rate).T, axis=0)
            result = np.hstack((result, chroma))
        if mel:
            mel = np.mean(librosa.feature.melspectrogram(y=X, sr=sample_rate).T, axis=0)
            result = np.hstack((result, mel))
    return result


# filename = r'C:\Users\aayus\Downloads\modelForPrediction1.sav'

# loaded_model = pickle.load(open(filename, 'rb')) # loading the model file from the storage
# feature = extract_feature(r"C:\Users\aayus\Downloads\speech-emotion-recognition-ravdess-data/Actor_02/03-01-02-01-01-01-02.wav", mfcc=True, chroma=True, mel=True)
# feature = feature.reshape(1, -1)

# prediction = loaded_model.predict(feature)
# print(prediction)
