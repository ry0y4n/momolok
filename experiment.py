import requests

url = "http://pavlok-mvp.herokuapp.com/api/v1/stimuli/vibration/127"

r = requests.post(
    url,
    {
        "access_token": "8f41ce104d231cc3090753571c343b1300f57f4cadf2dca24650bd3588933e6b",
        "reason": "string",
        "time": "2021-02-21T19:47:48.406Z"
    }
)

