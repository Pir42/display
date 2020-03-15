class Song < ApplicationRecord
  has_many :setlist_positions
  has_many :setlists, through: :setlist_positions

  attr_accessor :duration_formated
end
