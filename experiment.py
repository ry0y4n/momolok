import requests
import time

# viberateUrl = "http://pavlok-mvp.herokuapp.com/api/v1/stimuli/vibration/127"
# zapUrl = "http://pavlok-mvp.herokuapp.com/api/v1/stimuli/shock/127"
# beepbUrl = "http://pavlok-mvp.herokuapp.com/api/v1/stimuli/beep/127"

base_url = "http://pavlok-mvp.herokuapp.com/api/v1/stimuli/"

# route: vibration or shock or beep
def postPavlok(route): 
    url = base_url + route + '/127'
    r = requests.post(
        url,
        {
            "access_token": "8f41ce104d231cc3090753571c343b1300f57f4cadf2dca24650bd3588933e6b",
            "reason": "string",
            "time": "2021-02-21T19:47:48.406Z"
        }
    )


if __name__=='__main__':
    for i in range(300):
        print(i)
        if i == 70 or i == 150 or i == 230:
            postPavlok("shock")
        time.sleep(1)
