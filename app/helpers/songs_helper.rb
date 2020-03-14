module SongsHelper
  def duration_seconds(duration)
    result = duration.split(/'|"/)
    if result.any? && result.length == 2
      result[0].to_i*60 + result[1].to_i
    else
      nil
    end
  end

  def duration_formated(duration)
    duration ? Time.at(duration).utc.strftime("%M'%S") : ""
  end
end
