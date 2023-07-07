import json

# Opening JSON file
f = open('output.json')

# returns JSON object as
# a dictionary
data = json.load(f) # data['data] len: 59

# Iterating through the json
# list

x_top_left = []

for i in range(59):
	print(data['data'][i]['topLeft']['x'])
	x_top_left.append([i, data['data'][i]['topLeft']['x']])

print(len(data['data']))

# Closing file
f.close()
