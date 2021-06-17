# require 'pry'
require 'net/http'
require 'json'

class Api 
    attr_reader :url, :token
    def initialize(url) #replace only the token with yours
        @token = "BQCZ027F25cPwj8bwUi38kGOEPpG_wsEEQZ_SMkGCG1Zux7OlJmXiSK48WhAW1brq5dAfl7-iTINcj4GqnhIfup36nr65N3jPUi3rHvoAvKCRlzG9o-Nnsg9pcbInMCPbmI5omRS7UkV"     
        @url=url
    end

    def get_info #does not need to be touched
        uri=URI(url)    
        new_req = Net::HTTP::Get.new(uri)
        new_req['Authorization'] = "Bearer #{token}" 
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = (uri.scheme == "https")
        response = http.request(new_req)
        return JSON(response.body)
    end

    def make_songs #in your case it will be called make_songs and changed slightly
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
api = Api.new("https://api.spotify.com/v1/tracks?ids=67lbzVADsqJJ6tyVk0XCgn%2C3H7ihDc1dqLriiWXwsc2po%2C4TpXLhpLYQPMHM1A8W9J84")
api.make_songs

