import json

# Opening JSON file
f = open('output.json')

# returns JSON object as
# a dictionary
data = json.load(f) # data['data] len: 59

# Iterating through the json
# list

	
for i in range(59):
	print(data['data'][i])

print(len(data['data']))

# Closing file
f.close()
