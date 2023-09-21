import glob
import pickle
import numpy as np

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import joblib
import pandas as pd
import json

from Preprocessing import preprocess
import warnings

warnings.filterwarnings("ignore", category=DeprecationWarning)

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADER"] = "Content-type"


file_path = r"Data/dataset.csv"
main_model = joblib.load(r'C:\Users\Tarundeep\Downloads\Mental_Health_Project-main\Mental_Health_Project-main\ML_server\model\stack_model.pkl')


# @app.route('/')
# def hello_world():
#     return 'Hello World!'


@app.route("/predict", methods=['GET'])
@cross_origin()
def predict():
    data = dict(request.json)
    data["Age"] = int(data["Age"])
    data['care_options'] = data['obs_consequence']
    print(data,  end="\n\n\n")


    df = pd.DataFrame(data, index=[0])
    # df.drop('obs_consequence', inplace=True)
    x = preprocess(df)

    predictions = main_model.predict(x)
    print(predict)
    return jsonify({"predicted": str(predictions[0])})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=300, debug=False)
