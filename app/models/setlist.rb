class Setlist < ApplicationRecord
  has_many :setlist_positions
  has_many :songs, through: :setlist_positions
end
