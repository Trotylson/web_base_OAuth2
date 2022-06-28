import json


db_path = './database/users.json'

class Database():
    def __init__(self):
        pass
    
    def _get_data(self):
        users_db = open(db_path)
        self.read_data = json.loads(users_db.read())
        users_db.close()
        return self.read_data
    
    def _put_data(self, data):
        users_db = open(db_path, 'w')
        users_db.write(json.dumps(data))
        users_db.close()


class User(Database):
    def __init__(self):
        pass

    def register(self, username, email, password):
        read_data = super()._get_data()
        
        if username not in self.read_data:
            for user in self.read_data:
                if email in self.read_data[user]['email']:
                    return 'Email is taken!'
            
            new_user = {
                'username': username,
                'email': email,
                'hashed_password': password,
                'disabled': False
            }
            
            read_data[username]=new_user
            super()._put_data(self.read_data)
            
            return 'user added'
        
        return "Username already exist!"
        
# print(ParseUser().register('trotyl', 'trotyl@example.com','1234'))