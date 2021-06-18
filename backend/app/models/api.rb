# require 'pry'
require 'net/http'
require 'json'

class Api 
    attr_reader :url, :token
    def initialize(url) #replace only the token with yours
        @token = "BQCZ027F25cPwj8bwUi38kGOEPpG_wsEEQZ_SMkGCG1Zux7OlJmXiSK48WhAW1brq5dAfl7-iTINcj4GqnhIfup36nr65N3jPUi3rHvoAvKCRlzG9o-Nnsg9pcbInMCPbmI5omRS7UkV"     
        @url=url
    end

    def get_info 
        uri=URI(url)    
        new_req = Net::HTTP::Get.new(uri)
        new_req['Authorization'] = "Bearer #{token}" 
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = (uri.scheme == "https")
        response = http.request(new_req)
        return JSON(response.body)
    end

    def make_songs 
      get_info["tracks"].each do |t|
               
        title=t["name"]
        album_name = t['album']['name']
        popularity= t["popularity"]
        duration= t["duration_ms"]
        artists= t["artists"].map{|a| a['name']}.join(", ")
        # binding.pry
            Song.find_or_create_by(title: title, duration: duration, popularity: popularity, artists: artists, album_name: album_name)
        end
    end
end
# RUN THE FILE MANUALLY INSIDE THE RAILS CONSOLE
api = Api.new("https://api.spotify.com/v1/tracks?ids=3p2AAdoIgkuhoMLvWV10I9%2C10vyyepEcYPL7AD3m1TIoZ%2C2wtu98VfwtbCaEZ5eyhapV")
api.make_songs


##tracks##
## 3p2AAdoIgkuhoMLvWV10I9
## 10vyyepEcYPL7AD3m1TIoZ
## 2wtu98VfwtbCaEZ5eyhapV
# 4X0cCyJGd7XCCqVg8yEnU0
# 1PuJuMAkJ0qemOt6gxUQre
# 4L4ILWdhar79Iz3U7U5NVL
# 0Z5JTLnZVLcd83gmTZFM7u
# 38Oh09tTLn9covfXohA6jv
# 6SpViDXuXKTkEjjAadifHd
# 6EoAOLWwvspnwBnnajl535
# 0jd2DUOlAwxd12xv3B1cuk
# 2jKQ3Ue8AFWiA7vXl8EVRF
# 7Jr2Vk4ucuVvRP6cxMN9KD
# 7vhYud0viPBMa3oT79OJWS
# 1PHv6GHmSfjxfh1GdIFeUT
# 4y9phzUr1NTWL0svsJ0J4O
# 7jXpT1oYyn2GrZ12rs2zMd
# 7hLkDalB7aeSf9C7lNx3tL
# 0kqU88MM0db5pweiGvQJco
# 5N1TjHHPqNC42xyctpHsAo
# 5lCxw6AwRXriR8LlONMgZU
# 6nvPJAevTXcnyMpGEzJDBz
# 2h28nLnjUFMgVqZ43vbJoh
# 2RPwwY7Tjeole8DLxTTn9x
# 7cD9b8vreLPBS7YciYnn69
# 3xorPFIW9WaAsu2nBmJjag
# 4Pu0LxzUuRjbss267gLtaY
# 0t9qCCY7taZcx3LSz0PW9F
# 7GJZub0IUYXMQlNQyRUteg
# 664AkZ4BMCDfER8P7LEkfh
# 0yXD8BJamvaQvu7Ut3nHMB
# 0ZvXgpmQhnGOLEgM6wxDOA
# 3UN5yPcQWVqYukYBl2PNmr
# 6GcmZciRohvqC8ZUZYj4YI