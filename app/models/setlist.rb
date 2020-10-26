class Setlist < ApplicationRecord
  include SongsHelper

  has_many :setlist_positions
  has_many :songs, through: :setlist_positions

  def number_of_songs
    songs.length
  end

  def duration
    songs.sum(&:duration)
  end

  def duration_f
    duration_formated(duration)
  end
end
