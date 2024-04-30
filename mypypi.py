

print((lambda a: a + 1)(5))

my_dict = {'Alex': 32, 'James': 27, 'Alexa': 27, 'Jesica': 15 }

# print(my_dict.items())

my_sorted_dict = dict(sorted(my_dict.items(), key= lambda tup: tup[1]))
print(my_sorted_dict)