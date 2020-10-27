class Setlist < ApplicationRecord
  include SongsHelper

  has_many :setlist_positions
  has_many :songs, through: :setlist_positions

  def number_of_songs
    songs.length
  end

  def songs_with_spid
    the_songs = Array.new
    setlist_positions.order(:position).each do |sp|
      song = sp.song
      song.setlist_position_id = sp.id
      the_songs.push(song)
    end
    the_songs
  end

  def duration
    songs.select { |s| !s.duration.nil? }.sum(&:duration)
  end

  def duration_f
    duration_formated(duration)
  end
end
