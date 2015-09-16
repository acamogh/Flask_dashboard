
from flask import send_file,make_response,Flask, request, jsonify
import os, json
from datetime import datetime,timedelta
from functools import wraps, update_wrapper
app = Flask(__name__)
 
def nocache(view):
    @wraps(view)
    def no_cache(*args, **kwargs):
        response = make_response(view(*args, **kwargs))
        response.headers['Last-Modified'] = datetime.now()
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '-1'
        return response
        
    return update_wrapper(no_cache, view)


def byteify(input):
    if isinstance(input, dict):
        return {byteify(key):byteify(value) for key,value in input.iteritems()}
    elif isinstance(input, list):
        return [byteify(element) for element in input]
    elif isinstance(input, unicode):
        return input.encode('utf-8')
    else:
        return input


@app.route('/')
#@cachecontrols
@nocache
def index():
    return send_file('templates/index.html')

@app.route('/register')
def register():
    return send_file('static/lib/templates/smartbuildingsRegistration.html')


@app.route('/table_data', methods=['POST'])
def tabledata():   
    data=json.loads(request.data)
    data = byteify(data)
    print data
    return make_response(jsonify({'data_tables':data}))


@app.route('/dropdown', methods=['POST'])
def dropdown_data():
    data=json.loads(request.data)
    print data
    return make_response(jsonify({'result':data}))    


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5005,debug=True)



