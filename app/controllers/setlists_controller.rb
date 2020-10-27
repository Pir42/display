class SetlistsController < ApplicationController
  # GET /setlists
  def index
    @setlists = Setlist.all.order(:name).to_json(methods: [:number_of_songs, :duration_f])
  end

  # GET /setlists/new
  def new
    @setlist = Setlist.new
  end

  # POST /setlists
  def create
    @setlist = Setlist.new(setlist_params)
    respond_to do |format|
      if @setlist.save
        format.html { redirect_to setlist_path(@setlist), turbolinks: true }
      else
        format.html { render :edit }
      end
    end
  end

  # GET /setlists/:id
  def show
    @setlist = Setlist.find(params[:id])
    @setlist_songs = @setlist.songs_with_spid.to_json(methods: [:setlist_position_id])

    @songs = (Song.all.order(:title)).to_json
  end

  # PUT /setlists/:id
  def update
    @setlist = Setlist.find(params[:id])

    if params[:songs]
      
      raw_songs = JSON.parse(params[:songs])

      raw_songs.each do |raw_song|
        if raw_song["setlist_position_id"].nil?
          song = Song.find_by(id: raw_song["id"])
          unless song.nil?
            sp = SetlistPosition.create(setlist: @setlist, song: song, position: @setlist.songs.length + 1) 
            raw_song["setlist_position_id"] = sp.id
          end
        end
      end

      @setlist.setlist_positions.each do |sp|
        raw_song = raw_songs.find { |s| s["setlist_position_id"] == sp.id }
        if raw_song
          sp.update(position: raw_songs.index(raw_song) + 1)
        else
          sp.destroy
        end
      end

    end

    @setlist.update(setlist_params)

    respond_to do |format|
      format.html { redirect_to setlists_path }
    end
  end

  private

  def setlist_params
    params.require(:setlist).permit(
      :name
    )
  end

  def difference(original, other)
    h = other.each_with_object(Hash.new(0)) { |e,h| h[e] += 1 }
    original.reject { |e| h[e] > 0 && h[e] -= 1 }
  end
end
